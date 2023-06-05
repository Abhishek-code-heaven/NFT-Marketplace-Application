#!/usr/bin/env python
# encoding: utf-8
import json
from flask import Flask, request
import random
import time
with open("C:/Users/Desktop/NFTMarketplaceTwo/totaldata.json") as f:
    totaldata = json.load(f)

app = Flask(__name__)

@app.route('/nft',methods = ['POST', 'GET'])

def nft():
    try:
       if request.method == 'POST':
          # my_json = request.data.decode('utf8').replace("'", '"')
          data = json.loads(request.data)

          finalout = (totaldata[data["searchword"].lower()])

          finalcontent = []
          for val in finalout.keys():
              if val == 'averagefornft':
                  continue
              content = {"image": finalout[val][0],
               "title": val,
               "text": finalout[val][2][0:50]

               }
              finalcontent.append(content)


          val = json.dumps(finalcontent)
          with open("currentdata.json", "w") as outfile:
              outfile.write(val)
          return json.dumps(finalcontent)

       else:
           print("lower")
           data = json.loads(request.data)

           # try:
           finalout = (totaldata[data["searchword"].lower()])

           finalcontent = []
           for val in finalout.keys():
               if val == 'averagefornft':
                   continue
               if val == "averagefornft":
                   print("yes")
               content = {"image": finalout[val][0],
                          "title": val,
                          "text": finalout[val][2][0:10]
                          }
               finalcontent.append(content)

           val = json.dumps(finalcontent)
           with open("currentdata.json", "w") as outfile:
               outfile.write(val)
           return json.dumps(finalcontent)

    except:
        with open('currentdata.json') as f:
            finalcontent = json.load(f)
        return finalcontent


if __name__ == '__main__':
   app.run(debug = True)


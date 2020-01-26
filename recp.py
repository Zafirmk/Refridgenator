from bs4 import BeautifulSoup
import requests
import re
from vision import *
import base64


class Recipe:
    def __init__(self):
        pass

    # def convertBase64ToImage(self, base64Path):
    #     png_recovered = base64.decodestring(base64Path)
    #     f = open('imageToSave.png', "wb")
    #     f.write(png_recovered)
    #     f.close()
        

    def analyzeImageScrape(self):
        ingrediants_found =ObjectIdentifier("./front-end/uploads/imageToSave.png")
        ingrediants_used = ','.join(ingrediants_found)
        my_url = requests.get("https://www.allrecipes.com/search/results/?ingIncl="+ingrediants_used+"&sort=re").text
        soup = BeautifulSoup(my_url, features="html.parser")
        a_tags = []
        img_tags = []
        recipe_TITLES=[]
        recipe_URLS=[]
        recipe_IMAGES=[]
        recipes = soup.findAll("div", {"class": "grid-card-image-container"})
        # Extract recipe URLs
        for n, __ in enumerate(recipes):
            a_tags.append(recipes[n].find('a', href=True))
            recipe_URLS.append(a_tags[n]["href"])
            recipe_IMAGES.append(a_tags[n].find("img")["data-original-src"])
            recipe_TITLES.append(a_tags[n].find("img")["title"])


        for x in range(0, len(recipe_TITLES)):
            recipe_TITLES[x] = recipe_TITLES[x].replace(' Recipe and Video', '')

        print (recipe_TITLES)

        print (ingrediants_found)

        outList = []
        outList.append(recipe_TITLES)


        # We can add another check here, to see if there is just a food item thing to use recursion and check further for what the image could be
        outList.append(recipe_URLS)
        outList.append(ingrediants_found)
        return outList 

import requests
from bs4 import BeautifulSoup
import os
import urllib.request
import time
from ./utils/index import create_dir, get_img


def main(): 
    url = "https://www.2717.com/meishitupian/list_25_3.html"
    create_dir('pic')
    r = requests.get(url)
    r.raise_for_status()
    r.encoding = r.apparent_encoding

    soup = BeautifulSoup(r.text, 'html.parser')
    pic_list = soup.find_all('ul')
    
    for i in pic_list:
        imgs = i.find_all('img')
        for img in imgs: 
            link = img.get('src')
            get_img(link)

if __name__ == '__main__':
    main()
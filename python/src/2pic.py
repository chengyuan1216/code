import requests
from bs4 import BeautifulSoup
import os
import urllib.request
import time
from threading import Thread

def create_dir(name):
    if not os.path.exists(name):
        os.makedirs(name)

# 下载图片
def get_img(title, link):
    create_dir('pic\\'+ title)
    # print(link)
    dir = os.getcwd()
    print(os.path.basename(link))
    filename = os.path.basename(link)
    urllib.request.urlretrieve(link, dir + '\\pic\\' + title + '\\' +filename)

#  获取文章页面
def get_article_html(url):
    r = requests.get(url)
    r.raise_for_status()
    r.encoding = r.apparent_encoding
    soup = BeautifulSoup(r.text, 'html.parser')
    article_list = soup.find_all('article', class_='entry')
    a_list = article_list[0].find_all('a')
    title = article_list[0].find('header').find('h2').get_text()
    threads = []
    for a in a_list:
        if  a.get('data-fancybox'):
            img_path = a.get('href')
            # print(title)
            # print(img_path)
            t = Thread(target = get_img, args = [title, img_path])
            t.start()
            threads.append(t)
            # get_img(title, img_path)
    for t in threads:
        t.join()

# 获取文章列表页面
def get_list_html(url):
    r = requests.get(url)
    r.raise_for_status()
    r.encoding = r.apparent_encoding
    # print(r.text)

    soup = BeautifulSoup(r.text, 'html.parser')
    article_list = soup.find_all('article', class_='post')
    threads = []
    for article in article_list:
        article_path = (article.find_all('a'))[0].get('href')
        # get_article_html(article_path)
        t = Thread(target = get_article_html, args = [article_path])
        t.start()
        threads.append(t)
        # print(article_path)
    for t in threads:
        t.join()


def main(): 
    create_dir('pic')
    threads = []
    for num in range(100,400):
        print(num)
        # get_list_html("https://img.2gugu.com/category-5_{}.html".format(num))
        url = "https://img.2gugu.com/category-5_{}.html".format(num)
        t = Thread(target = get_list_html, args = [url])
        t.start()
        threads.append(t)
        # print(article_path)
    for t in threads:
        t.join()

if __name__ == '__main__':
    main()
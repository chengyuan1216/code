def create_dir(name):
    if not os.path.exists(name):
        os.makedirs(name)

def get_img(link):
    print(link)
    dir = os.getcwd()
    filename = str(round(time.time() * 1000000)) + '.jpg'
    urllib.request.urlretrieve(link, dir + '\\pic\\' + filename)
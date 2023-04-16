import requests
from bs4 import BeautifulSoup

url = "https://twitter.com/elonmusk"

# 1. Getting the HTML
r = requests.get(url)
htmlcontent = r.content
print(htmlcontent)

# 2. Parse the HTML
soup = BeautifulSoup(htmlcontent, 'html.parser')
print(soup.prettify)


# 3. HTML Tree Traversal

title = soup.title

print(type(soup))
print(type(title))
print(type(title.string))  # navigable string

# Getting all the paragraphs from the page
paras = soup.find_all('p')
print(paras)

# getting all anchor tags
anchor = soup.find_all('a')
print(anchor)

# getting all the links in the page
all_links = set()
for link in anchor:
    if (link.get('href') != '#'):
        linkText = link.get('href')
        all_links.add(linkText)
print(linkText)


# getting the first paragraph
print(soup.find('p'))
# getting class
print(soup.find('p')['class'])

# finding all elements with class "mt-2"
print(soup.find_all("p", class_="mt-2"))


# print getting the text
print(soup.find('p').get_text())  # same as InnerText in JS

markup = "<p><!-- Comment in HTML --></p>"
soup2 = BeautifulSoup(markup)
print(soup2)
print(soup2.p.string)
print(type(soup2.p.string))


bgmImage = soup.find(id='react-root')
print(bgmImage.children)
for elem in bgmImage.children:  # .children doesn't occupy memory unlike .content does
    print(elem)

for elem in bgmImage.stripped_strings:  # gathering all strings
    print(elem)

# finding the parent
print("\n\nParent of this child is \n\n", bgmImage.parent)


for elem in bgmImage.parents:  # from the Root Node , it finds parents and ancestors
    print(elem.name)

print(bgmImage.previous_sibling)
print("\n\n\n\n\n")
print(bgmImage.previous_sibling.previous_sibling)
print("\n\n\n\n\n")
print(bgmImage.next_sibling)
print("\n\n\n\n\n")
print(bgmImage.next_sibling.next_sibling)
print("\n\n\n\n\n")
print(bgmImage.next_sibling.next_sibling.next_sibling)
print("\n\n\n\n\n")

mydiv = soup.find(
    "div", {"class": "css-1dbjc4n r-aqfbo4 r-16y2uox"})
print(mydiv)

elem = soup.select("#abc")
elem2 = soup.select(".css-1dbjc4n r-1ifxtd0 r-ymttw5 r-ttdzmv")
print(elem)
print(elem2)

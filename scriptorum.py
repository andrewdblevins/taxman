import svgwrite
from collections import namedtuple

class Point(namedtuple('Vector2d',['x','y'])):
    def __add__(self,b):
        return Point(self.x+b.x,self.y+b.y)

class RealCharacter(object):
    def __init__(self,Pos ,genus, difference, species):

        

        self.start = Pos
        self.end = Pos+ Point(60,0)
        self.genus = genus
        self.difference = difference
        self.species = species


    def render(self):
        G = {}
        D = {1:Point(14,-14),2:Point(0,-20),3:Point(-14,-14),4:Point(-14,14),5:Point(0,20),6:Point(14,14),7:(),8:(),9:()}
        S = {1:Point(-14,-14),2:Point(0,-20),3:Point(14,-14),4:Point(14,14),5:Point(0,20),6:Point(-14,14),7:(),8:(),9:()}

        dwg = svgwrite.Drawing('test.svg', profile='tiny')
        dwg.add(dwg.line(self.start, self.end, stroke=svgwrite.rgb(10, 10, 16, '%')))
        
        dwg.add(dwg.line(self.start + D[self.difference], self.start, stroke=svgwrite.rgb(10, 10, 16, '%')))
        dwg.add(dwg.line(self.end, self.end + S[self.species], stroke=svgwrite.rgb(10, 10, 16, '%')))
        
        dwg.save()
    
RealCharacter(Point(30,50),5,4,6).render()

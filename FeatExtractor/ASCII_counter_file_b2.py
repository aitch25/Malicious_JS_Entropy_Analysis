
import sys
import os
import inspect

# make result
ExtractedResults = "/home/cloudera/Desktop/Mining_PY/Result_B.csv"

# read file data
InputDir        = "/home/cloudera/Desktop/Mining_PY/Benign/"

FilePath = []

CountOfFeature = 0

ResultFile = open(ExtractedResults, "w")

ResultFile.write("FileName,")

x = [0] * 127
CharTotal = 0
OutOfASCII = 0

for IndexOfFeature in range(len(x)):
	TargetString = IndexOfFeature 
	ResultFile.write(str(TargetString) + ",")

ResultFile.write("OutOfASCII,CharTotal, LineTotal, AvgCharPerLine, # of Strings, % of Space, # of Word, % of Word, Readable, RationOfNum , RatioOfEng, RatioOfSpcChar, MaxCharNumPerLine, DistDegree,NumOfNumType,NumOfEngType,NumOfSpcType, MaxNumOfSpc, MaxNumOfSpcChar \n")

for root, directories, files in os.walk(InputDir):

    for filename in files:
        FilePath = os.path.join(root, filename)

        if FilePath.endswith('.js'):
            with open(FilePath, encoding="utf8", errors='ignore') as f:
                CharTotal = 0
                OutOfASCII = 0 
                RatioOfNum = 0
                RatioOfEng = 0
                RatioOfSpcChar = 0 
                MaxCharNumPerLine = 0
                DistDegree = 0
                NumOfNumType = 0
                NumOfEngType = 0
                NumOfSpcType = 0
                MaxNumOfSpc = 0
                MaxNumOfSpcChar = 0 

                for line in f:
			 
                    CharNumPerLine = 0
                    for ch in line:
                        CharNumPerLine = CharNumPerLine + 1
                        try:
                            x[ord(ch)] = x[ord(ch)] + 1
                        except IndexError:
                            OutOfASCII = OutOfASCII + 1
                            print("can not index")


                    CharTotal = CharTotal + CharNumPerLine 
                    if MaxCharNumPerLine < CharNumPerLine :
                       MaxCharNumPerLine = CharNumPerLine	
	 
            ResultFile.write(filename + ",")

            for IndexOfFeature in range(len(x)):
                TargetString = x[IndexOfFeature]
                ResultFile.write(str(TargetString) + ",")
                if IndexOfFeature >= 48 and IndexOfFeature <=57 :
                    RatioOfNum = RatioOfNum + x[IndexOfFeature] 
                    if x[IndexOfFeature]>0: NumOfNumType = NumOfNumType + 1                 
                if (IndexOfFeature >= 65 and IndexOfFeature <=90) or (IndexOfFeature >= 97 and IndexOfFeature <=122) :
                    RatioOfEng = RatioOfEng + x[IndexOfFeature] 
                    if x[IndexOfFeature]>0: NumOfEngType = NumOfEngType + 1                 
                if (IndexOfFeature >= 33 and IndexOfFeature <=47) or (IndexOfFeature >= 58 and IndexOfFeature <=64) or  (IndexOfFeature >= 91 and IndexOfFeature <=96) or (IndexOfFeature >= 123 and IndexOfFeature <=126) :
                    RatioOfSpcChar = RatioOfSpcChar + x[IndexOfFeature]
                    if x[IndexOfFeature]>0:
                       NumOfSpcType = NumOfSpcType + 1                
                       if MaxNumOfSpc < x[IndexOfFeature] :     
                           MaxNumOfSpc = x[IndexOfFeature]
                           MaxNumOfSpcChar = IndexOfFeature 
            if CharTotal != 0 : 
                RatioOfNum = round(RatioOfNum / CharTotal * 100,1) 
                RatioOfEng = round(RatioOfEng / CharTotal * 100,1) 
                RatioOfSpcChar = round(RatioOfSpcChar / CharTotal * 100,1) 
                if NumOfEngType != 0 : DistDegree = round(CharTotal / NumOfEngType,1)  
 
                if x[10]!=0:
                    AvgCharPerLine = round( CharTotal / x[10],1 )
                else:
                    AvgCharPerLine = 0  

                NumOfStrings = x[34] / 2
                RatioOfSpace = round( x[32] / CharTotal*100,1 )
	

            ResultFile.write(str(OutOfASCII) + "," + str(CharTotal) + "," + str(x[10]) + "," + str(AvgCharPerLine) + "," + str(NumOfStrings) + "," + str(RatioOfSpace) + "%" + ",,,,"  )
            ResultFile.write(str(RatioOfNum) + "," + str(RatioOfEng) + "," + str(RatioOfSpcChar) + ",")
            ResultFile.write(str(MaxCharNumPerLine) + "," + str(DistDegree) + "," + str(NumOfNumType) + "," + str(NumOfEngType) + "," + str(NumOfSpcType) + "," + str(MaxNumOfSpc) + "," + str(MaxNumOfSpcChar) ) 
            for IndexOfFeature in range(len(x)):
                x[IndexOfFeature] = 0

            ResultFile.write("\n")
            f.close()

ResultFile.close()



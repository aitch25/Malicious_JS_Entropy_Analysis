
import sys
import os
import inspect

# make result
ExtractedResults = "Obfuscation2.csv"

# read file data
InputDir = "./DAT/"

FilePath = []

CountOfFeature = 0

ResultFile = open(ExtractedResults, "w")

ResultFile.write("FileName,")

x = [0] * 127
CharTotal = 0
OutOfAscII = 0
for IndexOfFeature in range(len(x)):
	TargetString = IndexOfFeature 
	ResultFile.write(str(TargetString) + ",")
#ResultFile.write("OutOfASCII, CharTotal, LineTotal, AvgCharPerLine, # of Strings, % of Space, # of Word, % of Word, Readable \n")

for root, directories, files in os.walk(InputDir):
	for filename in files:
		FilePath = os.path.join(root, filename)
		print(FilePath)

		if FilePath.endswith('.js'):
			with open(FilePath, encoding="utf8", errors='ignore') as f:
				for line in f: 
					for ch in line:
						CharTotal = CharTotal + 1 
						try:
							x[ord(ch)] = x[ord(ch)] + 1
						except IndexError:
							OutOfASCII = OutOfASCII + 1
							print("can not index")


			for IndexOfFeature in range(len(x)):
				TargetString = x[IndexOfFeature]
				ResultFile.write(str(TargetString) + ",")

			if x[10]!=0:
				AvgCharPerLine = CharTotal / x[10]
			else:
				AvgCharPerLine = 0  
			NumOfStrings = x[34] / 2
			RatioOfSpace = x[32] / CharTotal
			
			##Ratio of number, English, Special Character
			#for i in range(48,57):
			#	RatioOfNum = RatioOfNum + x[i]
			#for i in range(65,90):
			#	RatioOfEng = RatioOfEng + x[i]
			#for i in range(97,122):
			#	RatioOfEng = RatioOfEng + x[i]
			#for i in range(33,47):
			#	RatioOfSpec = RatioOfSpec + x[i]
			#for i in range(58,64):
			#	RatioOfSpec = RatioOfSpec + x[i]
			#for i in range(91,96):
			#	RatioOfSpec = RatioOfSpec + x[i]
			#for i in range(123,126):
			#	RatioOfSpec = RatioOfSpec + x[i]
		
			#ResultFile.write(str(OutOfASCII) + ", " + str(CharTotal) + ", " + str(x[10]) + ", " + str(AvgCharPerLine) + ", " + str(NumOfStrings) + ", " + str(RatioOfSpace) + ", " )
			#ResultFile.write(RatioOfNum + ", " + RatioOfEng + ", " + RatioOfSpec)
			
			ResultFile.write("\n")

			for IndexOfFeature in range(len(x)):
				x[IndexOfFeature] = 0
					
			OutOfASCII = 0
			CharTotal = 0
			f.close()

ResultFile.close()


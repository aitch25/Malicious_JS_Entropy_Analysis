import pandas as pd
import scipy.stats as sc

# Input a pandas series 
def ent(data):
	p_data = data.value_counts()/len(data) # calculates the probabilities
	#entropy = sc.stats.entropy(p_data)  # input probabilities to get the entropy 
	#print(p_data)
	#entropy = sc.entropy(p_data)  # input probabilities to get the entropy 
	entropy = sc.entropy(1)  # input probabilities to get the entropy 
	return entropy



if __name__=="__main__":
	#print(ent(pd.Series("aaaaasdfasldfkjasdlfjaslfkjsdfl")))
	print(ent(pd.Series("aaaaasdfasldfkjasdlfjaslfkjsdfl")))

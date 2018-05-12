import numpy as np
import tensorflow as tf
import pandas as pd
import csv

num_points = 193
#num_points = 10000
#dimensions = 2
dimensions = 5
#points = np.random.uniform(0, 10000000000, [num_points, dimensions])
#points = np.random.uniform(0, 1000, [num_points, dimensions])

full_data = pd.read_csv("./Obfuscation.csv")
full_data_x = full_data.drop(["FileName"], axis=1).astype(np.float32).values
#print(points)
#print("----------------------------------------------------------------------------------")
print(full_data_x)
#print(len(full_data_x))
print("##################################################################################")


def input_fn():
	return tf.train.limit_epochs(tf.convert_to_tensor(points, dtype=tf.float32), num_epochs=1)

def input_csv():
	return tf.train.limit_epochs(tf.convert_to_tensor(full_data_x, dtype=tf.float32), num_epochs=1)

#print("##############", input_csv())


#num_clusters = 5
num_clusters = 10
kmeans = tf.contrib.factorization.KMeansClustering(num_clusters=num_clusters, use_mini_batch=False)

# train
num_iterations = 10
previous_centers = None
for _ in xrange(num_iterations):
	#kmeans.train(input_fn)
	kmeans.train(input_csv)
	cluster_centers = kmeans.cluster_centers()
	if previous_centers is not None:
		print 'delta:', cluster_centers - previous_centers

	previous_centers = cluster_centers
	#print 'score:', kmeans.score(input_fn)
	print 'score:', kmeans.score(input_csv)

print 'cluster centers:', cluster_centers

# map the input points to their clusters
#cluster_indices = list(kmeans.predict_cluster_index(input_fn))
cluster_indices = list(kmeans.predict_cluster_index(input_csv))

#for i, point in enumerate(points):


FILE_PATH = "../DAT/"

with open('result.csv', 'w') as csvfile:
	fieldnames = ['file_name', 'cluster']
	writer = csv.DictWriter(csvfile, fieldnames=fieldnames)
	
	writer.writeheader()

	for i, point in enumerate(full_data_x):
		#print(i, point)
		cluster_index = cluster_indices[i]
		center = cluster_centers[cluster_index]
		print 'point:', point, 'is in cluster', cluster_index, 'centered at', center
		writer.writerow({'file_name': full_data['FileName'][i], 'cluster': cluster_index})


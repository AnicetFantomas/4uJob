import React, { useState } from "react";
import { View, Text } from "react-native";
import { useRouter } from "expo-router";
import styles from "./popularjobs.style";
import PopularJobCard from "../../common/cards/popular/PopularJobCard";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import { ActivityIndicator } from "react-native-web";
import { COLORS, SIZES } from "../../../constants";
import useFetch from "../../../hook/useFetch";

const Popularjobs = () => {
  const router = useRouter();

  const {data, loading, error } = useFetch('search', {
    query: 'React developer',
    num_pages: 1
  });

  const [selectedJob, setSelectedJob] = useState();

  const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
  };

  //console.log(data);  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular jobs</Text>
        <TouchableOpacity>
          <Text style={styles.headerBtn}>Show all</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {
          loading ? (
            <ActivityIndicator size="large" colors={COLORS.primary} />
          ) : error ?(
            <Text>Something went wrong</Text>
          ) : (
            <FlatList
            data={data}
            renderItem={({ item }) => (
              <PopularJobCard
                item={item}
                selectedJob={selectedJob}
                handleCardPress={handleCardPress}
                key={`popular-job-${item?.job_id}`}
              />
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ columnGap: SIZES.medium }}
            horizontal
            />
          )
        }
      </View>
    </View>
  );
};

export default Popularjobs;

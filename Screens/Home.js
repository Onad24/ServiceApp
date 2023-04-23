import { safe, ScrollView } from 'react-native';
import Card from '../Components/Card';
import { SafeAreaView } from 'react-native-safe-area-context';

const Data = [
  { title: 'Title 1', description: 'Description 1' },
  { title: 'Title 2', description: 'Description 2' },
  { title: 'Title 3', description: 'Description 3' },
  { title: 'Title 4', description: 'Description 4' },
  { title: 'Title 5', description: 'Description 5' },
  { title: 'Title 6', description: 'Description 6' },
  { title: 'Title 7', description: 'Description 7' },
];

export default function Home({navigation}) {

  return (
    <SafeAreaView>
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      {Data.map((item, index) => {
        return <Card item={item} key={index} navigation={navigation}/>;
      })}
    </ScrollView>
    </SafeAreaView>
  );
}

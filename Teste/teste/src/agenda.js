import React from "react";
import { useState } from "react";
import { TouchableOpacity, View } from 'react-native';
import { Agenda } from "react-native-calendars";
import { Card, Avatar, Text } from 'react-native-paper';
import MyTypography from "./typography";



const timeToString = (time) => {
    const date = new Date(time);
    return date.toISOString().split('T')[0];
}

const Schedule = ({ navigation }) => {
    const [items, setItems] = useState({});

    const loadItems = (day) => {
        setTimeout(() => {
            for (let i = -15; i < 85; i++) {
                const time = day.timestamp + i * 24 * 60 * 60 * 1000;
                const strTime = timeToString(time);
                if (!items[strTime]) {
                    items[strTime] = [];
                    const numItems = Math.floor(Math.random() * 3 + 1);
                    for (let j = 0; j < numItems; j++) {
                        items[strTime].push({
                            name: 'Item for ' + strTime + ' #' + j,
                            height: Math.max(50, Math.floor(Math.random() * 150))
                        });
                    }
                }
            }

            const newItems = {};
            Object.keys(items).forEach((key) => {
                newItems[key] = items[key]
            });
            setItems(newItems);
        }, 1000);
    }

    // const renderItem = (item) => {

    //     return (<TouchableOpacity style={{marginRight: 10, marginTop: 15}}>
    //         {/* <Card>
    //             <Card.Content>
    //             <View style={{
    //                     flexDirection: 'row', 
    //                     justifyContent: 'space-between',
    //                     alignItems: 'center'
    //                 }}>
    //                     <MyTypography>{item.name}</MyTypography>

    //                 </View>
    //                 </Card.Content>
    //         </Card> */}
    //     </TouchableOpacity>
    //     )
    // }

    return (
        <View style={{ flex: 1 }}>
            <Agenda

                markedDates={{
                    marked:false
                }}
            
                onDayPress={day => {
                navigation.navigate('teste', { dia: day })
            }}
                items={items}
                loadItemsForMonth={loadItems}
                selected={new Date()}
               renderDay={(item) => console.log(item.prototype.getDate())}/>        </View>
    )
}

export default Schedule;
import { Tabs } from "expo-router";
export default function RootLayout(){
  return(
    <Tabs
     screenOptions={{
         tabBarActiveTintColor:"#4f8cff",
         tabBarInactiveTintColor:"#888",
         tabBarLabelStyle:{
          fontSize:16,
          fontWeight:"800",
         },
         tabBarStyle:{
          height:84,
          paddingBottom:12,
          paddingTop:0,
          
         }
     }}>
    
          <Tabs.Screen
          name="index"
          options={{title:"Chats"}}/>
          <Tabs.Screen
          name="Profile"
          options={{title:"Profile"}}/>
          <Tabs.Screen
          name="Settings"
          options= {{title:"Settings"}}/>
    </Tabs>
    
  )
}
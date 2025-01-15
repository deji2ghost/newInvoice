import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CustomTabProps } from "./tabTypes"


const CustomTab = ({headerOne, headerTwo, bodyOne, bodyTwo}: CustomTabProps) => {
  return (
    <Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">{headerOne}</TabsTrigger>
    <TabsTrigger value="password">{headerTwo}</TabsTrigger>
  </TabsList>
  <TabsContent className="text-black" value="account">{bodyOne}</TabsContent>
  <TabsContent className="text-black" value="password">{bodyTwo}</TabsContent>
</Tabs>
  )
}

export default CustomTab

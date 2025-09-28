import { useState } from "react";
import { Button, Stack, Title, Divider, Container, Modal, Card } from "@mantine/core";
import { v4 as uuidv4, type UUIDTypes } from "uuid";
import AddFoodModal from "../components/Modal";

type FoodItem = {
  id: string;
  name: string;
  price: number | string;
  quantity: number | string;
  category: string;
};


export default function FoodTracker() {
  const [opened, setOpened] = useState(false);
  const [items, setItems] = useState<FoodItem[]>([]);
  const categories = ["Main Course", "Drink", "Dessert"];
  
  const AddItem=(
    name:string,
    price:number | string,
    quantity:number | string,
    category:string
  )=>{
    const newItem: FoodItem = {
      id: uuidv4(),
      name,
      price,
      quantity,
      category,
    };
    setItems((prevItems) => [...prevItems, newItem]);
  }
  
  return (
    <Container style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <Title order={2} mb="md">
        Food Tracker
      </Title>
      <Button onClick={() => setOpened(true)}>Add Food Item</Button>
      {/* Type additional AddFoodModal here. */}
      <AddFoodModal 
        opened={opened} 
        onClose={() => setOpened(false)} 
        onAdd={AddItem}
      />
      <Divider my="md" />
      {/* Type additional total cost here. */}
      

      <Title order={4}>Total cost: {} Baht</Title>
      <Stack my="sm">
        {
        }
      </Stack>

      <Divider my="md" />
      {/* Type additional card here. */}

      <Stack>{/* Type additional food card list here. */}</Stack>
    </Container>
  );
}

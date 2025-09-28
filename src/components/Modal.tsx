import { useState } from "react";
import {
  Modal,
  TextInput,
  NumberInput,
  Select,
  Button,
  Stack,
} from "@mantine/core";

type AddFoodModalProps = {
  opened: boolean;
  onClose: () => void;
  onAdd: (
    name: string,
    price: number | string,
    quantity: number | string,
    category: string
  ) => void;
};

export default function AddFoodModal({
  opened,
  onClose,
  onAdd,
}: AddFoodModalProps) {
  const [name, setName] = useState<string>("");
  const [price, setPrice] = useState<number | string>(0);
  const [quantity, setQuantity] = useState<number | string>(0);
  const [category, setCategory] = useState<string | null>(null);

  const handleSubmit = () => {
    if (!name.trim() || !price || !quantity || !category) {
      return;
    }
    onAdd(name, price, quantity, category);
    onClose();
    setName("");
    setPrice(0);
    setQuantity(0);
    setCategory(null);
  };

    // หากต้องการแปง type string เป็น type number สามารถดูตัวอย่างนี้ได้
    // let val_number: number = Number("500.0");
    // console.log(val_number + 100); // 600.0
    
  return (
    /* Type additional text here. */
    <Modal opened={opened} onClose={onClose} title="Add an item">
      <Stack>
        <TextInput
          label="Name of item"
          withAsterisk
          description="Name of item"
          error={!name.trim() && "Name of item is required"} 
          placeholder="e.g.,Chicken rice"
          value={name}
          onChange={(e) => setName(e.currentTarget.value)}
        />
        <NumberInput
          label="Price per dish"
          withAsterisk
          description="Price per dish"
          error={!price && "Price per dish is required"} 
          placeholder="0"
          min={0}
          value={price}
          onChange={setPrice}
        />
        <NumberInput
          label="Quantity"
          withAsterisk
          description="Quantity "
          error={!quantity && "Quantity is required"} 
          placeholder="0"
          min={0}
          value={quantity}
          onChange={setQuantity}
        />
        <Select
          label="Category"
          withAsterisk
          description="Category "
          error={!category && "Category is required"} 
          placeholder="Select a category"
          data={['Main Course','Drink','Dessert']}
          value={category}
          onChange={setCategory}
        />
        <Button onClick={handleSubmit}>Submit</Button>
      </Stack>
    </Modal>
  )
  
};

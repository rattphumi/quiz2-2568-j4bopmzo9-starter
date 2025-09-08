import { useState } from "react";
import { Button, Stack, Title, Divider, Container, Modal } from "@mantine/core";
// import { v4 as uuidv4, type UUIDTypes } from "uuid";


export default function FoodTracker() {
  const [opened, setOpened] = useState(false);
 

  return (
    <Container style={{ maxWidth: 600, margin: "auto", padding: 20 }}>
      <Title order={2} mb="md">
        Food Tracker
      </Title>
      <Button onClick={() => setOpened(true)}>Add Food Item</Button>
      {/* Type additional AddFoodModal here. */}
      
      <Modal
        opened={opened}
        onClose={() => setOpened(false)}
      />
      <Divider my="md" />
      {/* Type additional total cost here. */}
      <Title order={4}>Total cost: {} Baht</Title>
      <Stack my="sm">{/* Type additional text here. */}</Stack>

      <Divider my="md" />
      {/* Type additional card here. */}

      <Stack>{/* Type additional food card list here. */}</Stack>
    </Container>
  );
}

import { Container, Box } from "@material-ui/core";
import OperationFormEdit from "components/OperationFormEdit";
import { useEffect } from "react";
import { useState } from "react";
import { getCategories } from "services/Categories";

export default function Edit() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((res) => {
      if (res.categories) {
        setCategories(res.categories);
      }
    });
  }, []);
  return (
    <Container maxWidth="sm">
      <Box>
        <OperationFormEdit categories={categories} />
      </Box>
    </Container>
  );
}

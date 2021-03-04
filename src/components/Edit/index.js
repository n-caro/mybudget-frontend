import { Container, Box } from "@material-ui/core";
import OperationFormEdit from "components/OperationFormEdit";
import { useEffect } from "react";
import { useState, useContext } from "react";
import { getCategories } from "services/Categories";
import UserContext from "context/UserContext";


export default function Edit() {
  const { session } = useContext(UserContext);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let token = session.token;
    getCategories({ token }).then((res) => {
      if (res.categories) {
        setCategories(res.categories);
      }
    });
  }, [session]);
  return (
    <Container maxWidth="sm">
      <Box>
        <OperationFormEdit categories={categories} />
      </Box>
    </Container>
  );
}

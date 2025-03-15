/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import { TextField } from "@mui/material";

import CustomButton from "../../common/Button";

const SearchDialogContent = () => {
  const [creteria, setCreteria] = useState<{
    query: string;
  }>({
    query: "",
  });

  const handleSearchChange = (event: any) => {
    setCreteria((creteria) => ({
      ...creteria,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSearch = () => {};

  return (
    <>
      <TextField
        autoFocus
        fullWidth
        placeholder="First name..."
        name="first_name"
        slotProps={{
          input: {
            style: { borderRadius: "12px" },
          },
        }}
        style={{ marginBottom: 16 }}
        value={creteria.query}
        onChange={handleSearchChange}
      />

      <CustomButton
        text="Search"
        onCustomClick={handleSearch}
        icon="search"
        disabled
      />
    </>
  );
};

export default SearchDialogContent;

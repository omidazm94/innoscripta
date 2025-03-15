import React, { useState } from "react";
import { TextField, InputAdornment, DialogContent } from "@mui/material";
import Dialog from "../../common/Dialog";
import SearchDialogContent from "./SearchDialogContent";
import { SearchedItemsContainer } from "./SearchDialogContent.styles";
import { ColorPalette } from "../../../styles/colorPalette";
import NewsCard from "../NewsCard";
import { Article } from "../../../types/models/Article";
import { useGetNewsApiArticlesQuery } from "../../../services/api/homeApi";

const SearchComponent = () => {
  const [open, setOpen] = useState(false);
  const { data, isLoading, error } = useGetNewsApiArticlesQuery({
    query: "bitcoin",
  });

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {/* Search Box */}
      <TextField
        fullWidth
        placeholder="Search..."
        onClick={handleOpen}
        sx={{
          "& fieldset": {
            border: "none",
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 4px;",
          },
          margin: "4px 0",
        }}
        slotProps={{
          input: {
            style: {
              borderRadius: "12px",
              backgroundColor: ColorPalette.WHITE,
            },
            startAdornment: (
              <InputAdornment position="start">
                <span className="icon-search" />
              </InputAdornment>
            ),
          },
        }}
      />

      {/* Dialog */}
      {open && (
        <Dialog
          open={open}
          title="Search in contacts"
          handleClose={handleClose}
          content={
            <DialogContent>
              <SearchDialogContent />
              {error ? (
                <h1 style={{ textAlign: "center" }}>Oops!</h1>
              ) : (
                <SearchedItemsContainer>
                  {data &&
                    data.map((item: Article) => {
                      return <NewsCard key={item.id} article={item} />;
                    })}
                </SearchedItemsContainer>
              )}
            </DialogContent>
          }
        />
      )}
    </>
  );
};

export default SearchComponent;

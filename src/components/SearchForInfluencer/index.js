import React, { useState } from "react";
import { Icons } from "../../assets/Icons";
import { IconButton } from "@mui/material";
import InputWithIcon from "../../commons/SearchInput";
import SearchIcon from "@mui/icons-material/Search";
import "./style.css";

export default function SearchForInfluencer({
  handleToSearchClick,
  clickToSearch,
}) {
  return (
    <>
      <div className="SearchForInfluencerContainer">
        {!clickToSearch ? (
          <InputWithIcon
            placeholder="Search for influencers"
            Icon={() => <Icons.SearchIcon style={{ color: "#2168A6" }} />}
          />
        ) : (
          <IconButton
            className="SearchIconButtonInfluencer"
            onClick={handleToSearchClick}
            color="primary"
            aria-label="add to shopping cart"
          >
            <SearchIcon style={{ color: "#000" }} />
          </IconButton>
        )}
      </div>
    </>
  );
}

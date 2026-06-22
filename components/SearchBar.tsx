import React from "react";
import Link from "next/link";
import { SearchIcon } from "lucide-react";

const SearchBar = () => {
  return (
    <>
      <Link href={"/searchBar"}>
        <SearchIcon />
      </Link>
    </>
  );
};

export default SearchBar;

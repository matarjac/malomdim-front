import React, { useState, useEffect } from "react";
import {
  LibraryContainer,
  ProgressBarProgress,
  LibrarySection,
  LibrarySideMenuContainer,
} from "../../StyledComponents/StyledLibrary";
import LibraryContent from "./libraryContent/LibraryContent";
import LibraryHeader from "./libraryHeader/LibraryHeader";
import LibrarySideMenu from "./librarySideMenu/LibrarySideMenu";
export const Library: React.FC = () => {
  return (
    <LibrarySection>
      <LibraryContainer>
        <LibraryHeader />
        <div style={{ display: "flex", width: "100%", height: "75%" }}>
          <LibrarySideMenu />
          <LibraryContent />
        </div>
      </LibraryContainer>
    </LibrarySection>
  );
};

export default Library;

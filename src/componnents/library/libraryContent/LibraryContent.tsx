import React from "react";
import MaterialsFilter from "./materialsFilter/MaterialsFilter";
import {
    Cube,
    CubeDescription,
    MainCubePart,
} from "../../../StyledComponents/content-cube";
import {
    GeneralSpan,
    LibraryContentContainer,
} from "../../../StyledComponents/StyledLibrary";
import { ContentTypes } from "../../../Types/enum/contentCube";
import ContentCube from "../ContebtCube/contentCube";

export const LibraryContent: React.FC = () => {
    return (
        <LibraryContentContainer>
            <MaterialsFilter />
            <div style={{
                width: '100%', padding: '10px',
                display: 'grid',
                gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr',
                gridTemplateRows: '1fr 1fr',
                textAlign: 'center',
                gridGap: '18px'
            }}>
                <ContentCube
                    link={"https://moveogroup.monday.com/boards/4183474202"}
                    type={ContentTypes.Videos}
                    title={"Learn css"}
                />
                <ContentCube
                    link={"https://moveogroup.monday.com/boards/4183474202"}
                    type={ContentTypes.Videos}
                    title={"Intro to React"}
                />
                <ContentCube
                    link={"https://moveogroup.monday.com/boards/4183474202"}
                    type={ContentTypes.CodeSheets}
                    title={"Presentation"}
                />

                <ContentCube
                    link={"https://moveogroup.monday.com/boards/4183474202"}
                    type={ContentTypes.CodeSheets}
                    title={"Presentation"}
                />

                <ContentCube
                    link={"https://moveogroup.monday.com/boards/4183474202"}
                    type={ContentTypes.CodeSheets}
                    title={"Presentation"}
                />

                <ContentCube
                    link={"https://moveogroup.monday.com/boards/4183474202"}
                    type={ContentTypes.CodeSheets}
                    title={"Presentation"}
                />

            </div>
        </LibraryContentContainer>
    );
};

export default LibraryContent;

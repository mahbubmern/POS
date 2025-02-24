import { useEffect, useState } from "react";
import FileManagerHomeComponent from "../../../components/FileManagerHomeComponent/FileManagerHomeComponent";
import SubBar from "../../../components/FileManagerSubBar/SubBar";
import Title from "../../../components/Title/Title";
import { folderSelector } from "../../../features/fileFolder/fileFolderSlice";
import { useDispatch, useSelector } from "react-redux";
import { getUserFolders } from "../../../features/fileFolder/fileFolderApiSlice";

const FileManager = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [items, setItems] = useState([]); // Example data
  const { folders, folderLoader, folderError, folderMessage } =
    useSelector(folderSelector);

  const dispatch = useDispatch();

  // Get User Folder

  useEffect(() => {
    dispatch(getUserFolders());
    const folderName = folders.map((data) => data.name);
    setItems(folderName)
  }, [items]);

  // Filter items based on search term
  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Title title={"TMS | File Manager"} />
      <div className="page-wrapper">
        <div className="content container-fluid">
          <div className="row">
            <div className="col-md-12">
              <div className="card">
                <div className="card-body">
                  <SubBar setSearchTerm={setSearchTerm} />
                  <FileManagerHomeComponent items={filteredItems} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FileManager;

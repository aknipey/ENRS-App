import { Dialog, Fab } from "@mui/material";
import { useInfoOpenAtom } from "../atoms/openCloseAtoms";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import { InfoDialogue } from "./InfoDialogue";

export function InfoButton() {
  const [openInfo, setOpenInfo] = useInfoOpenAtom();

  const handleClickOpenInfo = () => {
    setOpenInfo(true);
  };

  const handleCloseInfo = (v: string) => {
    setOpenInfo(false);
  };

  return (
    <>
      <Fab onClick={handleClickOpenInfo} size="medium">
        <InfoOutlinedIcon fontSize="large"/>
      </Fab>
      <Dialog open={openInfo} onClose={handleCloseInfo}>
        <InfoDialogue/>
      </Dialog>
    </>
  );
}

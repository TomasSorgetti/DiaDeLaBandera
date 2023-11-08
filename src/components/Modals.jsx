import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import bg from "../assets/bgModal.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  backgroundColor: "white",
  boxShadow: "0",
  padding: "40px",
  width: "600px",
  height: "300px",
  color: "white",
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  gap: "2rem",
  backgroundImage: `url(${bg})`,
    backgroundSize: "cover",
  fontFamily:"none",
};

function Modals({ open }) {
  const handleClose = () => setOpen(false); // Asegúrate de que setOpen esté definido

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="modal">
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ fontWeight: "bold", marginTop: "60px", fontSize: "3rem" }}
          >
            Felicidades!!
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2, fontSize: "1.5rem" }}
          >
            Has completado exitosamente el nivel
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}

export default Modals;


export default function FormDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleClose();
  };

  return (
    <>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>
         editor
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            edit the task
          </DialogContentText>
          <form onSubmit={handleSubmit}>
            <TextField
              value={}
              autoFocus
              required
              margin="dense"
              id="name"
              label="title"
              fullWidth
              variant="standard"
            />
            <TextField
              value={}
              required
              margin="dense"
              id="name"
              label="description"
              fullWidth
              variant="standard"
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={}>
            edit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
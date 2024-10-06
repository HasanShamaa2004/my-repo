import React from "react";
import { Stack, Typography } from "@mui/material";
import ServiceCard from "../components/ServiceCard";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Chip from "@mui/material/Chip";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";

import { Link as RouterLink, useLocation } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const services = [
  {
    title: "Task Management",
    description: "Organize and manage your tasks efficiently.",
    status: "todo",
    progress: 20,
  },
  {
    title: "Bug Tracking",
    description: "Report and track bugs in the system.",
    status: "doing",
    progress: 60,
  },
  {
    title: "Feature Development",
    description: "Develop new features for the application.",
    status: "done",
    progress: 100,
  },
  {
    title: "UI Design",
    description: "Create user-friendly and attractive designs.",
    status: "todo",
    progress: 20,
  },
  {
    title: "API Integration",
    description: "Integrate third-party APIs to enhance functionality.",
    status: "doing",
    progress: 60,
  },
  {
    title: "Testing and QA",
    description: "Perform thorough testing to ensure quality.",
    status: "done",
    progress: 100,
  },
  {
    title: "Documentation",
    description: "Prepare user manuals and documentation for the application.",
    status: "todo",
    progress: 20,
  },
  {
    title: "Deployment",
    description: "Deploy the application to the production server.",
    status: "doing",
    progress: 60,
  },
  {
    title: "Maintenance",
    description: "Regular maintenance and updates for the application.",
    status: "done",
    progress: 100,
  },
  {
    title: "Performance Optimization",
    description: "Improve the application's performance and efficiency.",
    status: "todo",
    progress: 20,
  },
];

// A mapping between path segments and names for breadcrumb display
const breadcrumbNameMap = {
  "/": "Home",
  "/projects": "Projects",
  "/projects/1": "Project Details",
};

function Services() {
  const location = useLocation(); // Get the current location

  const pathnames = location.pathname.split("/").filter((x) => x); // Split the pathname and filter out empty strings

  const organizedServices = {
    todo: services.filter((service) => service.status === "todo"),
    doing: services.filter((service) => service.status === "doing"),
    done: services.filter((service) => service.status === "done"),
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen2 = () => {
    setOpen2(true);
  };

  const handleClose2 = () => {
    setOpen2(false);
  };

  return (
    <Stack
      direction={"row"}
      spacing={2}
      justifyContent={"center"}
      sx={{
        border: "0px solid red",
        position: "relative",
        paddingTop: "70px",
        paddingInline: "32px",
      }}
    >
      <Stack
        sx={{
          position: "absolute",
          left: "0",
          top: "0",
          width: "100%",
          height: "50px",
          borderBottom: "1px solid #1976d2",
          padding: "0 10px",
        }}
        alignItems={"center"}
        justifyContent={"space-between"}
        direction={"row"}
      >
        {/*  */}
        <Breadcrumbs aria-label="breadcrumb">
          <Link underline="hover" color="inherit" component={RouterLink} to="/">
            Home
          </Link>

          {pathnames.map((value, index) => {
            const to = `/${pathnames.slice(0, index + 1).join("/")}/`;

            return index === pathnames.length - 1 ? (
              <Typography color="text.primary" key={to}>
                {breadcrumbNameMap[to] || value}{" "}
                {/* عرض الاسم أو الجزء مباشرة */}
              </Typography>
            ) : (
              <Link
                underline="hover"
                color="inherit"
                component={RouterLink}
                to={to}
                key={to}
              >
                {breadcrumbNameMap[to] || value}{" "}
                {/* عرض الاسم أو الجزء مباشرة */}
              </Link>
            );
          })}
        </Breadcrumbs>
        {/*  */}
        <Stack direction={"row"} gap={"10px"}>
          <Button
            variant="contained"
            onClick={handleClickOpen}
            sx={{ minWidth: "150px" }}
          >
            Primary Links
          </Button>
          <Button
            variant="contained"
            onClick={handleClickOpen2}
            sx={{ minWidth: "150px" }}
          >
            Tags
          </Button>
        </Stack>

        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle>{"All links related for this project"}</DialogTitle>
          <DialogContent>
            <Stack
              gap={"5px"}
              direction={"column"}
              flexWrap={"wrap"}
              sx={{ minWidth: "300px" }}
            >
              {[
                "www.link1.com",
                "www.postman.com",
                "www.ui-ux.com",
                "www.bug.com",
                "www.falafel.com",
                "www.botato.com",
                "www.postman.com",
              ].map((item, index) => (
                <Chip
                  color="info"
                  key={index}
                  component="a"
                  href=""
                  clickable
                  label={`${item}`}
                />
              ))}
            </Stack>
            {/* <DialogContentText
              id="alert-dialog-slide-description"
              sx={{ minWidth: "300px" }}
            >
            </DialogContentText> */}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Close</Button>
          </DialogActions>
        </Dialog>
        <Dialog
          open={open2}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose2}
          aria-describedby="alert-dialog-slide-description2"
        >
          <DialogTitle>{"Tags"}</DialogTitle>
          <DialogContent>
            {/* <DialogContentText
              id="alert-dialog-slide-description2"
              sx={{ width: "300px" }}
            >
            </DialogContentText> */}
            <Stack
              gap={"5px"}
              direction={"row"}
              flexWrap={"wrap"}
              sx={{ width: "300px" }}
            >
              {[
                "botato",
                "postman",
                "ui-ux",
                "bug",
                "falafel",
                "botato",
                "postman",
                "ui-ux",
                "bug",
                "falafel",
                "botato",
                "postman",
                "ui-ux",
                "bug",
                "falafel",
              ].map((item, index) => (
                <Chip
                  color="success"
                  key={index}
                  component="a"
                  href=""
                  clickable
                  label={`#${item}`}
                />
              ))}
            </Stack>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose2}>Close</Button>
          </DialogActions>
        </Dialog>
      </Stack>
      {Object.keys(organizedServices).map((status) => (
        <Stack
          key={status}
          direction={"column"}
          sx={{ padding: "10px", border: "0px dotted grey" }}
          gap={"20px"}
        >
          <Typography
            sx={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "25px",
              color: "#757575",
              textTransform: "capitalize",
            }}
          >
            {status}
          </Typography>
          {organizedServices[status].map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              progress={service.progress}
            />
          ))}
        </Stack>
      ))}
    </Stack>
  );
}

export default Services;

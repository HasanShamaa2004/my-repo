import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Button,
  CardActions,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InfoIcon from "@mui/icons-material/Info";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import { useNavigate } from "react-router-dom";

const ProjectCard = ({ project, onDelete }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate();

  // فتح وإغلاق الـ Menu
  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // تحديد الأيقونة بناءً على حالة المشروع
  const statusIcon =
    project.status === "Completed" ? (
      <CheckCircleIcon
        style={{ color: "green", fontSize: 24, paddingRight: "5px" }}
      />
    ) : (
      <HourglassEmptyIcon
        style={{ color: "orange", fontSize: 24, paddingRight: "5px" }}
      />
    );

  const handleNavigateToDetails = () => {
    navigate(`/main-page/projects/${project.id}`); // التنقل باستخدام id المشروع
  };

  return (
    <Card
      className="hover:shadow-xl transition-shadow duration-300 rounded-xl"
      sx={{
        maxWidth: "500px",
        margin: "auto",
        border: "1px solid #e0e0e0",
        width: "100%",
      }}
    >
      <CardMedia
        component="img"
        alt={project.title}
        image={project.img}
        className="object-cover p-2"
        sx={{ borderRadius: "12px", height: "150px" }}
      />
      <CardContent style={{ padding: "16px" }}>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          style={{ fontWeight: "bold" }}
        >
          {project.title}
        </Typography>
        <Typography variant="body1" color="text.secondary">
          {project.description}
        </Typography>
        <div className="flex items-center mt-2">
          {statusIcon}
          <Typography
            variant="body2"
            className="ml-0 text-sm font-semibold"
            style={{
              color: project.status === "Completed" ? "green" : "orange",
            }}
          >
            {project.status}
          </Typography>
        </div>
      </CardContent>
      <CardActions style={{ padding: "8px 12px" }}>
        <Button
          size="small"
          color="primary"
          startIcon={<InfoIcon style={{ fontSize: 20 }} />}
          onClick={() => handleNavigateToDetails()}
        >
          More Details
        </Button>

        {/* أيقونة الثلاث نقاط لفتح الـ Menu */}
        <IconButton
          size="small"
          aria-label="more options"
          onClick={(e) => {
            e.stopPropagation(); // منع التنقل عند فتح القائمة
            handleMenuOpen(e);
          }}
          className="ml-auto"
        >
          <MoreVertIcon style={{ fontSize: 20 }} />
        </IconButton>

        {/* قائمة الـ Menu */}
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleMenuClose}
        >
          {/* خيار "Delete" مع أيقونة الحذف */}
          <MenuItem
            onClick={(e) => {
              e.stopPropagation(); // منع التنقل عند الحذف
              onDelete(project.id);
              handleMenuClose();
            }}
            style={{ color: "red" }}
          >
            <DeleteIcon style={{ marginRight: 8, fontSize: 20 }} />
            Delete
          </MenuItem>
        </Menu>
      </CardActions>
    </Card>
  );
};

export default ProjectCard;

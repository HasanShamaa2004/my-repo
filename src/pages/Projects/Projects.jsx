import { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import { CloudUpload as CloudUploadIcon } from "@mui/icons-material";
import ProjectCard from "../../components/ProjectCard/ProjectCard";

const Projects = () => {
  const [projects, setProjects] = useState([
    {
      id: 1,
      img: "/photo.png",
      title: "Project 1",
      description: "This is the description for project 1.",
      status: "Completed",
    },
    {
      id: 2,
      img: "/photo.png",
      title: "Project 2",
      description: "This is the description for project 2.",
      status: "In Progress",
    },
    {
      id: 3,
      img: "/photo.png",
      title: "Project 3",
      description: "This is the description for project 3.",
      status: "In Progress",
    },
    {
      id: 4,
      img: "/photo.png",
      title: "Project 4",
      description: "This is the description for project 4.",
      status: "In Progress",
    },
    {
      id: 5,
      img: "/photo.png",
      title: "Project 5",
      description: "This is the description for project 5.",
      status: "In Progress",
    },
  ]);

  const [open, setOpen] = useState(false);
  const [newProject, setNewProject] = useState({
    img: "",
    title: "",
    description: "",
    status: "",
  });
  const [imagePreview, setImagePreview] = useState(null);

  // فتح وإغلاق Dialog
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setImagePreview(null); // إعادة تعيين معاينة الصورة
    setNewProject({ img: "", title: "", description: "", status: "" }); // إعادة تعيين الحقول
  };

  // رفع صورة من الجهاز
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setNewProject({ ...newProject, img: URL.createObjectURL(file) });
    setImagePreview(URL.createObjectURL(file));
  };

  // إضافة مشروع جديد
  const handleAddProject = () => {
    setProjects([...projects, { ...newProject, id: projects.length + 1 }]);
    handleClose();
  };

  // التحقق من ملء جميع الحقول
  const isFormValid =
    newProject.img &&
    newProject.title &&
    newProject.description &&
    newProject.status;

  // حذف المشروع
  const handleDeleteProject = (id) => {
    setProjects(projects.filter((project) => project.id !== id));
  };

  return (
    <div className="p-8">
      {/* زر لفتح Dialog لإضافة مشروع جديد */}
      <Button
        variant="contained"
        onClick={handleClickOpen}
        className="text-primary"
      >
        Add New Project
      </Button>

      {/* Dialog لإضافة مشروع جديد */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add a New Project</DialogTitle>
        <DialogContent>
          <Button
            variant="contained"
            component="label"
            startIcon={<CloudUploadIcon />}
            style={{ marginBottom: "10px", width: "100%" }}
            className="text-primary"
          >
            Upload Image
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={handleImageUpload}
            />
          </Button>
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              style={{
                width: "100%",
                marginBottom: "10px",
                borderRadius: "8px",
              }}
            />
          )}
          <TextField
            autoFocus
            margin="dense"
            label="Title"
            type="text"
            fullWidth
            value={newProject.title}
            onChange={(e) =>
              setNewProject({ ...newProject, title: e.target.value })
            }
          />
          <TextField
            margin="dense"
            label="Description"
            type="text"
            fullWidth
            value={newProject.description}
            onChange={(e) =>
              setNewProject({ ...newProject, description: e.target.value })
            }
          />
          <FormControl fullWidth margin="dense">
            <InputLabel id="status-label">Status</InputLabel>
            <Select
              labelId="status-label"
              value={newProject.status}
              onChange={(e) =>
                setNewProject({ ...newProject, status: e.target.value })
              }
              required
            >
              <MenuItem value="In Progress">In Progress</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
              <MenuItem value="To Do">To Do</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button
            onClick={handleAddProject}
            color="primary"
            disabled={!isFormValid}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>

      {/* عرض البطاقات */}
      <div className="mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onDelete={handleDeleteProject}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;

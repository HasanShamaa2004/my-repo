import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  IconButton,
  Box,
  LinearProgress,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

function ServiceCard({ title, description, progress }) {
  const handleEdit = () => {
    console.log("Edit clicked");
  };

  const handleDelete = () => {
    console.log("Delete clicked");
  };

  return (
    <Card sx={{ maxWidth: 345, boxShadow: 3, borderRadius: 2 }}>
      <CardHeader
        action={
          <Box>
            <IconButton onClick={handleEdit}>
              <EditIcon />
            </IconButton>
            <IconButton onClick={handleDelete}>
              <DeleteIcon />
            </IconButton>
          </Box>
        }
        title={title}
        titleTypographyProps={{ variant: "h6", component: "div" }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      {/* Progress Bar */}
      <Box sx={{ padding: 2 }}>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {progress}%
        </Typography>
        <LinearProgress variant="determinate" value={progress} />
      </Box>
    </Card>
  );
}

export default ServiceCard;

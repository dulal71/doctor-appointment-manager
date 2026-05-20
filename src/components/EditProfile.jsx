"use client";
import {Envelope} from "@gravity-ui/icons";
import {Button, Input, Label, Modal, Surface, TextField} from "@heroui/react";
import { Edit } from "lucide-react";


const EditProfile = ({user}) => {
    
    console.log(user);
    const handleUpdate =async (e)=>{
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const updateData = Object.fromEntries(formData.entries())
   console.log(updateData);
    }
    return (
         <Modal>
              <Button><Edit></Edit>Edit Profile</Button>
      <Modal.Backdrop>
        <Modal.Container placement="auto">
          <Modal.Dialog className="sm:max-w-md">
            <Modal.CloseTrigger />
            <Modal.Header>
              <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                <Edit className="size-5" />
              </Modal.Icon>
              <Modal.Heading>Update Your Profile</Modal.Heading>
              <p className="mt-1.5 text-sm leading-5 text-muted">
                Update your personal information and keep your profile details up to date. 
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default">
               <form onSubmit={handleUpdate} className="flex flex-col gap-4">
                  <TextField className="w-full" name="name" type="text" variant="secondary">
                    <Label>Name</Label>
                    <Input defaultValue={user?.name}  />
                  </TextField>
                  <TextField className="w-full" name="imageUrl" type="url" variant="secondary">
                    <Label>Image URL</Label>
                    <Input defaultValue={user?.image} />
                  </TextField>
<Modal.Footer>
              <Button slot="close" variant="secondary">
                Cancel
              </Button>
              <Button type="submit" slot="close">Update</Button>
            </Modal.Footer>
            </form> 
              </Surface>
            </Modal.Body>
           
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
    );
};

export default EditProfile;
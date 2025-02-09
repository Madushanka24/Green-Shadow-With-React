import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@radix-ui/react-select";
import {useState} from "react";
import {Dialog, DialogContent, DialogDescription, DialogTitle, DialogTrigger} from "@radix-ui/react-dialog";
import {Button} from "react-day-picker";
import {DialogHeader} from "./dialog.tsx";
import {Card, CardContent, CardFooter} from "./card.tsx";
import {Label} from "@radix-ui/react-label";
import {Input} from "./input.tsx";


interface FormField {
  id: string;
  label: string;
  type: string;
  placeholder?: string;
  options?: { value: string; label: string }[];
}

interface GenericFormCardProps {
  title: string;
  description: string;
  fields: FormField[];
  onSave: (formData: Record<string, string>) => void;
  onUpdate: (formData: Record<string, string>) => void;

}

export function GenericFormCard({ title, description, fields, onSave, onUpdate }: GenericFormCardProps) {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleInputChange = (id: string, value: string) => {
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSave = () => {
    onSave(formData);
    setFormData({});
    setOpen(false);
  };

  const handleUpdate = () => {
    onUpdate(formData);
    setFormData({});
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)}>Add {title}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Add New {title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        <Card>
          <CardContent>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col space-y-4">
                {fields.map((field) => (
                    <div key={field.id} className="flex flex-col space-y-1.5">
                      <Label htmlFor={field.id}>{field.label}</Label>
                      {field.type === 'select' ? (
                          <Select onValueChange={(value) => handleInputChange(field.id, value)}>
                            <SelectTrigger id={field.id}>
                              <SelectValue placeholder={field.placeholder}/>
                            </SelectTrigger>
                            <SelectContent>
                              {field.options?.map((option) => (
                                  <SelectItem key={option.value} value={option.value}>
                                    {option.label}
                                  </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                      ) : (
                          <Input
                              id={field.id}
                              type={field.type}
                              placeholder={field.placeholder}
                              value={formData[field.id] || ''}
                              onChange={(e) => handleInputChange(field.id, e.target.value)}
                          />
                      )}
                    </div>
                ))}
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
            <Button onClick={handleUpdate}>Update</Button>
            <Button onClick={handleSave}>Save</Button>
          </CardFooter>
        </Card>
      </DialogContent>
    </Dialog>
  )
}


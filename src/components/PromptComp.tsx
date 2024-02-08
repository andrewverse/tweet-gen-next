"use client";
import { useState, useEffect } from "react";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";

const formSchema = z.object({
  bio: z
    .string()
    .min(10, "Bio must be at least 10 characters.")
    .max(160, "Bio must not be longer than 160 characters."),
});

export default function TextareaForm() {
  const [formData, setFormData] = useState({ bio: "" });
  const [formErrors, setFormErrors] = useState({ bio: "" });

  // useEffect(() => {
  //   const errors = formSchema.safeParse(formData);
  //   if (!errors.success) {
  //     setFormErrors(errors.error.formErrors.fieldErrors);
  //   } else {
  //     setFormErrors({ bio: "" }); // Clear errors if validation is successful
  //   }
  // }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = formSchema.safeParse(formData);
    if (result.success) {
      toast({
        title: "You submitted the following values:",
        description: (
          <pre className='mt-2 w-[340px] rounded-md bg-slate-950 p-4'>
            <code className='text-white'>
              {JSON.stringify(formData, null, 2)}
            </code>
          </pre>
        ),
      });
    } else {
      console.error("Validation failed");
    }
  };

  return (
    <form onSubmit={handleSubmit} className='w-full space-y-6'>
      <Textarea
        name='bio'
        placeholder='Tell us a little bit about yourself'
        className='resize-none'
        value={formData.bio}
        onChange={handleInputChange}
      />
      {formErrors.bio && <FormMessage>{formErrors.bio[0]}</FormMessage>}

      <Button type='submit'>Submit</Button>
    </form>
  );
}

"use client";

import { User } from "@clerk/nextjs/server";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import supabase from "@/supabase";
import { Database } from "@/types/database.types";
import { complaintSchema, ComplaintDto } from "@/schemas/complaint";

export function ComplaintForm({ userData }: { userData: User }) {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<ComplaintDto>({
    resolver: zodResolver(complaintSchema),
    defaultValues: {
      email: userData?.emailAddresses[0]?.emailAddress || "",
      complaint: "",
    },
  });

  async function onSubmit(values: ComplaintDto) {
    setIsLoading(true);

    try {
      const insertData: Database["public"]["Tables"]["complaint"]["Insert"] = {
        email: values.email,
        complaint: values.complaint,
        created_at: new Date().toISOString(),
        // clerkId: userData.id,
      };

      const { error } = await supabase.from("complaint").insert(insertData);

      if (error) {
        throw error;
      }

      toast.success("Complaint submitted successfully");
      form.reset();
    } catch (error) {
      toast.error("Failed to submit complaint");
      console.error("Error submitting complaint:", error);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="flex flex-col gap-4">
          <label>Email:</label>
          <input {...form.register("email")}  className="input" />
          
          <label>Complaint:</label>
          <textarea {...form.register("complaint")} className="textarea" />
        </div>

        <div className="flex justify-end">
          <Button type="submit" disabled={isLoading} className="w-full md:w-auto">
            {isLoading && <Loader2 className="mr-2 animate-spin" />}
            {isLoading ? "Submitting..." : "Submit Complaint"}
          </Button>
        </div>
      </form>
    </Form>
  );
}

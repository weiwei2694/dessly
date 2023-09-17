"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useForm } from "react-hook-form";
import { emailForm } from "@/validations/email.validations";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Image from "next/image"

const Email = () => {
  const form = useForm<z.infer<typeof emailForm>>({
    resolver: zodResolver(emailForm),
    defaultValues: {
      email: "",
    },
  })

  function onSubmit(values: z.infer<typeof emailForm>) {
    form.reset();
  }

  const isLoading = form.formState.isSubmitting;

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex items-start gap-x-4">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input className="no-focus" placeholder="Type your mail" disabled={isLoading} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button variant="primary" disabled={isLoading} className="w-fit" type="submit">
          <div className="relative w-[20px] h-[20px]">
            <Image src="/send.png" alt="Send Icon" fill />
          </div>
        </Button>
      </form>
    </Form>
  )
}

export default Email
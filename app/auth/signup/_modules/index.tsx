"use client";
import { Button } from "@/components/ui/button";
import { Code2Icon } from "lucide-react";
import Link from "next/link";
import { FC, ReactElement } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { LoadingOutlined } from "@ant-design/icons";
import { Input } from "@/components/ui/input";
import { register } from "@/lib/actions";
import { toast } from "sonner";

export const RegisterSchema = z.object({
  name: z.string({ required_error: "name is required!" }),
  email: z.string().email({
    message: "email is required!",
  }),
  password: z.string({ required_error: "Password is required!" }).min(6, {
    message: "password must be at least 6 characters!",
  }),
  confirmPassword: z
    .string({ required_error: "Password is required!" })
    .min(6, {
      message: "password must be at least 6 characters!",
    }),
});

export type TRegisterSchema = z.infer<typeof RegisterSchema>;

export const SignupModule: FC = (): ReactElement => {
  const form = useForm<TRegisterSchema>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (value: TRegisterSchema) => {
    if (value.password !== value.confirmPassword) {
      return form.setError("confirmPassword", {
        type: "manual",
        message: "Password do not match!",
      });
    }
    try {
      await register(value);
      toast("User has been created", {
        duration: 5000,
        description: `User ${value.name} has been created successfully with email ${value.email}.`,
      });
      form.reset();
    } catch (error) {
      toast.error("Error occured when creating account", {
        description: `${error}`,
      });
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Card className="pt-10 flex flex-col w-full max-w-[55dvh] border-none bg-transparent">
        <CardHeader className="flex items-center gap-5">
          <Link href="/">
            <h1 className="text-4xl font-mono flex gap-2 items-center">
              <Code2Icon className="size-10 shrink-0" />
              Zesco
            </h1>
          </Link>
          <h1 className="font-semibold text-2xl">Are you ready?</h1>
        </CardHeader>
        <CardContent className="px-0 py-5 space-y-1">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-5 px-2"
            >
              <div className="pt-5 space-y-1">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="capitalize text-xs">name</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="text"
                          disabled={form.formState.isSubmitting}
                          placeholder="johndoe alexample"
                        />
                      </FormControl>
                      <FormMessage className="capitalize text-xs dark:text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="capitalize text-xs">
                        Email
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="email"
                          disabled={form.formState.isSubmitting}
                          placeholder="john.doe@example.com"
                        />
                      </FormControl>
                      <FormMessage className="capitalize text-xs dark:text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="capitalize text-xs">
                        password
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="password"
                          disabled={form.formState.isSubmitting}
                          placeholder="********"
                        />
                      </FormControl>
                      <FormMessage className="capitalize text-xs dark:text-red-500" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="confirmPassword"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="capitalize text-xs">
                        confirm password
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          type="password"
                          disabled={form.formState.isSubmitting}
                          placeholder="********"
                        />
                      </FormControl>
                      <FormMessage className="capitalize text-xs dark:text-red-500" />
                    </FormItem>
                  )}
                />
              </div>
              <Button
                type="submit"
                size="sm"
                className="w-full text-sm"
                disabled={form.formState.isSubmitting}
              >
                Sign up{" "}
                {form.formState.isSubmitting ? (
                  <LoadingOutlined className="ml-3 animate-spin" />
                ) : (
                  ""
                )}
              </Button>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex justify-between w-full px-0">
          <p className="text-sm text-center">Already Have an Account?</p>
          <Button variant="link" asChild>
            <Link href="/auth/login">Login here!</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

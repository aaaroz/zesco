"use client";
import { Button } from "@/components/ui/button";
import { Code2Icon } from "lucide-react";
import Link from "next/link";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { FC, ReactElement, useCallback, useEffect, useState } from "react";
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
import { authenticate } from "@/lib/actions";
import { toast } from "sonner";

export const LoginSchema = z.object({
  email: z.string().email({
    message: "email is required!",
  }),
  password: z.string({ required_error: "Password is required!" }).min(6, {
    message: "password must be at least 6 characters!",
  }),
});

export type TLoginSchema = z.infer<typeof LoginSchema>;

export const LoginModule: FC = (): ReactElement => {
  const router = useRouter();
  const form = useForm<TLoginSchema>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (value: TLoginSchema) => {
    try {
      await authenticate(value);
      toast("User login successfuly!", {
        description: "You are ready now!",
        action: {
          label: "Go",
          onClick: () => router.push("/"),
        },
      });
    } catch (error) {
      console.error(error);
      toast("Login Invalid", { description: `${error}` });
    }
  };

  return (
    <div className="flex flex-col items-center">
      <Card className="pt-20 flex flex-col w-full max-w-[55dvh] border-none bg-transparent">
        <CardHeader className="flex items-center gap-5">
          <Link href="/">
            <h1 className="text-4xl font-mono flex gap-2 items-center">
              <Code2Icon className="size-10 shrink-0" />
              Zesco
            </h1>
          </Link>
          <h1 className="font-semibold text-2xl">Welcome Back!</h1>
        </CardHeader>
        <CardContent className="px-0 py-7 space-y-1">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-5 px-2"
            >
              <div className="pt-5 space-y-1">
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
                Login{" "}
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
          <p className="text-sm text-center">Dont Have an Account?</p>
          <Button variant="link" asChild>
            <Link href="/auth/signup">Sign up here!</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

import supabase from "@/lib/supabase";
import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
const NewUser = async () => {
  const user = await currentUser();
  const { data, error, count } = await supabase
    .from("users")
    .select("*", { count: "exact", head: true })
    .eq("clerk_id", user?.id);

  const userExists = count && count > 0;
  console.log("user exists: ", userExists);
  if (!userExists) {
    console.log("Creating user");
    const { error } = await supabase.from("users").insert({
      clerk_id: user?.id,
      email: user?.emailAddresses[0].emailAddress,
      first_name: user?.firstName,
      last_name: user?.lastName
    });
  }
  redirect('/dashboard')
};

export default NewUser;

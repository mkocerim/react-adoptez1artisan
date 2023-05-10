import { defineAbility } from "@casl/ability";

const ability = (user) =>
  defineAbility((can) => {
    console.log(">>ABILITY PARAM USER", user);

    if (user) {
      if (user.role.key === "admin") {
        can("manage", "all");
      } else {
        //TODO user.permission bilgisine göre can ifadelerini olustur

        user.permissions.map((item) => {
          console.log(">>PERMISSION MAP ITEM", item);

          const permissionKey = item.permission_key;
          if (item.create === 1) {
            can("create", permissionKey);
            console.log(">>PERMITTED create" + permissionKey);
          }
          if (item.read === 1) {
            can("read", permissionKey);
            console.log(">>PERMITTED read" + permissionKey);
          }
          if (item.update === 1) {
            can("update", permissionKey);
            console.log(">>PERMITTED update" + permissionKey);
          }
          if (item.delete === 1) {
            can("delete", permissionKey);
            console.log(">>PERMITTED delete" + permissionKey);
          }
        });

        can("read", "user_management");
        can("read", "permission_management");
      }
    }
  });
export default ability;

import { defineAbility } from "@casl/ability";

const ability = (user) =>
  defineAbility((can) => {
    console.log(">>ABILITY PARAM USER", user);

    if (user) {
      if (user.role.key === "admin") {
        can("manage", "all");
      } else {
        //TODO user.permission bilgisine göre can ifadelerini olustur

        user.permissions.map((item, index, arr) => {
          console.log(">>PERMISSION MAP ITEM", item);

          

          const permissionKey = item.permission_key;
          if (item.create === 1) {
            can("create", permissionKey);
            console.log(">>YETKI VERILDI create" + permissionKey);

          }
          if (item.read === 1) {
            can("read", permissionKey);
            console.log(">>YETKI VERILDI read" + permissionKey);

          }
          if (item.update === 1) {
            can("update", permissionKey);
            console.log(">>YETKI VERILDI update" + permissionKey);

          }
          if (item.delete === 1) {
            can("delete", permissionKey);
            console.log(">>YETKI VERILDI delete" + permissionKey);

          }
        });

        can("read", "user_management");
        can("read", "permission_management");
      }
    }
  });
export default ability;

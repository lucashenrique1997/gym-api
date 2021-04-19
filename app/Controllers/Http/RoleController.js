'use strict'
const Role = use("Role");

class RoleController {
  async index() {
    return Role.all();
  }

  async show({params}) {
    const role = Role.findOrFail(params.id);
    await role.load('permissions');
    return role;
  }

  async store({params, request}) {
    const {permissions, ...data} = request.only(["name","slug","description","permissions"]);
    const role = await Role.create(data);

    if(permissions) {
      await role.permissions().attach(permissions);
    }

    await role.load('permissions');
    return role;
  }

  async update({params, request}) {
    const role = Role.findOrFail(params.id);
    const {permissions, ...data} = request.only(["name","slug","description","permissions"]);
    role.merge(data);
    await role.save();

    if(permissions) {
      await role.permissions().attach(permissions);
    }

    return role;
  }

  async destroy({params}) {
    const role = Role.findOrFail(params.id);
    return role.delete();
  }
}

module.exports = RoleController

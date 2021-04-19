'use strict'
const Permission = use("Permission");

class PermissionController {
  async index() {
    return Permission.all();
  }

  async show({params}) {
    return Permission.findOrFail(params.id);
  }

  async store({params, request}) {
    const data = request.only(["name","slug","description"]);
    return Permission.create(data);
  }

  async update({params, request}) {
    const permission = Permission.findOrFail(params.id);
    const data = request.only(["name","slug","description"]);
    permission.merge(data);
    await permission.save();
    return permission;
  }

  async destroy({params}) {
    const permission = await Permission.findOrFail(params.id);
    return permission.delete();
  }
}

module.exports = PermissionController

import { TableGroupData } from "../Table";

export const data: TableGroupData[] = [
  {
    data: {
      Entity: "IFCWALL",
      Name: "Basic Wall:Generic - 300mm:352533",
      PredefinedType: "NOTDEFINED",
    },
    id: "3s8L76FjzBJud$JyXWYyT_",
    children: [
      {
        data: {
          Entity: "IFCBUILDINGSTOREY",
          Name: "Level 1",
          LongName: "Level 1",
        },
        id: "3Zu5Bv0LOHrPC10026FoQQ",
        children: [
          {
            data: {
              Entity: "IFCPROPERTYSET",
              Name: "Pset_BuildingStoreyCommon",
            },
            id: "2QFFSloDKLdASEirlNrsWG",
            children: [
              {
                data: {
                  Entity: "IFCPROPERTYSINGLEVALUE",
                  Name: "Reference",
                  NominalValue: "8mm Head",
                },
              },
              {
                data: {
                  Entity: "IFCPROPERTYSINGLEVALUE",
                  Name: "AboveGround",
                  NominalValue: 2,
                },
              },
            ],
          },
        ],
      },
      {
        data: {
          Entity: "IFCMATERIAL",
          Name: "Default Wall",
        },
      },
      {
        data: {
          Entity: "IFCCLASSIFICATIONREFERENCE",
          Identification: "12.10",
          Name: "Elementos",
        },
        children: [
          {
            data: {
              Entity: "IFCCLASSIFICATION",
              Name: "CG",
            },
          },
        ],
      },
      {
        data: {
          Entity: "IFCGROUP",
          Name: "Model Group:My Grouping:352914",
        },
        id: "3s8L76FjzBJud$JyXWYyJv",
      },
      {
        data: {
          Entity: "IFCELEMENTQUANTITY",
          Name: "Qto_WallBaseQuantities",
        },
        id: "3VEej2zTLe$7LHOFl$3X36",
        children: [
          {
            data: {
              Entity: "IFCQUANTITYLENGTH",
              Name: "Height",
              LengthValue: 4000,
            },
          },
          {
            data: {
              Entity: "IFCQUANTITYLENGTH",
              Name: "Length",
              LengthValue: 3300,
            },
          },
          {
            data: {
              Entity: "IFCQUANTITYLENGTH",
              Name: "Width",
              LengthValue: 300,
            },
          },
          {
            data: {
              Entity: "IFCQUANTITYAREA",
              Name: "GrossFootprintArea",
              AreaValue: 0.99,
            },
          },
          {
            data: {
              Entity: "IFCQUANTITYVOLUME",
              Name: "GrossVolume",
              VolumeValue: 3.96,
            },
          },
          {
            data: {
              Entity: "IFCQUANTITYAREA",
              Name: "GrossSideArea",
              AreaValue: 13.2,
            },
          },
          {
            data: {
              Entity: "IFCQUANTITYAREA",
              Name: "NetSideArea",
              AreaValue: 13.2,
            },
          },
          {
            data: {
              Entity: "IFCQUANTITYVOLUME",
              Name: "NetVolume",
              VolumeValue: 3.96,
            },
          },
        ],
      },
      {
        data: {
          Entity: "IFCPROPERTYSET",
          Name: "Pset_EnvironmentalImpactIndicators",
        },
        id: "2Ua_D_IdkUkUZFWcJDDRJY",
        children: [
          {
            data: {
              Entity: "IFCPROPERTYSINGLEVALUE",
              Name: "Reference",
              NominalValue: "Generic - 300mm",
            },
          },
        ],
      },
      {
        data: {
          Entity: "IFCPROPERTYSET",
          Name: "Pset_ReinforcementBarPitchOfWall",
        },
        id: "1I62bJx_6zP8RNS0KxwMmW",
        children: [
          {
            data: {
              Entity: "IFCPROPERTYSINGLEVALUE",
              Name: "Reference",
              NominalValue: "Generic - 300mm",
            },
          },
        ],
      },
      {
        data: {
          Entity: "IFCPROPERTYSET",
          Name: "Pset_WallCommon",
        },
        id: "2OT2pO6MJ3ruKRgQGxNepm",
        children: [
          {
            data: {
              Entity: "IFCPROPERTYSINGLEVALUE",
              Name: "Reference",
              NominalValue: "Generic - 300mm",
            },
          },
          {
            data: {
              Entity: "IFCPROPERTYSINGLEVALUE",
              Name: "IsExternal",
              NominalValue: true,
            },
          },
          {
            data: {
              Entity: "IFCPROPERTYSINGLEVALUE",
              Name: "LoadBearing",
              NominalValue: false,
            },
          },
          {
            data: {
              Entity: "IFCPROPERTYSINGLEVALUE",
              Name: "ExtendToStructure",
              NominalValue: false,
            },
          },
        ],
      },
      {
        data: {
          Entity: "IFCWALLTYPE",
          Name: "Basic Wall:Generic - 300mm",
          PredefinedType: "STANDARD",
        },
        id: "2Btlw_9L8HrPCs0026Fpy_",
        children: [
          {
            data: {
              Entity: "IFCPROPERTYSET",
              Name: "Pset_WallCommon",
            },
            id: "1vbAf7pehRvy1FStf7UVon",
            children: [
              {
                data: {
                  Entity: "IFCPROPERTYSINGLEVALUE",
                  Name: "IsExternal",
                  NominalValue: true,
                },
              },
            ],
          },
        ],
      },
    ],
  },
];

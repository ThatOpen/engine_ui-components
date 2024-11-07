export interface TopicDataStyles {
  [name: string]: { icon?: string; style?: Record<string, string> };
}

export interface TopicUserStyles {
  [email: string]: { name: string; picture?: string };
}

export interface TopicStyles {
  priorities?: TopicDataStyles;
  statuses?: TopicDataStyles;
  types?: TopicDataStyles;
  users?: TopicUserStyles;
}

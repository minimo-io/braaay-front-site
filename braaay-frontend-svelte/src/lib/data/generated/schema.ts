// @ts-nocheck
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type Scalars = {
    String: string,
    Int: number,
    Boolean: boolean,
    ID: string,
    Float: number,
}


/** The root entry point into the Graph */
export interface RootQuery {
    /** Entry point to get all settings for the site */
    allSettings: (Settings | null)
    /** Connection between the RootQuery type and the category type */
    categories: (RootQueryToCategoryConnection | null)
    /** A 0bject */
    category: (Category | null)
    /** Returns a Comment */
    comment: (Comment | null)
    /** Connection between the RootQuery type and the Comment type */
    comments: (RootQueryToCommentConnection | null)
    /** A node used to manage content */
    contentNode: (ContentNode | null)
    /** Connection between the RootQuery type and the ContentNode type */
    contentNodes: (RootQueryToContentNodeConnection | null)
    /** Fetch a Content Type node by unique Identifier */
    contentType: (ContentType | null)
    /** Connection between the RootQuery type and the ContentType type */
    contentTypes: (RootQueryToContentTypeConnection | null)
    /** Fields of the &#039;DiscussionSettings&#039; settings group */
    discussionSettings: (DiscussionSettings | null)
    /** Fields of the &#039;GeneralSettings&#039; settings group */
    generalSettings: (GeneralSettings | null)
    /** An object of the mediaItem Type.  */
    mediaItem: (MediaItem | null)
    /**
     * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
     * A mediaItem object
     */
    mediaItemBy: (MediaItem | null)
    /** Connection between the RootQuery type and the mediaItem type */
    mediaItems: (RootQueryToMediaItemConnection | null)
    /** A WordPress navigation menu */
    menu: (Menu | null)
    /** A WordPress navigation menu item */
    menuItem: (MenuItem | null)
    /** Connection between the RootQuery type and the MenuItem type */
    menuItems: (RootQueryToMenuItemConnection | null)
    /** Connection between the RootQuery type and the Menu type */
    menus: (RootQueryToMenuConnection | null)
    /** Fetches an object given its ID */
    node: (Node | null)
    /** Fetches an object given its Unique Resource Identifier */
    nodeByUri: (UniformResourceIdentifiable | null)
    /** An object of the page Type.  */
    page: (Page | null)
    /**
     * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
     * A page object
     */
    pageBy: (Page | null)
    /** Connection between the RootQuery type and the page type */
    pages: (RootQueryToPageConnection | null)
    /** A WordPress plugin */
    plugin: (Plugin | null)
    /** Connection between the RootQuery type and the Plugin type */
    plugins: (RootQueryToPluginConnection | null)
    /** An object of the post Type.  */
    post: (Post | null)
    /**
     * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
     * A post object
     */
    postBy: (Post | null)
    /** A 0bject */
    postFormat: (PostFormat | null)
    /** Connection between the RootQuery type and the postFormat type */
    postFormats: (RootQueryToPostFormatConnection | null)
    /** Connection between the RootQuery type and the post type */
    posts: (RootQueryToPostConnection | null)
    /** Fields of the &#039;ReadingSettings&#039; settings group */
    readingSettings: (ReadingSettings | null)
    /** Connection between the RootQuery type and the EnqueuedScript type */
    registeredScripts: (RootQueryToEnqueuedScriptConnection | null)
    /** Connection between the RootQuery type and the EnqueuedStylesheet type */
    registeredStylesheets: (RootQueryToEnqueuedStylesheetConnection | null)
    /** Connection between the RootQuery type and the ContentNode type */
    revisions: (RootQueryToRevisionsConnection | null)
    /** A 0bject */
    tag: (Tag | null)
    /** Connection between the RootQuery type and the tag type */
    tags: (RootQueryToTagConnection | null)
    /** Connection between the RootQuery type and the Taxonomy type */
    taxonomies: (RootQueryToTaxonomyConnection | null)
    /** Fetch a Taxonomy node by unique Identifier */
    taxonomy: (Taxonomy | null)
    /** A node in a taxonomy used to group and relate content nodes */
    termNode: (TermNode | null)
    /** Connection between the RootQuery type and the TermNode type */
    terms: (RootQueryToTermNodeConnection | null)
    /** A Theme object */
    theme: (Theme | null)
    /** Connection between the RootQuery type and the Theme type */
    themes: (RootQueryToThemeConnection | null)
    /** Returns a user */
    user: (User | null)
    /** Returns a user role */
    userRole: (UserRole | null)
    /** Connection between the RootQuery type and the UserRole type */
    userRoles: (RootQueryToUserRoleConnection | null)
    /** Connection between the RootQuery type and the User type */
    users: (RootQueryToUserConnection | null)
    /** Returns the current user */
    viewer: (User | null)
    /** Fields of the &#039;WritingSettings&#039; settings group */
    writingSettings: (WritingSettings | null)
    __typename: 'RootQuery'
}


/** All of the registered settings */
export interface Settings {
    /** Settings of the the string Settings Group */
    discussionSettingsDefaultCommentStatus: (Scalars['String'] | null)
    /** Settings of the the string Settings Group */
    discussionSettingsDefaultPingStatus: (Scalars['String'] | null)
    /** Settings of the the string Settings Group */
    generalSettingsDateFormat: (Scalars['String'] | null)
    /** Settings of the the string Settings Group */
    generalSettingsDescription: (Scalars['String'] | null)
    /** Settings of the the string Settings Group */
    generalSettingsLanguage: (Scalars['String'] | null)
    /** Settings of the the integer Settings Group */
    generalSettingsStartOfWeek: (Scalars['Int'] | null)
    /** Settings of the the string Settings Group */
    generalSettingsTimeFormat: (Scalars['String'] | null)
    /** Settings of the the string Settings Group */
    generalSettingsTimezone: (Scalars['String'] | null)
    /** Settings of the the string Settings Group */
    generalSettingsTitle: (Scalars['String'] | null)
    /** Settings of the the integer Settings Group */
    readingSettingsPageForPosts: (Scalars['Int'] | null)
    /** Settings of the the integer Settings Group */
    readingSettingsPageOnFront: (Scalars['Int'] | null)
    /** Settings of the the integer Settings Group */
    readingSettingsPostsPerPage: (Scalars['Int'] | null)
    /** Settings of the the string Settings Group */
    readingSettingsShowOnFront: (Scalars['String'] | null)
    /** Settings of the the integer Settings Group */
    writingSettingsDefaultCategory: (Scalars['Int'] | null)
    /** Settings of the the string Settings Group */
    writingSettingsDefaultPostFormat: (Scalars['String'] | null)
    /** Settings of the the boolean Settings Group */
    writingSettingsUseSmilies: (Scalars['Boolean'] | null)
    __typename: 'Settings'
}


/** The cardinality of the connection order */
export type OrderEnum = 'ASC' | 'DESC'


/** Options for ordering the connection by */
export type TermObjectsConnectionOrderbyEnum = 'COUNT' | 'DESCRIPTION' | 'NAME' | 'SLUG' | 'TERM_GROUP' | 'TERM_ID' | 'TERM_ORDER'


/** Connection between the RootQuery type and the category type */
export interface RootQueryToCategoryConnection {
    /** Edges for the RootQueryToCategoryConnection connection */
    edges: RootQueryToCategoryConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: Category[]
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToCategoryConnectionPageInfo
    __typename: 'RootQueryToCategoryConnection'
}


/** Connection to category Nodes */
export type CategoryConnection = (RootQueryToCategoryConnection | CategoryToAncestorsCategoryConnection | CategoryToCategoryConnection | PostToCategoryConnection) & { __isUnion?: true }


/** A plural connection from one Node Type in the Graph to another Node Type, with support for relational data via &quot;edges&quot;. */
export type Connection = (RootQueryToCategoryConnection | TermNodeToEnqueuedScriptConnection | TermNodeToEnqueuedStylesheetConnection | CategoryToAncestorsCategoryConnection | CategoryToCategoryConnection | CategoryToContentNodeConnection | ContentTypeToTaxonomyConnection | TaxonomyToContentTypeConnection | TaxonomyToTermNodeConnection | ContentTypeToContentNodeConnection | UserToCommentConnection | CommentToCommentConnection | UserToEnqueuedScriptConnection | UserToEnqueuedStylesheetConnection | UserToMediaItemConnection | HierarchicalContentNodeToContentNodeAncestorsConnection | HierarchicalContentNodeToContentNodeChildrenConnection | ContentNodeToEnqueuedScriptConnection | ContentNodeToEnqueuedStylesheetConnection | MediaItemToCommentConnection | UserToPageConnection | PageToCommentConnection | PageToRevisionConnection | UserToPostConnection | PostToPostConnection | PostToCategoryConnection | PostToCommentConnection | PostToPostFormatConnection | PostFormatToContentNodeConnection | PostFormatToPostConnection | PostToRevisionConnection | PostToTagConnection | TagToContentNodeConnection | TagToPostConnection | PostToTermNodeConnection | UserToRevisionsConnection | UserToUserRoleConnection | CategoryToPostConnection | RootQueryToCommentConnection | RootQueryToContentNodeConnection | RootQueryToContentTypeConnection | RootQueryToMediaItemConnection | MenuToMenuItemConnection | MenuItemToMenuItemConnection | RootQueryToMenuItemConnection | RootQueryToMenuConnection | RootQueryToPageConnection | RootQueryToPluginConnection | RootQueryToPostFormatConnection | RootQueryToPostConnection | RootQueryToEnqueuedScriptConnection | RootQueryToEnqueuedStylesheetConnection | RootQueryToRevisionsConnection | RootQueryToTagConnection | RootQueryToTaxonomyConnection | RootQueryToTermNodeConnection | RootQueryToThemeConnection | RootQueryToUserRoleConnection | RootQueryToUserConnection) & { __isUnion?: true }


/** Relational context between connected nodes */
export type Edge = (TermNodeToEnqueuedScriptConnectionEdge | TermNodeToEnqueuedStylesheetConnectionEdge | CategoryToAncestorsCategoryConnectionEdge | CategoryToCategoryConnectionEdge | ContentNodeToContentTypeConnectionEdge | TaxonomyToContentTypeConnectionEdge | TaxonomyToTermNodeConnectionEdge | ContentTypeToTaxonomyConnectionEdge | ContentTypeToContentNodeConnectionEdge | ContentNodeToEditLockConnectionEdge | CommentToCommenterConnectionEdge | CommentToContentNodeConnectionEdge | CommentToParentCommentConnectionEdge | CommentToCommentConnectionEdge | UserToCommentConnectionEdge | UserToEnqueuedScriptConnectionEdge | UserToEnqueuedStylesheetConnectionEdge | NodeWithAuthorToUserConnectionEdge | HierarchicalContentNodeToContentNodeAncestorsConnectionEdge | HierarchicalContentNodeToContentNodeChildrenConnectionEdge | ContentNodeToEnqueuedScriptConnectionEdge | ContentNodeToEnqueuedStylesheetConnectionEdge | ContentNodeToEditLastConnectionEdge | HierarchicalContentNodeToParentContentNodeConnectionEdge | MediaItemToCommentConnectionEdge | UserToMediaItemConnectionEdge | NodeWithFeaturedImageToMediaItemConnectionEdge | NodeWithRevisionsToContentNodeConnectionEdge | PageToCommentConnectionEdge | PageToPreviewConnectionEdge | PageToRevisionConnectionEdge | UserToPageConnectionEdge | PostToPostConnectionEdge | PostToCategoryConnectionEdge | PostToCommentConnectionEdge | PostToParentConnectionEdge | PostFormatToContentNodeConnectionEdge | PostFormatToPostConnectionEdge | PostFormatToTaxonomyConnectionEdge | PostToPostFormatConnectionEdge | PostToPreviewConnectionEdge | PostToRevisionConnectionEdge | TagToContentNodeConnectionEdge | TagToPostConnectionEdge | TagToTaxonomyConnectionEdge | PostToTagConnectionEdge | PostToTermNodeConnectionEdge | UserToPostConnectionEdge | UserToRevisionsConnectionEdge | UserToUserRoleConnectionEdge | CategoryToContentNodeConnectionEdge | CategoryToParentCategoryConnectionEdge | CategoryToPostConnectionEdge | CategoryToTaxonomyConnectionEdge | RootQueryToCategoryConnectionEdge | RootQueryToCommentConnectionEdge | RootQueryToContentNodeConnectionEdge | RootQueryToContentTypeConnectionEdge | RootQueryToMediaItemConnectionEdge | MenuItemToMenuItemConnectionEdge | MenuItemToMenuItemLinkableConnectionEdge | MenuItemToMenuConnectionEdge | MenuToMenuItemConnectionEdge | RootQueryToMenuItemConnectionEdge | RootQueryToMenuConnectionEdge | RootQueryToPageConnectionEdge | RootQueryToPluginConnectionEdge | RootQueryToPostFormatConnectionEdge | RootQueryToPostConnectionEdge | RootQueryToEnqueuedScriptConnectionEdge | RootQueryToEnqueuedStylesheetConnectionEdge | RootQueryToRevisionsConnectionEdge | RootQueryToTagConnectionEdge | RootQueryToTaxonomyConnectionEdge | RootQueryToTermNodeConnectionEdge | RootQueryToThemeConnectionEdge | RootQueryToUserRoleConnectionEdge | RootQueryToUserConnectionEdge | AcfMediaItemConnectionEdge) & { __isUnion?: true }


/** An object with an ID */
export type Node = (Category | EnqueuedScript | EnqueuedStylesheet | ContentType | Taxonomy | User | Comment | MediaItem | Page | Post | PostFormat | Tag | UserRole | Menu | MenuItem | Plugin | Theme | CommentAuthor) & { __isUnion?: true }


/** Information about pagination in a connection. */
export type PageInfo = (TermNodeToEnqueuedScriptConnectionPageInfo | TermNodeToEnqueuedStylesheetConnectionPageInfo | CategoryToAncestorsCategoryConnectionPageInfo | CategoryToCategoryConnectionPageInfo | TaxonomyToContentTypeConnectionPageInfo | TaxonomyToTermNodeConnectionPageInfo | ContentTypeToTaxonomyConnectionPageInfo | ContentTypeToContentNodeConnectionPageInfo | CommentToCommentConnectionPageInfo | UserToCommentConnectionPageInfo | UserToEnqueuedScriptConnectionPageInfo | UserToEnqueuedStylesheetConnectionPageInfo | HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo | HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo | ContentNodeToEnqueuedScriptConnectionPageInfo | ContentNodeToEnqueuedStylesheetConnectionPageInfo | MediaItemToCommentConnectionPageInfo | UserToMediaItemConnectionPageInfo | PageToCommentConnectionPageInfo | PageToRevisionConnectionPageInfo | UserToPageConnectionPageInfo | PostToPostConnectionPageInfo | PostToCategoryConnectionPageInfo | PostToCommentConnectionPageInfo | PostFormatToContentNodeConnectionPageInfo | PostFormatToPostConnectionPageInfo | PostToPostFormatConnectionPageInfo | PostToRevisionConnectionPageInfo | TagToContentNodeConnectionPageInfo | TagToPostConnectionPageInfo | PostToTagConnectionPageInfo | PostToTermNodeConnectionPageInfo | UserToPostConnectionPageInfo | UserToRevisionsConnectionPageInfo | UserToUserRoleConnectionPageInfo | CategoryToContentNodeConnectionPageInfo | CategoryToPostConnectionPageInfo | RootQueryToCategoryConnectionPageInfo | RootQueryToCommentConnectionPageInfo | RootQueryToContentNodeConnectionPageInfo | RootQueryToContentTypeConnectionPageInfo | RootQueryToMediaItemConnectionPageInfo | MenuItemToMenuItemConnectionPageInfo | MenuToMenuItemConnectionPageInfo | RootQueryToMenuItemConnectionPageInfo | RootQueryToMenuConnectionPageInfo | RootQueryToPageConnectionPageInfo | RootQueryToPluginConnectionPageInfo | RootQueryToPostFormatConnectionPageInfo | RootQueryToPostConnectionPageInfo | RootQueryToEnqueuedScriptConnectionPageInfo | RootQueryToEnqueuedStylesheetConnectionPageInfo | RootQueryToRevisionsConnectionPageInfo | RootQueryToTagConnectionPageInfo | RootQueryToTaxonomyConnectionPageInfo | RootQueryToTermNodeConnectionPageInfo | RootQueryToThemeConnectionPageInfo | RootQueryToUserRoleConnectionPageInfo | RootQueryToUserConnectionPageInfo) & { __isUnion?: true }


/** Edge between a Node and a connected category */
export type CategoryConnectionEdge = (CategoryToAncestorsCategoryConnectionEdge | CategoryToCategoryConnectionEdge | PostToCategoryConnectionEdge | CategoryToParentCategoryConnectionEdge | RootQueryToCategoryConnectionEdge) & { __isUnion?: true }


/** The category type */
export interface Category {
    /** The ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
    ancestors: (CategoryToAncestorsCategoryConnection | null)
    /**
     * @deprecated Deprecated in favor of databaseId
     * The id field matches the WP_Post-&gt;ID field.
     */
    categoryId: (Scalars['Int'] | null)
    /** Connection between the category type and its children categories. */
    children: (CategoryToCategoryConnection | null)
    /** Connection between the Category type and the ContentNode type */
    contentNodes: (CategoryToContentNodeConnection | null)
    /** The number of objects connected to the object */
    count: (Scalars['Int'] | null)
    /** The unique identifier stored in the database */
    databaseId: Scalars['Int']
    /** The description of the object */
    description: (Scalars['String'] | null)
    /** Connection between the TermNode type and the EnqueuedScript type */
    enqueuedScripts: (TermNodeToEnqueuedScriptConnection | null)
    /** Connection between the TermNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets: (TermNodeToEnqueuedStylesheetConnection | null)
    /** The globally unique ID for the object */
    id: Scalars['ID']
    /** Whether the node is a Comment */
    isComment: Scalars['Boolean']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']
    /** Whether the node represents the front page. */
    isFrontPage: Scalars['Boolean']
    /** Whether  the node represents the blog page. */
    isPostsPage: Scalars['Boolean']
    /** Whether the object is restricted from the current viewer */
    isRestricted: (Scalars['Boolean'] | null)
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean']
    /** The link to the term */
    link: (Scalars['String'] | null)
    /** The human friendly name of the object. */
    name: (Scalars['String'] | null)
    /** Connection between the category type and its parent category. */
    parent: (CategoryToParentCategoryConnectionEdge | null)
    /** Database id of the parent node */
    parentDatabaseId: (Scalars['Int'] | null)
    /** The globally unique identifier of the parent node. */
    parentId: (Scalars['ID'] | null)
    /** Connection between the Category type and the post type */
    posts: (CategoryToPostConnection | null)
    /** An alphanumeric identifier for the object unique to its type. */
    slug: (Scalars['String'] | null)
    /** Connection between the Category type and the Taxonomy type */
    taxonomy: (CategoryToTaxonomyConnectionEdge | null)
    /** The name of the taxonomy that the object is associated with */
    taxonomyName: (Scalars['String'] | null)
    /** The ID of the term group that this term object belongs to */
    termGroupId: (Scalars['Int'] | null)
    /** The taxonomy ID that the object is associated with */
    termTaxonomyId: (Scalars['Int'] | null)
    /** The unique resource identifier path */
    uri: (Scalars['String'] | null)
    __typename: 'Category'
}


/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export type TermNode = (Category | PostFormat | Tag) & { __isUnion?: true }


/** Any node that has a URI */
export type UniformResourceIdentifiable = (Category | ContentType | User | Comment | MediaItem | Page | Post | PostFormat | Tag) & { __isUnion?: true }


/** Connection between the TermNode type and the EnqueuedScript type */
export interface TermNodeToEnqueuedScriptConnection {
    /** Edges for the TermNodeToEnqueuedScriptConnection connection */
    edges: TermNodeToEnqueuedScriptConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: EnqueuedScript[]
    /** Information about pagination in a connection. */
    pageInfo: TermNodeToEnqueuedScriptConnectionPageInfo
    __typename: 'TermNodeToEnqueuedScriptConnection'
}


/** Connection to EnqueuedScript Nodes */
export type EnqueuedScriptConnection = (TermNodeToEnqueuedScriptConnection | UserToEnqueuedScriptConnection | ContentNodeToEnqueuedScriptConnection | RootQueryToEnqueuedScriptConnection) & { __isUnion?: true }


/** Edge between a Node and a connected EnqueuedScript */
export type EnqueuedScriptConnectionEdge = (TermNodeToEnqueuedScriptConnectionEdge | UserToEnqueuedScriptConnectionEdge | ContentNodeToEnqueuedScriptConnectionEdge | RootQueryToEnqueuedScriptConnectionEdge) & { __isUnion?: true }


/** Script enqueued by the CMS */
export interface EnqueuedScript {
    /** The inline code to be run after the asset is loaded. */
    after: ((Scalars['String'] | null)[] | null)
    /**
     * @deprecated Use `EnqueuedAsset.media` instead.
     * Deprecated
     */
    args: (Scalars['Boolean'] | null)
    /** The inline code to be run before the asset is loaded. */
    before: ((Scalars['String'] | null)[] | null)
    /** The HTML conditional comment for the enqueued asset. E.g. IE 6, lte IE 7, etc */
    conditional: (Scalars['String'] | null)
    /** Dependencies needed to use this asset */
    dependencies: ((EnqueuedScript | null)[] | null)
    /**
     * @deprecated Use `EnqueuedScript.extraData` instead.
     * Extra information needed for the script
     */
    extra: (Scalars['String'] | null)
    /** Extra data supplied to the enqueued script */
    extraData: (Scalars['String'] | null)
    /** The handle of the enqueued asset */
    handle: (Scalars['String'] | null)
    /** The global ID of the enqueued script */
    id: Scalars['ID']
    /** The source of the asset */
    src: (Scalars['String'] | null)
    /** The loading strategy to use on the script tag */
    strategy: (ScriptLoadingStrategyEnum | null)
    /** The version of the enqueued script */
    version: (Scalars['String'] | null)
    __typename: 'EnqueuedScript'
}


/** Asset enqueued by the CMS */
export type EnqueuedAsset = (EnqueuedScript | EnqueuedStylesheet) & { __isUnion?: true }


/** The strategy to use when loading the script */
export type ScriptLoadingStrategyEnum = 'ASYNC' | 'DEFER'


/** Page Info on the connected EnqueuedScriptConnectionEdge */
export type EnqueuedScriptConnectionPageInfo = (TermNodeToEnqueuedScriptConnectionPageInfo | UserToEnqueuedScriptConnectionPageInfo | ContentNodeToEnqueuedScriptConnectionPageInfo | RootQueryToEnqueuedScriptConnectionPageInfo) & { __isUnion?: true }


/** Information about pagination in a connection. */
export type WPPageInfo = (TermNodeToEnqueuedScriptConnectionPageInfo | TermNodeToEnqueuedStylesheetConnectionPageInfo | CategoryToAncestorsCategoryConnectionPageInfo | CategoryToCategoryConnectionPageInfo | TaxonomyToContentTypeConnectionPageInfo | TaxonomyToTermNodeConnectionPageInfo | ContentTypeToTaxonomyConnectionPageInfo | ContentTypeToContentNodeConnectionPageInfo | CommentToCommentConnectionPageInfo | UserToCommentConnectionPageInfo | UserToEnqueuedScriptConnectionPageInfo | UserToEnqueuedStylesheetConnectionPageInfo | HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo | HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo | ContentNodeToEnqueuedScriptConnectionPageInfo | ContentNodeToEnqueuedStylesheetConnectionPageInfo | MediaItemToCommentConnectionPageInfo | UserToMediaItemConnectionPageInfo | PageToCommentConnectionPageInfo | PageToRevisionConnectionPageInfo | UserToPageConnectionPageInfo | PostToPostConnectionPageInfo | PostToCategoryConnectionPageInfo | PostToCommentConnectionPageInfo | PostFormatToContentNodeConnectionPageInfo | PostFormatToPostConnectionPageInfo | PostToPostFormatConnectionPageInfo | PostToRevisionConnectionPageInfo | TagToContentNodeConnectionPageInfo | TagToPostConnectionPageInfo | PostToTagConnectionPageInfo | PostToTermNodeConnectionPageInfo | UserToPostConnectionPageInfo | UserToRevisionsConnectionPageInfo | UserToUserRoleConnectionPageInfo | CategoryToContentNodeConnectionPageInfo | CategoryToPostConnectionPageInfo | RootQueryToCategoryConnectionPageInfo | RootQueryToCommentConnectionPageInfo | RootQueryToContentNodeConnectionPageInfo | RootQueryToContentTypeConnectionPageInfo | RootQueryToMediaItemConnectionPageInfo | MenuItemToMenuItemConnectionPageInfo | MenuToMenuItemConnectionPageInfo | RootQueryToMenuItemConnectionPageInfo | RootQueryToMenuConnectionPageInfo | RootQueryToPageConnectionPageInfo | RootQueryToPluginConnectionPageInfo | RootQueryToPostFormatConnectionPageInfo | RootQueryToPostConnectionPageInfo | RootQueryToEnqueuedScriptConnectionPageInfo | RootQueryToEnqueuedStylesheetConnectionPageInfo | RootQueryToRevisionsConnectionPageInfo | RootQueryToTagConnectionPageInfo | RootQueryToTaxonomyConnectionPageInfo | RootQueryToTermNodeConnectionPageInfo | RootQueryToThemeConnectionPageInfo | RootQueryToUserRoleConnectionPageInfo | RootQueryToUserConnectionPageInfo) & { __isUnion?: true }


/** An edge in a connection */
export interface TermNodeToEnqueuedScriptConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: EnqueuedScript
    __typename: 'TermNodeToEnqueuedScriptConnectionEdge'
}


/** Page Info on the &quot;TermNodeToEnqueuedScriptConnection&quot; */
export interface TermNodeToEnqueuedScriptConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'TermNodeToEnqueuedScriptConnectionPageInfo'
}


/** Connection between the TermNode type and the EnqueuedStylesheet type */
export interface TermNodeToEnqueuedStylesheetConnection {
    /** Edges for the TermNodeToEnqueuedStylesheetConnection connection */
    edges: TermNodeToEnqueuedStylesheetConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: EnqueuedStylesheet[]
    /** Information about pagination in a connection. */
    pageInfo: TermNodeToEnqueuedStylesheetConnectionPageInfo
    __typename: 'TermNodeToEnqueuedStylesheetConnection'
}


/** Connection to EnqueuedStylesheet Nodes */
export type EnqueuedStylesheetConnection = (TermNodeToEnqueuedStylesheetConnection | UserToEnqueuedStylesheetConnection | ContentNodeToEnqueuedStylesheetConnection | RootQueryToEnqueuedStylesheetConnection) & { __isUnion?: true }


/** Edge between a Node and a connected EnqueuedStylesheet */
export type EnqueuedStylesheetConnectionEdge = (TermNodeToEnqueuedStylesheetConnectionEdge | UserToEnqueuedStylesheetConnectionEdge | ContentNodeToEnqueuedStylesheetConnectionEdge | RootQueryToEnqueuedStylesheetConnectionEdge) & { __isUnion?: true }


/** Stylesheet enqueued by the CMS */
export interface EnqueuedStylesheet {
    /** The inline code to be run after the asset is loaded. */
    after: ((Scalars['String'] | null)[] | null)
    /**
     * @deprecated Use `EnqueuedAsset.media` instead.
     * Deprecated
     */
    args: (Scalars['Boolean'] | null)
    /** The inline code to be run before the asset is loaded. */
    before: ((Scalars['String'] | null)[] | null)
    /** The HTML conditional comment for the enqueued asset. E.g. IE 6, lte IE 7, etc */
    conditional: (Scalars['String'] | null)
    /** Dependencies needed to use this asset */
    dependencies: ((EnqueuedStylesheet | null)[] | null)
    /**
     * @deprecated Use `EnqueuedScript.extraData` instead.
     * Extra information needed for the script
     */
    extra: (Scalars['String'] | null)
    /** The handle of the enqueued asset */
    handle: (Scalars['String'] | null)
    /** The global ID of the enqueued stylesheet */
    id: Scalars['ID']
    /** Whether the enqueued style is RTL or not */
    isRtl: (Scalars['Boolean'] | null)
    /** The media attribute to use for the link */
    media: (Scalars['String'] | null)
    /** The absolute path to the enqueued style. Set when the stylesheet is meant to load inline. */
    path: (Scalars['String'] | null)
    /** The `rel` attribute to use for the link */
    rel: (Scalars['String'] | null)
    /** The source of the asset */
    src: (Scalars['String'] | null)
    /** Optional suffix, used in combination with RTL */
    suffix: (Scalars['String'] | null)
    /** The title of the enqueued style. Used for preferred/alternate stylesheets. */
    title: (Scalars['String'] | null)
    /** The version of the enqueued style */
    version: (Scalars['String'] | null)
    __typename: 'EnqueuedStylesheet'
}


/** Page Info on the connected EnqueuedStylesheetConnectionEdge */
export type EnqueuedStylesheetConnectionPageInfo = (TermNodeToEnqueuedStylesheetConnectionPageInfo | UserToEnqueuedStylesheetConnectionPageInfo | ContentNodeToEnqueuedStylesheetConnectionPageInfo | RootQueryToEnqueuedStylesheetConnectionPageInfo) & { __isUnion?: true }


/** An edge in a connection */
export interface TermNodeToEnqueuedStylesheetConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: EnqueuedStylesheet
    __typename: 'TermNodeToEnqueuedStylesheetConnectionEdge'
}


/** Page Info on the &quot;TermNodeToEnqueuedStylesheetConnection&quot; */
export interface TermNodeToEnqueuedStylesheetConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'TermNodeToEnqueuedStylesheetConnectionPageInfo'
}


/** Object that can be identified with a Database ID */
export type DatabaseIdentifier = (Category | User | Comment | MediaItem | Page | Post | PostFormat | Tag | Menu | MenuItem | CommentAuthor) & { __isUnion?: true }


/** Term node with hierarchical (parent/child) relationships */
export type HierarchicalTermNode = (Category) & { __isUnion?: true }


/** Node with hierarchical (parent/child) relationships */
export type HierarchicalNode = (Category | MediaItem | Page) & { __isUnion?: true }


/** Nodes that can be linked to as Menu Items */
export type MenuItemLinkable = (Category | Page | Post | PostFormat | Tag) & { __isUnion?: true }


/** Connection between the Category type and the category type */
export interface CategoryToAncestorsCategoryConnection {
    /** Edges for the CategoryToAncestorsCategoryConnection connection */
    edges: CategoryToAncestorsCategoryConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: Category[]
    /** Information about pagination in a connection. */
    pageInfo: CategoryToAncestorsCategoryConnectionPageInfo
    __typename: 'CategoryToAncestorsCategoryConnection'
}


/** An edge in a connection */
export interface CategoryToAncestorsCategoryConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: Category
    __typename: 'CategoryToAncestorsCategoryConnectionEdge'
}


/** Page Info on the &quot;CategoryToAncestorsCategoryConnection&quot; */
export interface CategoryToAncestorsCategoryConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'CategoryToAncestorsCategoryConnectionPageInfo'
}


/** Page Info on the connected CategoryConnectionEdge */
export type CategoryConnectionPageInfo = (CategoryToAncestorsCategoryConnectionPageInfo | CategoryToCategoryConnectionPageInfo | PostToCategoryConnectionPageInfo | RootQueryToCategoryConnectionPageInfo) & { __isUnion?: true }


/** Connection between the Category type and the category type */
export interface CategoryToCategoryConnection {
    /** Edges for the CategoryToCategoryConnection connection */
    edges: CategoryToCategoryConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: Category[]
    /** Information about pagination in a connection. */
    pageInfo: CategoryToCategoryConnectionPageInfo
    __typename: 'CategoryToCategoryConnection'
}


/** An edge in a connection */
export interface CategoryToCategoryConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: Category
    __typename: 'CategoryToCategoryConnectionEdge'
}


/** Page Info on the &quot;CategoryToCategoryConnection&quot; */
export interface CategoryToCategoryConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'CategoryToCategoryConnectionPageInfo'
}


/** Allowed Content Types of the Category taxonomy. */
export type ContentTypesOfCategoryEnum = 'POST'


/** The column to use when filtering by date */
export type PostObjectsConnectionDateColumnEnum = 'DATE' | 'MODIFIED'


/** The logical relation between each item in the array when there are more than one. */
export type RelationEnum = 'AND' | 'OR'


/** The MimeType of the object */
export type MimeTypeEnum = 'APPLICATION_MSWORD' | 'APPLICATION_PDF' | 'APPLICATION_VND_APPLE_KEYNOTE' | 'APPLICATION_VND_MS_EXCEL' | 'APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12' | 'APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12' | 'APPLICATION_VND_MS_POWERPOINT' | 'APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12' | 'APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12' | 'APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12' | 'APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT' | 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION' | 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW' | 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET' | 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT' | 'AUDIO_FLAC' | 'AUDIO_MIDI' | 'AUDIO_MPEG' | 'AUDIO_OGG' | 'AUDIO_WAV' | 'IMAGE_AVIF' | 'IMAGE_GIF' | 'IMAGE_JPEG' | 'IMAGE_PNG' | 'IMAGE_SVG_XML' | 'IMAGE_WEBP' | 'VIDEO_3GPP' | 'VIDEO_3GPP2' | 'VIDEO_AVI' | 'VIDEO_MP4' | 'VIDEO_MPEG' | 'VIDEO_OGG' | 'VIDEO_QUICKTIME' | 'VIDEO_WEBM' | 'VIDEO_X_FLV'


/** Field to order the connection by */
export type PostObjectsConnectionOrderbyEnum = 'AUTHOR' | 'COMMENT_COUNT' | 'DATE' | 'IN' | 'MENU_ORDER' | 'MODIFIED' | 'NAME_IN' | 'PARENT' | 'SLUG' | 'TITLE'


/** The status of the object. */
export type PostStatusEnum = 'ACF_DISABLED' | 'AUTO_DRAFT' | 'DRAFT' | 'FUTURE' | 'INHERIT' | 'PENDING' | 'PRIVATE' | 'PUBLISH' | 'REQUEST_COMPLETED' | 'REQUEST_CONFIRMED' | 'REQUEST_FAILED' | 'REQUEST_PENDING' | 'TRASH' | 'WC_CANCELLED' | 'WC_CHECKOUT_DRAFT' | 'WC_COMPLETED' | 'WC_FAILED' | 'WC_ON_HOLD' | 'WC_PENDING' | 'WC_PROCESSING' | 'WC_REFUNDED'


/** Connection between the Category type and the ContentNode type */
export interface CategoryToContentNodeConnection {
    /** Edges for the CategoryToContentNodeConnection connection */
    edges: CategoryToContentNodeConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: ContentNode[]
    /** Information about pagination in a connection. */
    pageInfo: CategoryToContentNodeConnectionPageInfo
    __typename: 'CategoryToContentNodeConnection'
}


/** Connection to ContentNode Nodes */
export type ContentNodeConnection = (CategoryToContentNodeConnection | ContentTypeToContentNodeConnection | HierarchicalContentNodeToContentNodeAncestorsConnection | HierarchicalContentNodeToContentNodeChildrenConnection | PostFormatToContentNodeConnection | TagToContentNodeConnection | UserToRevisionsConnection | RootQueryToContentNodeConnection | RootQueryToRevisionsConnection) & { __isUnion?: true }


/** Edge between a Node and a connected ContentNode */
export type ContentNodeConnectionEdge = (ContentTypeToContentNodeConnectionEdge | CommentToContentNodeConnectionEdge | HierarchicalContentNodeToContentNodeAncestorsConnectionEdge | HierarchicalContentNodeToContentNodeChildrenConnectionEdge | HierarchicalContentNodeToParentContentNodeConnectionEdge | NodeWithRevisionsToContentNodeConnectionEdge | PostFormatToContentNodeConnectionEdge | TagToContentNodeConnectionEdge | UserToRevisionsConnectionEdge | CategoryToContentNodeConnectionEdge | RootQueryToContentNodeConnectionEdge | RootQueryToRevisionsConnectionEdge) & { __isUnion?: true }


/** Nodes used to manage content */
export type ContentNode = (MediaItem | Page | Post) & { __isUnion?: true }


/** Connection between the ContentNode type and the ContentType type */
export interface ContentNodeToContentTypeConnectionEdge {
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor: (Scalars['String'] | null)
    /** The node of the connection, without the edges */
    node: ContentType
    __typename: 'ContentNodeToContentTypeConnectionEdge'
}


/** A singular connection from one Node to another, with support for relational data on the &quot;edge&quot; of the connection. */
export type OneToOneConnection = (ContentNodeToContentTypeConnectionEdge | ContentNodeToEditLockConnectionEdge | CommentToCommenterConnectionEdge | CommentToContentNodeConnectionEdge | CommentToParentCommentConnectionEdge | NodeWithAuthorToUserConnectionEdge | ContentNodeToEditLastConnectionEdge | HierarchicalContentNodeToParentContentNodeConnectionEdge | NodeWithFeaturedImageToMediaItemConnectionEdge | NodeWithRevisionsToContentNodeConnectionEdge | PageToPreviewConnectionEdge | PostToParentConnectionEdge | PostFormatToTaxonomyConnectionEdge | PostToPreviewConnectionEdge | TagToTaxonomyConnectionEdge | CategoryToParentCategoryConnectionEdge | CategoryToTaxonomyConnectionEdge | MenuItemToMenuItemLinkableConnectionEdge | MenuItemToMenuConnectionEdge | AcfMediaItemConnectionEdge) & { __isUnion?: true }


/** Edge between a Node and a connected ContentType */
export type ContentTypeConnectionEdge = (ContentNodeToContentTypeConnectionEdge | TaxonomyToContentTypeConnectionEdge | RootQueryToContentTypeConnectionEdge) & { __isUnion?: true }


/** An Post Type object */
export interface ContentType {
    /** Whether this content type should can be exported. */
    canExport: (Scalars['Boolean'] | null)
    /** Connection between the ContentType type and the Taxonomy type */
    connectedTaxonomies: (ContentTypeToTaxonomyConnection | null)
    /** Connection between the ContentType type and the ContentNode type */
    contentNodes: (ContentTypeToContentNodeConnection | null)
    /** Whether content of this type should be deleted when the author of it is deleted from the system. */
    deleteWithUser: (Scalars['Boolean'] | null)
    /** Description of the content type. */
    description: (Scalars['String'] | null)
    /** Whether to exclude nodes of this content type from front end search results. */
    excludeFromSearch: (Scalars['Boolean'] | null)
    /** The plural name of the content type within the GraphQL Schema. */
    graphqlPluralName: (Scalars['String'] | null)
    /** The singular name of the content type within the GraphQL Schema. */
    graphqlSingleName: (Scalars['String'] | null)
    /** Whether this content type should have archives. Content archives are generated by type and by date. */
    hasArchive: (Scalars['Boolean'] | null)
    /** Whether the content type is hierarchical, for example pages. */
    hierarchical: (Scalars['Boolean'] | null)
    /** The globally unique identifier of the post-type object. */
    id: Scalars['ID']
    /** Whether the node is a Comment */
    isComment: Scalars['Boolean']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']
    /** Whether this page is set to the static front page. */
    isFrontPage: Scalars['Boolean']
    /** Whether this page is set to the blog posts page. */
    isPostsPage: Scalars['Boolean']
    /** Whether the object is restricted from the current viewer */
    isRestricted: (Scalars['Boolean'] | null)
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean']
    /** Display name of the content type. */
    label: (Scalars['String'] | null)
    /** Details about the content type labels. */
    labels: (PostTypeLabelDetails | null)
    /** The name of the icon file to display as a menu icon. */
    menuIcon: (Scalars['String'] | null)
    /** The position of this post type in the menu. Only applies if show_in_menu is true. */
    menuPosition: (Scalars['Int'] | null)
    /** The internal name of the post type. This should not be used for display purposes. */
    name: (Scalars['String'] | null)
    /** Whether a content type is intended for use publicly either via the admin interface or by front-end users. While the default settings of exclude_from_search, publicly_queryable, show_ui, and show_in_nav_menus are inherited from public, each does not rely on this relationship and controls a very specific intention. */
    public: (Scalars['Boolean'] | null)
    /** Whether queries can be performed on the front end for the content type as part of parse_request(). */
    publiclyQueryable: (Scalars['Boolean'] | null)
    /** Name of content type to display in REST API &quot;wp/v2&quot; namespace. */
    restBase: (Scalars['String'] | null)
    /** The REST Controller class assigned to handling this content type. */
    restControllerClass: (Scalars['String'] | null)
    /** Makes this content type available via the admin bar. */
    showInAdminBar: (Scalars['Boolean'] | null)
    /** Whether to add the content type to the GraphQL Schema. */
    showInGraphql: (Scalars['Boolean'] | null)
    /** Where to show the content type in the admin menu. To work, $show_ui must be true. If true, the post type is shown in its own top level menu. If false, no menu is shown. If a string of an existing top level menu (eg. &quot;tools.php&quot; or &quot;edit.php?post_type=page&quot;), the post type will be placed as a sub-menu of that. */
    showInMenu: (Scalars['Boolean'] | null)
    /** Makes this content type available for selection in navigation menus. */
    showInNavMenus: (Scalars['Boolean'] | null)
    /** Whether the content type is associated with a route under the the REST API &quot;wp/v2&quot; namespace. */
    showInRest: (Scalars['Boolean'] | null)
    /** Whether to generate and allow a UI for managing this content type in the admin. */
    showUi: (Scalars['Boolean'] | null)
    /** The unique resource identifier path */
    uri: (Scalars['String'] | null)
    __typename: 'ContentType'
}


/** Connection between the ContentType type and the Taxonomy type */
export interface ContentTypeToTaxonomyConnection {
    /** Edges for the ContentTypeToTaxonomyConnection connection */
    edges: ContentTypeToTaxonomyConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: Taxonomy[]
    /** Information about pagination in a connection. */
    pageInfo: ContentTypeToTaxonomyConnectionPageInfo
    __typename: 'ContentTypeToTaxonomyConnection'
}


/** Connection to Taxonomy Nodes */
export type TaxonomyConnection = (ContentTypeToTaxonomyConnection | RootQueryToTaxonomyConnection) & { __isUnion?: true }


/** Edge between a Node and a connected Taxonomy */
export type TaxonomyConnectionEdge = (ContentTypeToTaxonomyConnectionEdge | PostFormatToTaxonomyConnectionEdge | TagToTaxonomyConnectionEdge | CategoryToTaxonomyConnectionEdge | RootQueryToTaxonomyConnectionEdge) & { __isUnion?: true }


/** A taxonomy object */
export interface Taxonomy {
    /** List of Content Types associated with the Taxonomy */
    connectedContentTypes: (TaxonomyToContentTypeConnection | null)
    /** List of Term Nodes associated with the Taxonomy */
    connectedTerms: (TaxonomyToTermNodeConnection | null)
    /** Description of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;description */
    description: (Scalars['String'] | null)
    /** The plural name of the post type within the GraphQL Schema. */
    graphqlPluralName: (Scalars['String'] | null)
    /** The singular name of the post type within the GraphQL Schema. */
    graphqlSingleName: (Scalars['String'] | null)
    /** Whether the taxonomy is hierarchical */
    hierarchical: (Scalars['Boolean'] | null)
    /** The globally unique identifier of the taxonomy object. */
    id: Scalars['ID']
    /** Whether the object is restricted from the current viewer */
    isRestricted: (Scalars['Boolean'] | null)
    /** Name of the taxonomy shown in the menu. Usually plural. */
    label: (Scalars['String'] | null)
    /** The display name of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;label */
    name: (Scalars['String'] | null)
    /** Whether the taxonomy is publicly queryable */
    public: (Scalars['Boolean'] | null)
    /** Name of content type to display in REST API &quot;wp/v2&quot; namespace. */
    restBase: (Scalars['String'] | null)
    /** The REST Controller class assigned to handling this content type. */
    restControllerClass: (Scalars['String'] | null)
    /** Whether to show the taxonomy as part of a tag cloud widget. This field is equivalent to WP_Taxonomy-&gt;show_tagcloud */
    showCloud: (Scalars['Boolean'] | null)
    /** Whether to display a column for the taxonomy on its post type listing screens. */
    showInAdminColumn: (Scalars['Boolean'] | null)
    /** Whether to add the post type to the GraphQL Schema. */
    showInGraphql: (Scalars['Boolean'] | null)
    /** Whether to show the taxonomy in the admin menu */
    showInMenu: (Scalars['Boolean'] | null)
    /** Whether the taxonomy is available for selection in navigation menus. */
    showInNavMenus: (Scalars['Boolean'] | null)
    /** Whether to show the taxonomy in the quick/bulk edit panel. */
    showInQuickEdit: (Scalars['Boolean'] | null)
    /** Whether to add the post type route in the REST API &quot;wp/v2&quot; namespace. */
    showInRest: (Scalars['Boolean'] | null)
    /** Whether to generate and allow a UI for managing terms in this taxonomy in the admin */
    showUi: (Scalars['Boolean'] | null)
    __typename: 'Taxonomy'
}


/** Connection between the Taxonomy type and the ContentType type */
export interface TaxonomyToContentTypeConnection {
    /** Edges for the TaxonomyToContentTypeConnection connection */
    edges: TaxonomyToContentTypeConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: ContentType[]
    /** Information about pagination in a connection. */
    pageInfo: TaxonomyToContentTypeConnectionPageInfo
    __typename: 'TaxonomyToContentTypeConnection'
}


/** Connection to ContentType Nodes */
export type ContentTypeConnection = (TaxonomyToContentTypeConnection | RootQueryToContentTypeConnection) & { __isUnion?: true }


/** Page Info on the connected ContentTypeConnectionEdge */
export type ContentTypeConnectionPageInfo = (TaxonomyToContentTypeConnectionPageInfo | RootQueryToContentTypeConnectionPageInfo) & { __isUnion?: true }


/** An edge in a connection */
export interface TaxonomyToContentTypeConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: ContentType
    __typename: 'TaxonomyToContentTypeConnectionEdge'
}


/** Page Info on the &quot;TaxonomyToContentTypeConnection&quot; */
export interface TaxonomyToContentTypeConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'TaxonomyToContentTypeConnectionPageInfo'
}


/** Connection between the Taxonomy type and the TermNode type */
export interface TaxonomyToTermNodeConnection {
    /** Edges for the TaxonomyToTermNodeConnection connection */
    edges: TaxonomyToTermNodeConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: TermNode[]
    /** Information about pagination in a connection. */
    pageInfo: TaxonomyToTermNodeConnectionPageInfo
    __typename: 'TaxonomyToTermNodeConnection'
}


/** Connection to TermNode Nodes */
export type TermNodeConnection = (TaxonomyToTermNodeConnection | PostToTermNodeConnection | RootQueryToTermNodeConnection) & { __isUnion?: true }


/** Edge between a Node and a connected TermNode */
export type TermNodeConnectionEdge = (TaxonomyToTermNodeConnectionEdge | PostToTermNodeConnectionEdge | RootQueryToTermNodeConnectionEdge) & { __isUnion?: true }


/** Page Info on the connected TermNodeConnectionEdge */
export type TermNodeConnectionPageInfo = (TaxonomyToTermNodeConnectionPageInfo | PostToTermNodeConnectionPageInfo | RootQueryToTermNodeConnectionPageInfo) & { __isUnion?: true }


/** An edge in a connection */
export interface TaxonomyToTermNodeConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: TermNode
    __typename: 'TaxonomyToTermNodeConnectionEdge'
}


/** Page Info on the &quot;TaxonomyToTermNodeConnection&quot; */
export interface TaxonomyToTermNodeConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'TaxonomyToTermNodeConnectionPageInfo'
}


/** Page Info on the connected TaxonomyConnectionEdge */
export type TaxonomyConnectionPageInfo = (ContentTypeToTaxonomyConnectionPageInfo | RootQueryToTaxonomyConnectionPageInfo) & { __isUnion?: true }


/** An edge in a connection */
export interface ContentTypeToTaxonomyConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: Taxonomy
    __typename: 'ContentTypeToTaxonomyConnectionEdge'
}


/** Page Info on the &quot;ContentTypeToTaxonomyConnection&quot; */
export interface ContentTypeToTaxonomyConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'ContentTypeToTaxonomyConnectionPageInfo'
}


/** Allowed Content Types */
export type ContentTypeEnum = 'ATTACHMENT' | 'PAGE' | 'POST'


/** Connection between the ContentType type and the ContentNode type */
export interface ContentTypeToContentNodeConnection {
    /** Edges for the ContentTypeToContentNodeConnection connection */
    edges: ContentTypeToContentNodeConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: ContentNode[]
    /** Information about pagination in a connection. */
    pageInfo: ContentTypeToContentNodeConnectionPageInfo
    __typename: 'ContentTypeToContentNodeConnection'
}


/** An edge in a connection */
export interface ContentTypeToContentNodeConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: ContentNode
    __typename: 'ContentTypeToContentNodeConnectionEdge'
}


/** Page Info on the &quot;ContentTypeToContentNodeConnection&quot; */
export interface ContentTypeToContentNodeConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'ContentTypeToContentNodeConnectionPageInfo'
}


/** Page Info on the connected ContentNodeConnectionEdge */
export type ContentNodeConnectionPageInfo = (ContentTypeToContentNodeConnectionPageInfo | HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo | HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo | PostFormatToContentNodeConnectionPageInfo | TagToContentNodeConnectionPageInfo | UserToRevisionsConnectionPageInfo | CategoryToContentNodeConnectionPageInfo | RootQueryToContentNodeConnectionPageInfo | RootQueryToRevisionsConnectionPageInfo) & { __isUnion?: true }


/** Details for labels of the PostType */
export interface PostTypeLabelDetails {
    /** Default is ‘Add New’ for both hierarchical and non-hierarchical types. */
    addNew: (Scalars['String'] | null)
    /** Label for adding a new singular item. */
    addNewItem: (Scalars['String'] | null)
    /** Label to signify all items in a submenu link. */
    allItems: (Scalars['String'] | null)
    /** Label for archives in nav menus */
    archives: (Scalars['String'] | null)
    /** Label for the attributes meta box. */
    attributes: (Scalars['String'] | null)
    /** Label for editing a singular item. */
    editItem: (Scalars['String'] | null)
    /** Label for the Featured Image meta box title. */
    featuredImage: (Scalars['String'] | null)
    /** Label for the table views hidden heading. */
    filterItemsList: (Scalars['String'] | null)
    /** Label for the media frame button. */
    insertIntoItem: (Scalars['String'] | null)
    /** Label for the table hidden heading. */
    itemsList: (Scalars['String'] | null)
    /** Label for the table pagination hidden heading. */
    itemsListNavigation: (Scalars['String'] | null)
    /** Label for the menu name. */
    menuName: (Scalars['String'] | null)
    /** General name for the post type, usually plural. */
    name: (Scalars['String'] | null)
    /** Label for the new item page title. */
    newItem: (Scalars['String'] | null)
    /** Label used when no items are found. */
    notFound: (Scalars['String'] | null)
    /** Label used when no items are in the trash. */
    notFoundInTrash: (Scalars['String'] | null)
    /** Label used to prefix parents of hierarchical items. */
    parentItemColon: (Scalars['String'] | null)
    /** Label for removing the featured image. */
    removeFeaturedImage: (Scalars['String'] | null)
    /** Label for searching plural items. */
    searchItems: (Scalars['String'] | null)
    /** Label for setting the featured image. */
    setFeaturedImage: (Scalars['String'] | null)
    /** Name for one object of this post type. */
    singularName: (Scalars['String'] | null)
    /** Label for the media frame filter. */
    uploadedToThisItem: (Scalars['String'] | null)
    /** Label in the media frame for using a featured image. */
    useFeaturedImage: (Scalars['String'] | null)
    /** Label for viewing a singular item. */
    viewItem: (Scalars['String'] | null)
    /** Label for viewing post type archives. */
    viewItems: (Scalars['String'] | null)
    __typename: 'PostTypeLabelDetails'
}


/** Connection between the ContentNode type and the User type */
export interface ContentNodeToEditLockConnectionEdge {
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor: (Scalars['String'] | null)
    /** The timestamp for when the node was last edited */
    lockTimestamp: (Scalars['String'] | null)
    /** The node of the connection, without the edges */
    node: User
    __typename: 'ContentNodeToEditLockConnectionEdge'
}


/** Edge between a Node and a connected User */
export type UserConnectionEdge = (ContentNodeToEditLockConnectionEdge | NodeWithAuthorToUserConnectionEdge | ContentNodeToEditLastConnectionEdge | RootQueryToUserConnectionEdge) & { __isUnion?: true }


/** A User object */
export interface User {
    /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
    avatar: (Avatar | null)
    /** User metadata option name. Usually it will be &quot;wp_capabilities&quot;. */
    capKey: (Scalars['String'] | null)
    /** A list of capabilities (permissions) granted to the user */
    capabilities: ((Scalars['String'] | null)[] | null)
    /** Connection between the User type and the Comment type */
    comments: (UserToCommentConnection | null)
    /** Identifies the primary key from the database. */
    databaseId: Scalars['Int']
    /** Description of the user. */
    description: (Scalars['String'] | null)
    /** Email address of the user. This is equivalent to the WP_User-&gt;user_email property. */
    email: (Scalars['String'] | null)
    /** Connection between the User type and the EnqueuedScript type */
    enqueuedScripts: (UserToEnqueuedScriptConnection | null)
    /** Connection between the User type and the EnqueuedStylesheet type */
    enqueuedStylesheets: (UserToEnqueuedStylesheetConnection | null)
    /** A complete list of capabilities including capabilities inherited from a role. This is equivalent to the array keys of WP_User-&gt;allcaps. */
    extraCapabilities: ((Scalars['String'] | null)[] | null)
    /** First name of the user. This is equivalent to the WP_User-&gt;user_first_name property. */
    firstName: (Scalars['String'] | null)
    /** The globally unique identifier for the user object. */
    id: Scalars['ID']
    /** Whether the node is a Comment */
    isComment: Scalars['Boolean']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']
    /** Whether the node represents the front page. */
    isFrontPage: Scalars['Boolean']
    /** Whether  the node represents the blog page. */
    isPostsPage: Scalars['Boolean']
    /** Whether the object is restricted from the current viewer */
    isRestricted: (Scalars['Boolean'] | null)
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean']
    /** Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property. */
    lastName: (Scalars['String'] | null)
    /** The preferred language locale set for the user. Value derived from get_user_locale(). */
    locale: (Scalars['String'] | null)
    /** Connection between the User type and the mediaItem type */
    mediaItems: (UserToMediaItemConnection | null)
    /** Display name of the user. This is equivalent to the WP_User-&gt;display_name property. */
    name: (Scalars['String'] | null)
    /** The nicename for the user. This field is equivalent to WP_User-&gt;user_nicename */
    nicename: (Scalars['String'] | null)
    /** Nickname of the user. */
    nickname: (Scalars['String'] | null)
    /** Connection between the User type and the page type */
    pages: (UserToPageConnection | null)
    /** Connection between the User type and the post type */
    posts: (UserToPostConnection | null)
    /** The date the user registered or was created. The field follows a full ISO8601 date string format. */
    registeredDate: (Scalars['String'] | null)
    /** Connection between the User and Revisions authored by the user */
    revisions: (UserToRevisionsConnection | null)
    /** Connection between the User type and the UserRole type */
    roles: (UserToUserRoleConnection | null)
    /** Whether the Toolbar should be displayed when the user is viewing the site. */
    shouldShowAdminToolbar: (Scalars['Boolean'] | null)
    /** The slug for the user. This field is equivalent to WP_User-&gt;user_nicename */
    slug: (Scalars['String'] | null)
    /** The unique resource identifier path */
    uri: (Scalars['String'] | null)
    /** A website url that is associated with the user. */
    url: (Scalars['String'] | null)
    /**
     * @deprecated Deprecated in favor of the databaseId field
     * The Id of the user. Equivalent to WP_User-&gt;ID
     */
    userId: (Scalars['Int'] | null)
    /** Username for the user. This field is equivalent to WP_User-&gt;user_login. */
    username: (Scalars['String'] | null)
    __typename: 'User'
}


/** The author of a comment */
export type Commenter = (User | CommentAuthor) & { __isUnion?: true }


/** Avatars are profile images for users. WordPress by default uses the Gravatar service to host and fetch avatars from. */
export interface Avatar {
    /** URL for the default image or a default type. Accepts &#039;404&#039; (return a 404 instead of a default image), &#039;retro&#039; (8bit), &#039;monsterid&#039; (monster), &#039;wavatar&#039; (cartoon face), &#039;indenticon&#039; (the &#039;quilt&#039;), &#039;mystery&#039;, &#039;mm&#039;, or &#039;mysteryman&#039; (The Oyster Man), &#039;blank&#039; (transparent GIF), or &#039;gravatar_default&#039; (the Gravatar logo). */
    default: (Scalars['String'] | null)
    /** HTML attributes to insert in the IMG element. Is not sanitized. */
    extraAttr: (Scalars['String'] | null)
    /** Whether to always show the default image, never the Gravatar. */
    forceDefault: (Scalars['Boolean'] | null)
    /** Whether the avatar was successfully found. */
    foundAvatar: (Scalars['Boolean'] | null)
    /** Height of the avatar image. */
    height: (Scalars['Int'] | null)
    /** Whether the object is restricted from the current viewer */
    isRestricted: (Scalars['Boolean'] | null)
    /** What rating to display avatars up to. Accepts &#039;G&#039;, &#039;PG&#039;, &#039;R&#039;, &#039;X&#039;, and are judged in that order. */
    rating: (Scalars['String'] | null)
    /** Type of url scheme to use. Typically HTTP vs. HTTPS. */
    scheme: (Scalars['String'] | null)
    /** The size of the avatar in pixels. A value of 96 will match a 96px x 96px gravatar image. */
    size: (Scalars['Int'] | null)
    /** URL for the gravatar image source. */
    url: (Scalars['String'] | null)
    /** Width of the avatar image. */
    width: (Scalars['Int'] | null)
    __typename: 'Avatar'
}


/** What rating to display avatars up to. Accepts 'G', 'PG', 'R', 'X', and are judged in that order. Default is the value of the 'avatar_rating' option */
export type AvatarRatingEnum = 'G' | 'PG' | 'R' | 'X'


/** Options for ordering the connection */
export type CommentsConnectionOrderbyEnum = 'COMMENT_AGENT' | 'COMMENT_APPROVED' | 'COMMENT_AUTHOR' | 'COMMENT_AUTHOR_EMAIL' | 'COMMENT_AUTHOR_IP' | 'COMMENT_AUTHOR_URL' | 'COMMENT_CONTENT' | 'COMMENT_DATE' | 'COMMENT_DATE_GMT' | 'COMMENT_ID' | 'COMMENT_IN' | 'COMMENT_KARMA' | 'COMMENT_PARENT' | 'COMMENT_POST_ID' | 'COMMENT_TYPE' | 'USER_ID'


/** Connection between the User type and the Comment type */
export interface UserToCommentConnection {
    /** Edges for the UserToCommentConnection connection */
    edges: UserToCommentConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: Comment[]
    /** Information about pagination in a connection. */
    pageInfo: UserToCommentConnectionPageInfo
    __typename: 'UserToCommentConnection'
}


/** Connection to Comment Nodes */
export type CommentConnection = (UserToCommentConnection | CommentToCommentConnection | MediaItemToCommentConnection | PageToCommentConnection | PostToCommentConnection | RootQueryToCommentConnection) & { __isUnion?: true }


/** Edge between a Node and a connected Comment */
export type CommentConnectionEdge = (CommentToParentCommentConnectionEdge | CommentToCommentConnectionEdge | UserToCommentConnectionEdge | MediaItemToCommentConnectionEdge | PageToCommentConnectionEdge | PostToCommentConnectionEdge | RootQueryToCommentConnectionEdge) & { __isUnion?: true }


/** A Comment object */
export interface Comment {
    /** User agent used to post the comment. This field is equivalent to WP_Comment-&gt;comment_agent and the value matching the &quot;comment_agent&quot; column in SQL. */
    agent: (Scalars['String'] | null)
    /**
     * @deprecated Deprecated in favor of the `status` field
     * The approval status of the comment. This field is equivalent to WP_Comment-&gt;comment_approved and the value matching the &quot;comment_approved&quot; column in SQL.
     */
    approved: (Scalars['Boolean'] | null)
    /** The author of the comment */
    author: (CommentToCommenterConnectionEdge | null)
    /** IP address for the author. This field is equivalent to WP_Comment-&gt;comment_author_IP and the value matching the &quot;comment_author_IP&quot; column in SQL. */
    authorIp: (Scalars['String'] | null)
    /**
     * @deprecated Deprecated in favor of databaseId
     * ID for the comment, unique among comments.
     */
    commentId: (Scalars['Int'] | null)
    /** Connection between the Comment type and the ContentNode type */
    commentedOn: (CommentToContentNodeConnectionEdge | null)
    /** Content of the comment. This field is equivalent to WP_Comment-&gt;comment_content and the value matching the &quot;comment_content&quot; column in SQL. */
    content: (Scalars['String'] | null)
    /** The unique identifier stored in the database */
    databaseId: Scalars['Int']
    /** Date the comment was posted in local time. This field is equivalent to WP_Comment-&gt;date and the value matching the &quot;date&quot; column in SQL. */
    date: (Scalars['String'] | null)
    /** Date the comment was posted in GMT. This field is equivalent to WP_Comment-&gt;date_gmt and the value matching the &quot;date_gmt&quot; column in SQL. */
    dateGmt: (Scalars['String'] | null)
    /** The globally unique identifier for the comment object */
    id: Scalars['ID']
    /** Whether the node is a Comment */
    isComment: Scalars['Boolean']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']
    /** Whether the node represents the front page. */
    isFrontPage: Scalars['Boolean']
    /** Whether  the node represents the blog page. */
    isPostsPage: Scalars['Boolean']
    /** Whether the object is restricted from the current viewer */
    isRestricted: (Scalars['Boolean'] | null)
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean']
    /** Karma value for the comment. This field is equivalent to WP_Comment-&gt;comment_karma and the value matching the &quot;comment_karma&quot; column in SQL. */
    karma: (Scalars['Int'] | null)
    /** The permalink of the comment */
    link: (Scalars['String'] | null)
    /** Connection between the Comment type and the Comment type */
    parent: (CommentToParentCommentConnectionEdge | null)
    /** The database id of the parent comment node or null if it is the root comment */
    parentDatabaseId: (Scalars['Int'] | null)
    /** The globally unique identifier of the parent comment node. */
    parentId: (Scalars['ID'] | null)
    /** Connection between the Comment type and the Comment type */
    replies: (CommentToCommentConnection | null)
    /** The approval status of the comment. This field is equivalent to WP_Comment-&gt;comment_approved and the value matching the &quot;comment_approved&quot; column in SQL. */
    status: (CommentStatusEnum | null)
    /** Type of comment. This field is equivalent to WP_Comment-&gt;comment_type and the value matching the &quot;comment_type&quot; column in SQL. */
    type: (Scalars['String'] | null)
    /** The unique resource identifier path */
    uri: (Scalars['String'] | null)
    __typename: 'Comment'
}


/** Connection between the Comment type and the Commenter type */
export interface CommentToCommenterConnectionEdge {
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor: (Scalars['String'] | null)
    /** The node of the connection, without the edges */
    node: Commenter
    __typename: 'CommentToCommenterConnectionEdge'
}


/** Edge between a Node and a connected Commenter */
export type CommenterConnectionEdge = (CommentToCommenterConnectionEdge) & { __isUnion?: true }


/** Connection between the Comment type and the ContentNode type */
export interface CommentToContentNodeConnectionEdge {
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor: (Scalars['String'] | null)
    /** The node of the connection, without the edges */
    node: ContentNode
    __typename: 'CommentToContentNodeConnectionEdge'
}


/** The format of post field data. */
export type PostObjectFieldFormatEnum = 'RAW' | 'RENDERED'


/** Connection between the Comment type and the Comment type */
export interface CommentToParentCommentConnectionEdge {
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor: (Scalars['String'] | null)
    /** The node of the connection, without the edges */
    node: Comment
    __typename: 'CommentToParentCommentConnectionEdge'
}


/** Connection between the Comment type and the Comment type */
export interface CommentToCommentConnection {
    /** Edges for the CommentToCommentConnection connection */
    edges: CommentToCommentConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: Comment[]
    /** Information about pagination in a connection. */
    pageInfo: CommentToCommentConnectionPageInfo
    __typename: 'CommentToCommentConnection'
}


/** An edge in a connection */
export interface CommentToCommentConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: Comment
    __typename: 'CommentToCommentConnectionEdge'
}


/** Page Info on the &quot;CommentToCommentConnection&quot; */
export interface CommentToCommentConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'CommentToCommentConnectionPageInfo'
}


/** Page Info on the connected CommentConnectionEdge */
export type CommentConnectionPageInfo = (CommentToCommentConnectionPageInfo | UserToCommentConnectionPageInfo | MediaItemToCommentConnectionPageInfo | PageToCommentConnectionPageInfo | PostToCommentConnectionPageInfo | RootQueryToCommentConnectionPageInfo) & { __isUnion?: true }


/** The status of the comment object. */
export type CommentStatusEnum = 'APPROVE' | 'HOLD' | 'SPAM' | 'TRASH'


/** An edge in a connection */
export interface UserToCommentConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: Comment
    __typename: 'UserToCommentConnectionEdge'
}


/** Page Info on the &quot;UserToCommentConnection&quot; */
export interface UserToCommentConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'UserToCommentConnectionPageInfo'
}


/** Connection between the User type and the EnqueuedScript type */
export interface UserToEnqueuedScriptConnection {
    /** Edges for the UserToEnqueuedScriptConnection connection */
    edges: UserToEnqueuedScriptConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: EnqueuedScript[]
    /** Information about pagination in a connection. */
    pageInfo: UserToEnqueuedScriptConnectionPageInfo
    __typename: 'UserToEnqueuedScriptConnection'
}


/** An edge in a connection */
export interface UserToEnqueuedScriptConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: EnqueuedScript
    __typename: 'UserToEnqueuedScriptConnectionEdge'
}


/** Page Info on the &quot;UserToEnqueuedScriptConnection&quot; */
export interface UserToEnqueuedScriptConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'UserToEnqueuedScriptConnectionPageInfo'
}


/** Connection between the User type and the EnqueuedStylesheet type */
export interface UserToEnqueuedStylesheetConnection {
    /** Edges for the UserToEnqueuedStylesheetConnection connection */
    edges: UserToEnqueuedStylesheetConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: EnqueuedStylesheet[]
    /** Information about pagination in a connection. */
    pageInfo: UserToEnqueuedStylesheetConnectionPageInfo
    __typename: 'UserToEnqueuedStylesheetConnection'
}


/** An edge in a connection */
export interface UserToEnqueuedStylesheetConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: EnqueuedStylesheet
    __typename: 'UserToEnqueuedStylesheetConnectionEdge'
}


/** Page Info on the &quot;UserToEnqueuedStylesheetConnection&quot; */
export interface UserToEnqueuedStylesheetConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'UserToEnqueuedStylesheetConnectionPageInfo'
}


/** Connection between the User type and the mediaItem type */
export interface UserToMediaItemConnection {
    /** Edges for the UserToMediaItemConnection connection */
    edges: UserToMediaItemConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: MediaItem[]
    /** Information about pagination in a connection. */
    pageInfo: UserToMediaItemConnectionPageInfo
    __typename: 'UserToMediaItemConnection'
}


/** Connection to mediaItem Nodes */
export type MediaItemConnection = (UserToMediaItemConnection | RootQueryToMediaItemConnection) & { __isUnion?: true }


/** Edge between a Node and a connected mediaItem */
export type MediaItemConnectionEdge = (UserToMediaItemConnectionEdge | NodeWithFeaturedImageToMediaItemConnectionEdge | RootQueryToMediaItemConnectionEdge | AcfMediaItemConnectionEdge) & { __isUnion?: true }


/** The mediaItem type */
export interface MediaItem {
    /** Alternative text to display when resource is not displayed */
    altText: (Scalars['String'] | null)
    /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
    ancestors: (HierarchicalContentNodeToContentNodeAncestorsConnection | null)
    /** Connection between the NodeWithAuthor type and the User type */
    author: (NodeWithAuthorToUserConnectionEdge | null)
    /** The database identifier of the author of the node */
    authorDatabaseId: (Scalars['Int'] | null)
    /** The globally unique identifier of the author of the node */
    authorId: (Scalars['ID'] | null)
    /** The caption for the resource */
    caption: (Scalars['String'] | null)
    /** Connection between the HierarchicalContentNode type and the ContentNode type */
    children: (HierarchicalContentNodeToContentNodeChildrenConnection | null)
    /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
    commentCount: (Scalars['Int'] | null)
    /** Whether the comments are open or closed for this particular post. */
    commentStatus: (Scalars['String'] | null)
    /** Connection between the MediaItem type and the Comment type */
    comments: (MediaItemToCommentConnection | null)
    /** Connection between the ContentNode type and the ContentType type */
    contentType: (ContentNodeToContentTypeConnectionEdge | null)
    /** The name of the Content Type the node belongs to */
    contentTypeName: Scalars['String']
    /** The unique identifier stored in the database */
    databaseId: Scalars['Int']
    /** Post publishing date. */
    date: (Scalars['String'] | null)
    /** The publishing date set in GMT. */
    dateGmt: (Scalars['String'] | null)
    /** Description of the image (stored as post_content) */
    description: (Scalars['String'] | null)
    /** The desired slug of the post */
    desiredSlug: (Scalars['String'] | null)
    /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
    editingLockedBy: (ContentNodeToEditLockConnectionEdge | null)
    /** The RSS enclosure for the object */
    enclosure: (Scalars['String'] | null)
    /** Connection between the ContentNode type and the EnqueuedScript type */
    enqueuedScripts: (ContentNodeToEnqueuedScriptConnection | null)
    /** Connection between the ContentNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets: (ContentNodeToEnqueuedStylesheetConnection | null)
    /** The filesize in bytes of the resource */
    fileSize: (Scalars['Int'] | null)
    /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
    guid: (Scalars['String'] | null)
    /** Whether the attachment object is password protected. */
    hasPassword: (Scalars['Boolean'] | null)
    /** The globally unique identifier of the attachment object. */
    id: Scalars['ID']
    /** Whether the node is a Comment */
    isComment: Scalars['Boolean']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']
    /** Whether the node represents the front page. */
    isFrontPage: Scalars['Boolean']
    /** Whether  the node represents the blog page. */
    isPostsPage: Scalars['Boolean']
    /** Whether the object is a node in the preview state */
    isPreview: (Scalars['Boolean'] | null)
    /** Whether the object is restricted from the current viewer */
    isRestricted: (Scalars['Boolean'] | null)
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean']
    /** The user that most recently edited the node */
    lastEditedBy: (ContentNodeToEditLastConnectionEdge | null)
    /** The permalink of the post */
    link: (Scalars['String'] | null)
    /** Details about the mediaItem */
    mediaDetails: (MediaDetails | null)
    /**
     * @deprecated Deprecated in favor of the databaseId field
     * The id field matches the WP_Post-&gt;ID field.
     */
    mediaItemId: Scalars['Int']
    /** Url of the mediaItem */
    mediaItemUrl: (Scalars['String'] | null)
    /** Type of resource */
    mediaType: (Scalars['String'] | null)
    /** The mime type of the mediaItem */
    mimeType: (Scalars['String'] | null)
    /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
    modified: (Scalars['String'] | null)
    /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
    modifiedGmt: (Scalars['String'] | null)
    /** The parent of the node. The parent object can be of various types */
    parent: (HierarchicalContentNodeToParentContentNodeConnectionEdge | null)
    /** Database id of the parent node */
    parentDatabaseId: (Scalars['Int'] | null)
    /** The globally unique identifier of the parent node. */
    parentId: (Scalars['ID'] | null)
    /** The password for the attachment object. */
    password: (Scalars['String'] | null)
    /** The database id of the preview node */
    previewRevisionDatabaseId: (Scalars['Int'] | null)
    /** Whether the object is a node in the preview state */
    previewRevisionId: (Scalars['ID'] | null)
    /** The sizes attribute value for an image. */
    sizes: (Scalars['String'] | null)
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug: (Scalars['String'] | null)
    /** Url of the mediaItem */
    sourceUrl: (Scalars['String'] | null)
    /** The srcset attribute specifies the URL of the image to use in different situations. It is a comma separated string of urls and their widths. */
    srcSet: (Scalars['String'] | null)
    /** The current status of the object */
    status: (Scalars['String'] | null)
    /** The template assigned to a node of content */
    template: (ContentTemplate | null)
    /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
    title: (Scalars['String'] | null)
    /** The unique resource identifier path */
    uri: (Scalars['String'] | null)
    __typename: 'MediaItem'
}


/** A node that can have a template associated with it */
export type NodeWithTemplate = (MediaItem | Page | Post) & { __isUnion?: true }


/** The template assigned to a node of content */
export type ContentTemplate = (DefaultTemplate) & { __isUnion?: true }


/** A node that NodeWith a title */
export type NodeWithTitle = (MediaItem | Page | Post) & { __isUnion?: true }


/** A node that can have an author assigned to it */
export type NodeWithAuthor = (MediaItem | Page | Post) & { __isUnion?: true }


/** Connection between the NodeWithAuthor type and the User type */
export interface NodeWithAuthorToUserConnectionEdge {
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor: (Scalars['String'] | null)
    /** The node of the connection, without the edges */
    node: User
    __typename: 'NodeWithAuthorToUserConnectionEdge'
}


/** A node that can have comments associated with it */
export type NodeWithComments = (MediaItem | Page | Post) & { __isUnion?: true }


/** Content node with hierarchical (parent/child) relationships */
export type HierarchicalContentNode = (MediaItem | Page) & { __isUnion?: true }


/** Connection between the HierarchicalContentNode type and the ContentNode type */
export interface HierarchicalContentNodeToContentNodeAncestorsConnection {
    /** Edges for the HierarchicalContentNodeToContentNodeAncestorsConnection connection */
    edges: HierarchicalContentNodeToContentNodeAncestorsConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: ContentNode[]
    /** Information about pagination in a connection. */
    pageInfo: HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo
    __typename: 'HierarchicalContentNodeToContentNodeAncestorsConnection'
}


/** An edge in a connection */
export interface HierarchicalContentNodeToContentNodeAncestorsConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: ContentNode
    __typename: 'HierarchicalContentNodeToContentNodeAncestorsConnectionEdge'
}


/** Page Info on the &quot;HierarchicalContentNodeToContentNodeAncestorsConnection&quot; */
export interface HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo'
}


/** Connection between the HierarchicalContentNode type and the ContentNode type */
export interface HierarchicalContentNodeToContentNodeChildrenConnection {
    /** Edges for the HierarchicalContentNodeToContentNodeChildrenConnection connection */
    edges: HierarchicalContentNodeToContentNodeChildrenConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: ContentNode[]
    /** Information about pagination in a connection. */
    pageInfo: HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo
    __typename: 'HierarchicalContentNodeToContentNodeChildrenConnection'
}


/** An edge in a connection */
export interface HierarchicalContentNodeToContentNodeChildrenConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: ContentNode
    __typename: 'HierarchicalContentNodeToContentNodeChildrenConnectionEdge'
}


/** Page Info on the &quot;HierarchicalContentNodeToContentNodeChildrenConnection&quot; */
export interface HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo'
}


/** Connection between the ContentNode type and the EnqueuedScript type */
export interface ContentNodeToEnqueuedScriptConnection {
    /** Edges for the ContentNodeToEnqueuedScriptConnection connection */
    edges: ContentNodeToEnqueuedScriptConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: EnqueuedScript[]
    /** Information about pagination in a connection. */
    pageInfo: ContentNodeToEnqueuedScriptConnectionPageInfo
    __typename: 'ContentNodeToEnqueuedScriptConnection'
}


/** An edge in a connection */
export interface ContentNodeToEnqueuedScriptConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: EnqueuedScript
    __typename: 'ContentNodeToEnqueuedScriptConnectionEdge'
}


/** Page Info on the &quot;ContentNodeToEnqueuedScriptConnection&quot; */
export interface ContentNodeToEnqueuedScriptConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'ContentNodeToEnqueuedScriptConnectionPageInfo'
}


/** Connection between the ContentNode type and the EnqueuedStylesheet type */
export interface ContentNodeToEnqueuedStylesheetConnection {
    /** Edges for the ContentNodeToEnqueuedStylesheetConnection connection */
    edges: ContentNodeToEnqueuedStylesheetConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: EnqueuedStylesheet[]
    /** Information about pagination in a connection. */
    pageInfo: ContentNodeToEnqueuedStylesheetConnectionPageInfo
    __typename: 'ContentNodeToEnqueuedStylesheetConnection'
}


/** An edge in a connection */
export interface ContentNodeToEnqueuedStylesheetConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: EnqueuedStylesheet
    __typename: 'ContentNodeToEnqueuedStylesheetConnectionEdge'
}


/** Page Info on the &quot;ContentNodeToEnqueuedStylesheetConnection&quot; */
export interface ContentNodeToEnqueuedStylesheetConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'ContentNodeToEnqueuedStylesheetConnectionPageInfo'
}


/** Connection between the ContentNode type and the User type */
export interface ContentNodeToEditLastConnectionEdge {
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor: (Scalars['String'] | null)
    /** The node of the connection, without the edges */
    node: User
    __typename: 'ContentNodeToEditLastConnectionEdge'
}


/** Connection between the HierarchicalContentNode type and the ContentNode type */
export interface HierarchicalContentNodeToParentContentNodeConnectionEdge {
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor: (Scalars['String'] | null)
    /** The node of the connection, without the edges */
    node: ContentNode
    __typename: 'HierarchicalContentNodeToParentContentNodeConnectionEdge'
}


/** Connection between the MediaItem type and the Comment type */
export interface MediaItemToCommentConnection {
    /** Edges for the MediaItemToCommentConnection connection */
    edges: MediaItemToCommentConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: Comment[]
    /** Information about pagination in a connection. */
    pageInfo: MediaItemToCommentConnectionPageInfo
    __typename: 'MediaItemToCommentConnection'
}


/** An edge in a connection */
export interface MediaItemToCommentConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: Comment
    __typename: 'MediaItemToCommentConnectionEdge'
}


/** Page Info on the &quot;MediaItemToCommentConnection&quot; */
export interface MediaItemToCommentConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'MediaItemToCommentConnectionPageInfo'
}


/** The size of the media item object. */
export type MediaItemSizeEnum = 'LARGE' | 'MEDIUM' | 'MEDIUM_LARGE' | 'THUMBNAIL' | 'UNCODE_WOOCOMMERCE_NAV_THUMBNAIL_CROP' | 'UNCODE_WOOCOMMERCE_NAV_THUMBNAIL_REGULAR' | 'WOOCOMMERCE_GALLERY_THUMBNAIL' | 'WOOCOMMERCE_SINGLE' | 'WOOCOMMERCE_THUMBNAIL' | '_1536X1536' | '_2048X2048'


/** File details for a Media Item */
export interface MediaDetails {
    /** The filename of the mediaItem */
    file: (Scalars['String'] | null)
    /** The height of the mediaItem */
    height: (Scalars['Int'] | null)
    /** Meta information associated with the mediaItem */
    meta: (MediaItemMeta | null)
    /** The available sizes of the mediaItem */
    sizes: ((MediaSize | null)[] | null)
    /** The width of the mediaItem */
    width: (Scalars['Int'] | null)
    __typename: 'MediaDetails'
}


/** Meta connected to a MediaItem */
export interface MediaItemMeta {
    /** Aperture measurement of the media item. */
    aperture: (Scalars['Float'] | null)
    /** Information about the camera used to create the media item. */
    camera: (Scalars['String'] | null)
    /** The text string description associated with the media item. */
    caption: (Scalars['String'] | null)
    /** Copyright information associated with the media item. */
    copyright: (Scalars['String'] | null)
    /** The date/time when the media was created. */
    createdTimestamp: (Scalars['Int'] | null)
    /** The original creator of the media item. */
    credit: (Scalars['String'] | null)
    /** The focal length value of the media item. */
    focalLength: (Scalars['Float'] | null)
    /** The ISO (International Organization for Standardization) value of the media item. */
    iso: (Scalars['Int'] | null)
    /** List of keywords used to describe or identfy the media item. */
    keywords: ((Scalars['String'] | null)[] | null)
    /** The vertical or horizontal aspect of the media item. */
    orientation: (Scalars['String'] | null)
    /** The shutter speed information of the media item. */
    shutterSpeed: (Scalars['Float'] | null)
    /** A useful title for the media item. */
    title: (Scalars['String'] | null)
    __typename: 'MediaItemMeta'
}


/** Details of an available size for a media item */
export interface MediaSize {
    /** The filename of the referenced size */
    file: (Scalars['String'] | null)
    /** The filesize of the resource */
    fileSize: (Scalars['Int'] | null)
    /** The height of the referenced size */
    height: (Scalars['String'] | null)
    /** The mime type of the referenced size */
    mimeType: (Scalars['String'] | null)
    /** The referenced size name */
    name: (Scalars['String'] | null)
    /** The url of the referenced size */
    sourceUrl: (Scalars['String'] | null)
    /** The width of the referenced size */
    width: (Scalars['String'] | null)
    __typename: 'MediaSize'
}


/** Page Info on the connected MediaItemConnectionEdge */
export type MediaItemConnectionPageInfo = (UserToMediaItemConnectionPageInfo | RootQueryToMediaItemConnectionPageInfo) & { __isUnion?: true }


/** An edge in a connection */
export interface UserToMediaItemConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: MediaItem
    __typename: 'UserToMediaItemConnectionEdge'
}


/** Page Info on the &quot;UserToMediaItemConnection&quot; */
export interface UserToMediaItemConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'UserToMediaItemConnectionPageInfo'
}


/** Connection between the User type and the page type */
export interface UserToPageConnection {
    /** Edges for the UserToPageConnection connection */
    edges: UserToPageConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: Page[]
    /** Information about pagination in a connection. */
    pageInfo: UserToPageConnectionPageInfo
    __typename: 'UserToPageConnection'
}


/** Connection to page Nodes */
export type PageConnection = (UserToPageConnection | PageToRevisionConnection | RootQueryToPageConnection) & { __isUnion?: true }


/** Edge between a Node and a connected page */
export type PageConnectionEdge = (PageToPreviewConnectionEdge | PageToRevisionConnectionEdge | UserToPageConnectionEdge | RootQueryToPageConnectionEdge) & { __isUnion?: true }


/** The page type */
export interface Page {
    /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
    ancestors: (HierarchicalContentNodeToContentNodeAncestorsConnection | null)
    /** Connection between the NodeWithAuthor type and the User type */
    author: (NodeWithAuthorToUserConnectionEdge | null)
    /** The database identifier of the author of the node */
    authorDatabaseId: (Scalars['Int'] | null)
    /** The globally unique identifier of the author of the node */
    authorId: (Scalars['ID'] | null)
    /** Connection between the HierarchicalContentNode type and the ContentNode type */
    children: (HierarchicalContentNodeToContentNodeChildrenConnection | null)
    /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
    commentCount: (Scalars['Int'] | null)
    /** Whether the comments are open or closed for this particular post. */
    commentStatus: (Scalars['String'] | null)
    /** Connection between the Page type and the Comment type */
    comments: (PageToCommentConnection | null)
    /** The content of the post. */
    content: (Scalars['String'] | null)
    /** Connection between the ContentNode type and the ContentType type */
    contentType: (ContentNodeToContentTypeConnectionEdge | null)
    /** The name of the Content Type the node belongs to */
    contentTypeName: Scalars['String']
    /** The unique identifier stored in the database */
    databaseId: Scalars['Int']
    /** Post publishing date. */
    date: (Scalars['String'] | null)
    /** The publishing date set in GMT. */
    dateGmt: (Scalars['String'] | null)
    /** The desired slug of the post */
    desiredSlug: (Scalars['String'] | null)
    /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
    editingLockedBy: (ContentNodeToEditLockConnectionEdge | null)
    /** The RSS enclosure for the object */
    enclosure: (Scalars['String'] | null)
    /** Connection between the ContentNode type and the EnqueuedScript type */
    enqueuedScripts: (ContentNodeToEnqueuedScriptConnection | null)
    /** Connection between the ContentNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets: (ContentNodeToEnqueuedStylesheetConnection | null)
    /** The excerpt of the post. */
    excerpt: (Scalars['String'] | null)
    /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
    featuredImage: (NodeWithFeaturedImageToMediaItemConnectionEdge | null)
    /** The database identifier for the featured image node assigned to the content node */
    featuredImageDatabaseId: (Scalars['Int'] | null)
    /** Globally unique ID of the featured image assigned to the node */
    featuredImageId: (Scalars['ID'] | null)
    /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
    guid: (Scalars['String'] | null)
    /** Whether the page object is password protected. */
    hasPassword: (Scalars['Boolean'] | null)
    /** The globally unique identifier of the page object. */
    id: Scalars['ID']
    /** Whether the node is a Comment */
    isComment: Scalars['Boolean']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']
    /** Whether this page is set to the static front page. */
    isFrontPage: Scalars['Boolean']
    /** Whether this page is set to the blog posts page. */
    isPostsPage: Scalars['Boolean']
    /** Whether the object is a node in the preview state */
    isPreview: (Scalars['Boolean'] | null)
    /** Whether this page is set to the privacy page. */
    isPrivacyPage: Scalars['Boolean']
    /** Whether the object is restricted from the current viewer */
    isRestricted: (Scalars['Boolean'] | null)
    /** True if the node is a revision of another node */
    isRevision: (Scalars['Boolean'] | null)
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean']
    /** The user that most recently edited the node */
    lastEditedBy: (ContentNodeToEditLastConnectionEdge | null)
    /** The permalink of the post */
    link: (Scalars['String'] | null)
    /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
    menuOrder: (Scalars['Int'] | null)
    /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
    modified: (Scalars['String'] | null)
    /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
    modifiedGmt: (Scalars['String'] | null)
    /**
     * @deprecated Deprecated in favor of the databaseId field
     * The id field matches the WP_Post-&gt;ID field.
     */
    pageId: Scalars['Int']
    /** The parent of the node. The parent object can be of various types */
    parent: (HierarchicalContentNodeToParentContentNodeConnectionEdge | null)
    /** Database id of the parent node */
    parentDatabaseId: (Scalars['Int'] | null)
    /** The globally unique identifier of the parent node. */
    parentId: (Scalars['ID'] | null)
    /** The password for the page object. */
    password: (Scalars['String'] | null)
    /** Connection between the Page type and the page type */
    preview: (PageToPreviewConnectionEdge | null)
    /** The database id of the preview node */
    previewRevisionDatabaseId: (Scalars['Int'] | null)
    /** Whether the object is a node in the preview state */
    previewRevisionId: (Scalars['ID'] | null)
    /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
    revisionOf: (NodeWithRevisionsToContentNodeConnectionEdge | null)
    /** Connection between the Page type and the page type */
    revisions: (PageToRevisionConnection | null)
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug: (Scalars['String'] | null)
    /** The current status of the object */
    status: (Scalars['String'] | null)
    /** The template assigned to a node of content */
    template: (ContentTemplate | null)
    /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
    title: (Scalars['String'] | null)
    /** The unique resource identifier path */
    uri: (Scalars['String'] | null)
    __typename: 'Page'
}


/** Nodes that can be seen in a preview (unpublished) state. */
export type Previewable = (Page | Post) & { __isUnion?: true }


/** A node that supports the content editor */
export type NodeWithContentEditor = (Page | Post) & { __isUnion?: true }


/** A node that can have a featured image set */
export type NodeWithFeaturedImage = (Page | Post) & { __isUnion?: true }


/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
export interface NodeWithFeaturedImageToMediaItemConnectionEdge {
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor: (Scalars['String'] | null)
    /** The node of the connection, without the edges */
    node: MediaItem
    __typename: 'NodeWithFeaturedImageToMediaItemConnectionEdge'
}


/** A node that can have an excerpt */
export type NodeWithExcerpt = (Page | Post) & { __isUnion?: true }


/** A node that can have revisions */
export type NodeWithRevisions = (Page | Post) & { __isUnion?: true }


/** Connection between the NodeWithRevisions type and the ContentNode type */
export interface NodeWithRevisionsToContentNodeConnectionEdge {
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor: (Scalars['String'] | null)
    /** The node of the connection, without the edges */
    node: ContentNode
    __typename: 'NodeWithRevisionsToContentNodeConnectionEdge'
}


/** A node that can have page attributes */
export type NodeWithPageAttributes = (Page) & { __isUnion?: true }


/** Connection between the Page type and the Comment type */
export interface PageToCommentConnection {
    /** Edges for the PageToCommentConnection connection */
    edges: PageToCommentConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: Comment[]
    /** Information about pagination in a connection. */
    pageInfo: PageToCommentConnectionPageInfo
    __typename: 'PageToCommentConnection'
}


/** An edge in a connection */
export interface PageToCommentConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: Comment
    __typename: 'PageToCommentConnectionEdge'
}


/** Page Info on the &quot;PageToCommentConnection&quot; */
export interface PageToCommentConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'PageToCommentConnectionPageInfo'
}


/** Connection between the Page type and the page type */
export interface PageToPreviewConnectionEdge {
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor: (Scalars['String'] | null)
    /** The node of the connection, without the edges */
    node: Page
    __typename: 'PageToPreviewConnectionEdge'
}


/** Connection between the Page type and the page type */
export interface PageToRevisionConnection {
    /** Edges for the PageToRevisionConnection connection */
    edges: PageToRevisionConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: Page[]
    /** Information about pagination in a connection. */
    pageInfo: PageToRevisionConnectionPageInfo
    __typename: 'PageToRevisionConnection'
}


/** An edge in a connection */
export interface PageToRevisionConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: Page
    __typename: 'PageToRevisionConnectionEdge'
}


/** Page Info on the &quot;PageToRevisionConnection&quot; */
export interface PageToRevisionConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'PageToRevisionConnectionPageInfo'
}


/** Page Info on the connected PageConnectionEdge */
export type PageConnectionPageInfo = (PageToRevisionConnectionPageInfo | UserToPageConnectionPageInfo | RootQueryToPageConnectionPageInfo) & { __isUnion?: true }


/** An edge in a connection */
export interface UserToPageConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: Page
    __typename: 'UserToPageConnectionEdge'
}


/** Page Info on the &quot;UserToPageConnection&quot; */
export interface UserToPageConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'UserToPageConnectionPageInfo'
}


/** Connection between the User type and the post type */
export interface UserToPostConnection {
    /** Edges for the UserToPostConnection connection */
    edges: UserToPostConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: Post[]
    /** Information about pagination in a connection. */
    pageInfo: UserToPostConnectionPageInfo
    __typename: 'UserToPostConnection'
}


/** Connection to post Nodes */
export type PostConnection = (UserToPostConnection | PostToPostConnection | PostFormatToPostConnection | PostToRevisionConnection | TagToPostConnection | CategoryToPostConnection | RootQueryToPostConnection) & { __isUnion?: true }


/** Edge between a Node and a connected post */
export type PostConnectionEdge = (PostToPostConnectionEdge | PostToParentConnectionEdge | PostFormatToPostConnectionEdge | PostToPreviewConnectionEdge | PostToRevisionConnectionEdge | TagToPostConnectionEdge | UserToPostConnectionEdge | CategoryToPostConnectionEdge | RootQueryToPostConnectionEdge) & { __isUnion?: true }


/** The post type */
export interface Post {
    /**
     * @deprecated This content type is not hierarchical and typically will not have ancestors
     * The ancestors of the content node.
     */
    ancestors: (PostToPostConnection | null)
    /** Connection between the NodeWithAuthor type and the User type */
    author: (NodeWithAuthorToUserConnectionEdge | null)
    /** The database identifier of the author of the node */
    authorDatabaseId: (Scalars['Int'] | null)
    /** The globally unique identifier of the author of the node */
    authorId: (Scalars['ID'] | null)
    /** Connection between the Post type and the category type */
    categories: (PostToCategoryConnection | null)
    /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
    commentCount: (Scalars['Int'] | null)
    /** Whether the comments are open or closed for this particular post. */
    commentStatus: (Scalars['String'] | null)
    /** Connection between the Post type and the Comment type */
    comments: (PostToCommentConnection | null)
    /** The content of the post. */
    content: (Scalars['String'] | null)
    /** Connection between the ContentNode type and the ContentType type */
    contentType: (ContentNodeToContentTypeConnectionEdge | null)
    /** The name of the Content Type the node belongs to */
    contentTypeName: Scalars['String']
    /** The unique identifier stored in the database */
    databaseId: Scalars['Int']
    /** Post publishing date. */
    date: (Scalars['String'] | null)
    /** The publishing date set in GMT. */
    dateGmt: (Scalars['String'] | null)
    /** The desired slug of the post */
    desiredSlug: (Scalars['String'] | null)
    /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
    editingLockedBy: (ContentNodeToEditLockConnectionEdge | null)
    /** The RSS enclosure for the object */
    enclosure: (Scalars['String'] | null)
    /** Connection between the ContentNode type and the EnqueuedScript type */
    enqueuedScripts: (ContentNodeToEnqueuedScriptConnection | null)
    /** Connection between the ContentNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets: (ContentNodeToEnqueuedStylesheetConnection | null)
    /** The excerpt of the post. */
    excerpt: (Scalars['String'] | null)
    /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
    featuredImage: (NodeWithFeaturedImageToMediaItemConnectionEdge | null)
    /** The database identifier for the featured image node assigned to the content node */
    featuredImageDatabaseId: (Scalars['Int'] | null)
    /** Globally unique ID of the featured image assigned to the node */
    featuredImageId: (Scalars['ID'] | null)
    /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
    guid: (Scalars['String'] | null)
    /** Whether the post object is password protected. */
    hasPassword: (Scalars['Boolean'] | null)
    /** The globally unique identifier of the post object. */
    id: Scalars['ID']
    /** Whether the node is a Comment */
    isComment: Scalars['Boolean']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']
    /** Whether the node represents the front page. */
    isFrontPage: Scalars['Boolean']
    /** Whether  the node represents the blog page. */
    isPostsPage: Scalars['Boolean']
    /** Whether the object is a node in the preview state */
    isPreview: (Scalars['Boolean'] | null)
    /** Whether the object is restricted from the current viewer */
    isRestricted: (Scalars['Boolean'] | null)
    /** True if the node is a revision of another node */
    isRevision: (Scalars['Boolean'] | null)
    /** Whether this page is sticky */
    isSticky: Scalars['Boolean']
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean']
    /** The user that most recently edited the node */
    lastEditedBy: (ContentNodeToEditLastConnectionEdge | null)
    /** The permalink of the post */
    link: (Scalars['String'] | null)
    /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
    modified: (Scalars['String'] | null)
    /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
    modifiedGmt: (Scalars['String'] | null)
    /**
     * @deprecated This content type is not hierarchical and typically will not have a parent
     * The parent of the content node.
     */
    parent: (PostToParentConnectionEdge | null)
    /** The password for the post object. */
    password: (Scalars['String'] | null)
    /** Whether the pings are open or closed for this particular post. */
    pingStatus: (Scalars['String'] | null)
    /** URLs that have been pinged. */
    pinged: ((Scalars['String'] | null)[] | null)
    /** Connection between the Post type and the postFormat type */
    postFormats: (PostToPostFormatConnection | null)
    /**
     * @deprecated Deprecated in favor of the databaseId field
     * The id field matches the WP_Post-&gt;ID field.
     */
    postId: Scalars['Int']
    /** Connection between the Post type and the post type */
    preview: (PostToPreviewConnectionEdge | null)
    /** The database id of the preview node */
    previewRevisionDatabaseId: (Scalars['Int'] | null)
    /** Whether the object is a node in the preview state */
    previewRevisionId: (Scalars['ID'] | null)
    /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
    revisionOf: (NodeWithRevisionsToContentNodeConnectionEdge | null)
    /** Connection between the Post type and the post type */
    revisions: (PostToRevisionConnection | null)
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug: (Scalars['String'] | null)
    /** The current status of the object */
    status: (Scalars['String'] | null)
    /** Connection between the Post type and the tag type */
    tags: (PostToTagConnection | null)
    /** The template assigned to the node */
    template: (ContentTemplate | null)
    /** Connection between the Post type and the TermNode type */
    terms: (PostToTermNodeConnection | null)
    /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
    title: (Scalars['String'] | null)
    /** URLs queued to be pinged. */
    toPing: ((Scalars['String'] | null)[] | null)
    /** The unique resource identifier path */
    uri: (Scalars['String'] | null)
    __typename: 'Post'
}


/** A node that can have trackbacks and pingbacks */
export type NodeWithTrackbacks = (Post) & { __isUnion?: true }


/** Connection between the Post type and the post type */
export interface PostToPostConnection {
    /** Edges for the PostToPostConnection connection */
    edges: PostToPostConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: Post[]
    /** Information about pagination in a connection. */
    pageInfo: PostToPostConnectionPageInfo
    __typename: 'PostToPostConnection'
}


/** An edge in a connection */
export interface PostToPostConnectionEdge {
    /**
     * @deprecated This content type is not hierarchical and typically will not have ancestors
     * A cursor for use in pagination
     */
    cursor: (Scalars['String'] | null)
    /**
     * @deprecated This content type is not hierarchical and typically will not have ancestors
     * The item at the end of the edge
     */
    node: Post
    __typename: 'PostToPostConnectionEdge'
}


/** Page Info on the &quot;PostToPostConnection&quot; */
export interface PostToPostConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'PostToPostConnectionPageInfo'
}


/** Page Info on the connected PostConnectionEdge */
export type PostConnectionPageInfo = (PostToPostConnectionPageInfo | PostFormatToPostConnectionPageInfo | PostToRevisionConnectionPageInfo | TagToPostConnectionPageInfo | UserToPostConnectionPageInfo | CategoryToPostConnectionPageInfo | RootQueryToPostConnectionPageInfo) & { __isUnion?: true }


/** Connection between the Post type and the category type */
export interface PostToCategoryConnection {
    /** Edges for the PostToCategoryConnection connection */
    edges: PostToCategoryConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: Category[]
    /** Information about pagination in a connection. */
    pageInfo: PostToCategoryConnectionPageInfo
    __typename: 'PostToCategoryConnection'
}


/** An edge in a connection */
export interface PostToCategoryConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: Category
    __typename: 'PostToCategoryConnectionEdge'
}


/** Page Info on the &quot;PostToCategoryConnection&quot; */
export interface PostToCategoryConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'PostToCategoryConnectionPageInfo'
}


/** Connection between the Post type and the Comment type */
export interface PostToCommentConnection {
    /** Edges for the PostToCommentConnection connection */
    edges: PostToCommentConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: Comment[]
    /** Information about pagination in a connection. */
    pageInfo: PostToCommentConnectionPageInfo
    __typename: 'PostToCommentConnection'
}


/** An edge in a connection */
export interface PostToCommentConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: Comment
    __typename: 'PostToCommentConnectionEdge'
}


/** Page Info on the &quot;PostToCommentConnection&quot; */
export interface PostToCommentConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'PostToCommentConnectionPageInfo'
}


/** Connection between the Post type and the post type */
export interface PostToParentConnectionEdge {
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor: (Scalars['String'] | null)
    /**
     * @deprecated This content type is not hierarchical and typically will not have a parent
     * The node of the connection, without the edges
     */
    node: Post
    __typename: 'PostToParentConnectionEdge'
}


/** Connection between the Post type and the postFormat type */
export interface PostToPostFormatConnection {
    /** Edges for the PostToPostFormatConnection connection */
    edges: PostToPostFormatConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: PostFormat[]
    /** Information about pagination in a connection. */
    pageInfo: PostToPostFormatConnectionPageInfo
    __typename: 'PostToPostFormatConnection'
}


/** Connection to postFormat Nodes */
export type PostFormatConnection = (PostToPostFormatConnection | RootQueryToPostFormatConnection) & { __isUnion?: true }


/** Edge between a Node and a connected postFormat */
export type PostFormatConnectionEdge = (PostToPostFormatConnectionEdge | RootQueryToPostFormatConnectionEdge) & { __isUnion?: true }


/** The postFormat type */
export interface PostFormat {
    /** Connection between the PostFormat type and the ContentNode type */
    contentNodes: (PostFormatToContentNodeConnection | null)
    /** The number of objects connected to the object */
    count: (Scalars['Int'] | null)
    /** The unique identifier stored in the database */
    databaseId: Scalars['Int']
    /** The description of the object */
    description: (Scalars['String'] | null)
    /** Connection between the TermNode type and the EnqueuedScript type */
    enqueuedScripts: (TermNodeToEnqueuedScriptConnection | null)
    /** Connection between the TermNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets: (TermNodeToEnqueuedStylesheetConnection | null)
    /** The globally unique ID for the object */
    id: Scalars['ID']
    /** Whether the node is a Comment */
    isComment: Scalars['Boolean']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']
    /** Whether the node represents the front page. */
    isFrontPage: Scalars['Boolean']
    /** Whether  the node represents the blog page. */
    isPostsPage: Scalars['Boolean']
    /** Whether the object is restricted from the current viewer */
    isRestricted: (Scalars['Boolean'] | null)
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean']
    /** The link to the term */
    link: (Scalars['String'] | null)
    /** The human friendly name of the object. */
    name: (Scalars['String'] | null)
    /**
     * @deprecated Deprecated in favor of databaseId
     * The id field matches the WP_Post-&gt;ID field.
     */
    postFormatId: (Scalars['Int'] | null)
    /** Connection between the PostFormat type and the post type */
    posts: (PostFormatToPostConnection | null)
    /** An alphanumeric identifier for the object unique to its type. */
    slug: (Scalars['String'] | null)
    /** Connection between the PostFormat type and the Taxonomy type */
    taxonomy: (PostFormatToTaxonomyConnectionEdge | null)
    /** The name of the taxonomy that the object is associated with */
    taxonomyName: (Scalars['String'] | null)
    /** The ID of the term group that this term object belongs to */
    termGroupId: (Scalars['Int'] | null)
    /** The taxonomy ID that the object is associated with */
    termTaxonomyId: (Scalars['Int'] | null)
    /** The unique resource identifier path */
    uri: (Scalars['String'] | null)
    __typename: 'PostFormat'
}


/** Allowed Content Types of the PostFormat taxonomy. */
export type ContentTypesOfPostFormatEnum = 'POST'


/** Connection between the PostFormat type and the ContentNode type */
export interface PostFormatToContentNodeConnection {
    /** Edges for the PostFormatToContentNodeConnection connection */
    edges: PostFormatToContentNodeConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: ContentNode[]
    /** Information about pagination in a connection. */
    pageInfo: PostFormatToContentNodeConnectionPageInfo
    __typename: 'PostFormatToContentNodeConnection'
}


/** An edge in a connection */
export interface PostFormatToContentNodeConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: ContentNode
    __typename: 'PostFormatToContentNodeConnectionEdge'
}


/** Page Info on the &quot;PostFormatToContentNodeConnection&quot; */
export interface PostFormatToContentNodeConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'PostFormatToContentNodeConnectionPageInfo'
}


/** Connection between the PostFormat type and the post type */
export interface PostFormatToPostConnection {
    /** Edges for the PostFormatToPostConnection connection */
    edges: PostFormatToPostConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: Post[]
    /** Information about pagination in a connection. */
    pageInfo: PostFormatToPostConnectionPageInfo
    __typename: 'PostFormatToPostConnection'
}


/** An edge in a connection */
export interface PostFormatToPostConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: Post
    __typename: 'PostFormatToPostConnectionEdge'
}


/** Page Info on the &quot;PostFormatToPostConnection&quot; */
export interface PostFormatToPostConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'PostFormatToPostConnectionPageInfo'
}


/** Connection between the PostFormat type and the Taxonomy type */
export interface PostFormatToTaxonomyConnectionEdge {
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor: (Scalars['String'] | null)
    /** The node of the connection, without the edges */
    node: Taxonomy
    __typename: 'PostFormatToTaxonomyConnectionEdge'
}


/** Page Info on the connected PostFormatConnectionEdge */
export type PostFormatConnectionPageInfo = (PostToPostFormatConnectionPageInfo | RootQueryToPostFormatConnectionPageInfo) & { __isUnion?: true }


/** An edge in a connection */
export interface PostToPostFormatConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: PostFormat
    __typename: 'PostToPostFormatConnectionEdge'
}


/** Page Info on the &quot;PostToPostFormatConnection&quot; */
export interface PostToPostFormatConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'PostToPostFormatConnectionPageInfo'
}


/** Connection between the Post type and the post type */
export interface PostToPreviewConnectionEdge {
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor: (Scalars['String'] | null)
    /** The node of the connection, without the edges */
    node: Post
    __typename: 'PostToPreviewConnectionEdge'
}


/** Connection between the Post type and the post type */
export interface PostToRevisionConnection {
    /** Edges for the PostToRevisionConnection connection */
    edges: PostToRevisionConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: Post[]
    /** Information about pagination in a connection. */
    pageInfo: PostToRevisionConnectionPageInfo
    __typename: 'PostToRevisionConnection'
}


/** An edge in a connection */
export interface PostToRevisionConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: Post
    __typename: 'PostToRevisionConnectionEdge'
}


/** Page Info on the &quot;PostToRevisionConnection&quot; */
export interface PostToRevisionConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'PostToRevisionConnectionPageInfo'
}


/** Connection between the Post type and the tag type */
export interface PostToTagConnection {
    /** Edges for the PostToTagConnection connection */
    edges: PostToTagConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: Tag[]
    /** Information about pagination in a connection. */
    pageInfo: PostToTagConnectionPageInfo
    __typename: 'PostToTagConnection'
}


/** Connection to tag Nodes */
export type TagConnection = (PostToTagConnection | RootQueryToTagConnection) & { __isUnion?: true }


/** Edge between a Node and a connected tag */
export type TagConnectionEdge = (PostToTagConnectionEdge | RootQueryToTagConnectionEdge) & { __isUnion?: true }


/** The tag type */
export interface Tag {
    /** Connection between the Tag type and the ContentNode type */
    contentNodes: (TagToContentNodeConnection | null)
    /** The number of objects connected to the object */
    count: (Scalars['Int'] | null)
    /** The unique identifier stored in the database */
    databaseId: Scalars['Int']
    /** The description of the object */
    description: (Scalars['String'] | null)
    /** Connection between the TermNode type and the EnqueuedScript type */
    enqueuedScripts: (TermNodeToEnqueuedScriptConnection | null)
    /** Connection between the TermNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets: (TermNodeToEnqueuedStylesheetConnection | null)
    /** The globally unique ID for the object */
    id: Scalars['ID']
    /** Whether the node is a Comment */
    isComment: Scalars['Boolean']
    /** Whether the node is a Content Node */
    isContentNode: Scalars['Boolean']
    /** Whether the node represents the front page. */
    isFrontPage: Scalars['Boolean']
    /** Whether  the node represents the blog page. */
    isPostsPage: Scalars['Boolean']
    /** Whether the object is restricted from the current viewer */
    isRestricted: (Scalars['Boolean'] | null)
    /** Whether the node is a Term */
    isTermNode: Scalars['Boolean']
    /** The link to the term */
    link: (Scalars['String'] | null)
    /** The human friendly name of the object. */
    name: (Scalars['String'] | null)
    /** Connection between the Tag type and the post type */
    posts: (TagToPostConnection | null)
    /** An alphanumeric identifier for the object unique to its type. */
    slug: (Scalars['String'] | null)
    /**
     * @deprecated Deprecated in favor of databaseId
     * The id field matches the WP_Post-&gt;ID field.
     */
    tagId: (Scalars['Int'] | null)
    /** Connection between the Tag type and the Taxonomy type */
    taxonomy: (TagToTaxonomyConnectionEdge | null)
    /** The name of the taxonomy that the object is associated with */
    taxonomyName: (Scalars['String'] | null)
    /** The ID of the term group that this term object belongs to */
    termGroupId: (Scalars['Int'] | null)
    /** The taxonomy ID that the object is associated with */
    termTaxonomyId: (Scalars['Int'] | null)
    /** The unique resource identifier path */
    uri: (Scalars['String'] | null)
    __typename: 'Tag'
}


/** Allowed Content Types of the Tag taxonomy. */
export type ContentTypesOfTagEnum = 'POST'


/** Connection between the Tag type and the ContentNode type */
export interface TagToContentNodeConnection {
    /** Edges for the TagToContentNodeConnection connection */
    edges: TagToContentNodeConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: ContentNode[]
    /** Information about pagination in a connection. */
    pageInfo: TagToContentNodeConnectionPageInfo
    __typename: 'TagToContentNodeConnection'
}


/** An edge in a connection */
export interface TagToContentNodeConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: ContentNode
    __typename: 'TagToContentNodeConnectionEdge'
}


/** Page Info on the &quot;TagToContentNodeConnection&quot; */
export interface TagToContentNodeConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'TagToContentNodeConnectionPageInfo'
}


/** Connection between the Tag type and the post type */
export interface TagToPostConnection {
    /** Edges for the TagToPostConnection connection */
    edges: TagToPostConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: Post[]
    /** Information about pagination in a connection. */
    pageInfo: TagToPostConnectionPageInfo
    __typename: 'TagToPostConnection'
}


/** An edge in a connection */
export interface TagToPostConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: Post
    __typename: 'TagToPostConnectionEdge'
}


/** Page Info on the &quot;TagToPostConnection&quot; */
export interface TagToPostConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'TagToPostConnectionPageInfo'
}


/** Connection between the Tag type and the Taxonomy type */
export interface TagToTaxonomyConnectionEdge {
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor: (Scalars['String'] | null)
    /** The node of the connection, without the edges */
    node: Taxonomy
    __typename: 'TagToTaxonomyConnectionEdge'
}


/** Page Info on the connected TagConnectionEdge */
export type TagConnectionPageInfo = (PostToTagConnectionPageInfo | RootQueryToTagConnectionPageInfo) & { __isUnion?: true }


/** An edge in a connection */
export interface PostToTagConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: Tag
    __typename: 'PostToTagConnectionEdge'
}


/** Page Info on the &quot;PostToTagConnection&quot; */
export interface PostToTagConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'PostToTagConnectionPageInfo'
}


/** Allowed taxonomies */
export type TaxonomyEnum = 'CATEGORY' | 'POSTFORMAT' | 'TAG'


/** Connection between the Post type and the TermNode type */
export interface PostToTermNodeConnection {
    /** Edges for the PostToTermNodeConnection connection */
    edges: PostToTermNodeConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: TermNode[]
    /** Information about pagination in a connection. */
    pageInfo: PostToTermNodeConnectionPageInfo
    __typename: 'PostToTermNodeConnection'
}


/** An edge in a connection */
export interface PostToTermNodeConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: TermNode
    __typename: 'PostToTermNodeConnectionEdge'
}


/** Page Info on the &quot;PostToTermNodeConnection&quot; */
export interface PostToTermNodeConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'PostToTermNodeConnectionPageInfo'
}


/** An edge in a connection */
export interface UserToPostConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: Post
    __typename: 'UserToPostConnectionEdge'
}


/** Page Info on the &quot;UserToPostConnection&quot; */
export interface UserToPostConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'UserToPostConnectionPageInfo'
}


/** Connection between the User type and the ContentNode type */
export interface UserToRevisionsConnection {
    /** Edges for the UserToRevisionsConnection connection */
    edges: UserToRevisionsConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: ContentNode[]
    /** Information about pagination in a connection. */
    pageInfo: UserToRevisionsConnectionPageInfo
    __typename: 'UserToRevisionsConnection'
}


/** An edge in a connection */
export interface UserToRevisionsConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: ContentNode
    __typename: 'UserToRevisionsConnectionEdge'
}


/** Page Info on the &quot;UserToRevisionsConnection&quot; */
export interface UserToRevisionsConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'UserToRevisionsConnectionPageInfo'
}


/** Connection between the User type and the UserRole type */
export interface UserToUserRoleConnection {
    /** Edges for the UserToUserRoleConnection connection */
    edges: UserToUserRoleConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: UserRole[]
    /** Information about pagination in a connection. */
    pageInfo: UserToUserRoleConnectionPageInfo
    __typename: 'UserToUserRoleConnection'
}


/** Connection to UserRole Nodes */
export type UserRoleConnection = (UserToUserRoleConnection | RootQueryToUserRoleConnection) & { __isUnion?: true }


/** Edge between a Node and a connected UserRole */
export type UserRoleConnectionEdge = (UserToUserRoleConnectionEdge | RootQueryToUserRoleConnectionEdge) & { __isUnion?: true }


/** A user role object */
export interface UserRole {
    /** The capabilities that belong to this role */
    capabilities: ((Scalars['String'] | null)[] | null)
    /** The display name of the role */
    displayName: (Scalars['String'] | null)
    /** The globally unique identifier for the user role object. */
    id: Scalars['ID']
    /** Whether the object is restricted from the current viewer */
    isRestricted: (Scalars['Boolean'] | null)
    /** The registered name of the role */
    name: (Scalars['String'] | null)
    __typename: 'UserRole'
}


/** Page Info on the connected UserRoleConnectionEdge */
export type UserRoleConnectionPageInfo = (UserToUserRoleConnectionPageInfo | RootQueryToUserRoleConnectionPageInfo) & { __isUnion?: true }


/** An edge in a connection */
export interface UserToUserRoleConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: UserRole
    __typename: 'UserToUserRoleConnectionEdge'
}


/** Page Info on the &quot;UserToUserRoleConnection&quot; */
export interface UserToUserRoleConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'UserToUserRoleConnectionPageInfo'
}


/** An edge in a connection */
export interface CategoryToContentNodeConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: ContentNode
    __typename: 'CategoryToContentNodeConnectionEdge'
}


/** Page Info on the &quot;CategoryToContentNodeConnection&quot; */
export interface CategoryToContentNodeConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'CategoryToContentNodeConnectionPageInfo'
}


/** Connection between the Category type and the category type */
export interface CategoryToParentCategoryConnectionEdge {
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor: (Scalars['String'] | null)
    /** The node of the connection, without the edges */
    node: Category
    __typename: 'CategoryToParentCategoryConnectionEdge'
}


/** Connection between the Category type and the post type */
export interface CategoryToPostConnection {
    /** Edges for the CategoryToPostConnection connection */
    edges: CategoryToPostConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: Post[]
    /** Information about pagination in a connection. */
    pageInfo: CategoryToPostConnectionPageInfo
    __typename: 'CategoryToPostConnection'
}


/** An edge in a connection */
export interface CategoryToPostConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: Post
    __typename: 'CategoryToPostConnectionEdge'
}


/** Page Info on the &quot;CategoryToPostConnection&quot; */
export interface CategoryToPostConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'CategoryToPostConnectionPageInfo'
}


/** Connection between the Category type and the Taxonomy type */
export interface CategoryToTaxonomyConnectionEdge {
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor: (Scalars['String'] | null)
    /** The node of the connection, without the edges */
    node: Taxonomy
    __typename: 'CategoryToTaxonomyConnectionEdge'
}


/** An edge in a connection */
export interface RootQueryToCategoryConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: Category
    __typename: 'RootQueryToCategoryConnectionEdge'
}


/** Page Info on the &quot;RootQueryToCategoryConnection&quot; */
export interface RootQueryToCategoryConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'RootQueryToCategoryConnectionPageInfo'
}


/** The Type of Identifier used to fetch a single resource. Default is ID. */
export type CategoryIdType = 'DATABASE_ID' | 'ID' | 'NAME' | 'SLUG' | 'URI'


/** The Type of Identifier used to fetch a single comment node. Default is "ID". To be used along with the "id" field. */
export type CommentNodeIdTypeEnum = 'DATABASE_ID' | 'ID'


/** Connection between the RootQuery type and the Comment type */
export interface RootQueryToCommentConnection {
    /** Edges for the RootQueryToCommentConnection connection */
    edges: RootQueryToCommentConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: Comment[]
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToCommentConnectionPageInfo
    __typename: 'RootQueryToCommentConnection'
}


/** An edge in a connection */
export interface RootQueryToCommentConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: Comment
    __typename: 'RootQueryToCommentConnectionEdge'
}


/** Page Info on the &quot;RootQueryToCommentConnection&quot; */
export interface RootQueryToCommentConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'RootQueryToCommentConnectionPageInfo'
}


/** The Type of Identifier used to fetch a single resource. Default is ID. */
export type ContentNodeIdTypeEnum = 'DATABASE_ID' | 'ID' | 'URI'


/** Connection between the RootQuery type and the ContentNode type */
export interface RootQueryToContentNodeConnection {
    /** Edges for the RootQueryToContentNodeConnection connection */
    edges: RootQueryToContentNodeConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: ContentNode[]
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToContentNodeConnectionPageInfo
    __typename: 'RootQueryToContentNodeConnection'
}


/** An edge in a connection */
export interface RootQueryToContentNodeConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: ContentNode
    __typename: 'RootQueryToContentNodeConnectionEdge'
}


/** Page Info on the &quot;RootQueryToContentNodeConnection&quot; */
export interface RootQueryToContentNodeConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'RootQueryToContentNodeConnectionPageInfo'
}


/** The Type of Identifier used to fetch a single Content Type node. To be used along with the "id" field. Default is "ID". */
export type ContentTypeIdTypeEnum = 'ID' | 'NAME'


/** Connection between the RootQuery type and the ContentType type */
export interface RootQueryToContentTypeConnection {
    /** Edges for the RootQueryToContentTypeConnection connection */
    edges: RootQueryToContentTypeConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: ContentType[]
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToContentTypeConnectionPageInfo
    __typename: 'RootQueryToContentTypeConnection'
}


/** An edge in a connection */
export interface RootQueryToContentTypeConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: ContentType
    __typename: 'RootQueryToContentTypeConnectionEdge'
}


/** Page Info on the &quot;RootQueryToContentTypeConnection&quot; */
export interface RootQueryToContentTypeConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'RootQueryToContentTypeConnectionPageInfo'
}


/** The discussion setting type */
export interface DiscussionSettings {
    /** Permitir que pessoas enviem comentários em novos posts. */
    defaultCommentStatus: (Scalars['String'] | null)
    /** Permitir avisos de links de outros blogs (pingbacks ou trackbacks) em novos artigos. */
    defaultPingStatus: (Scalars['String'] | null)
    __typename: 'DiscussionSettings'
}


/** The general setting type */
export interface GeneralSettings {
    /** Um formato de data para todos os textos. */
    dateFormat: (Scalars['String'] | null)
    /** Slogan do site. */
    description: (Scalars['String'] | null)
    /** Código de localização do WordPress. */
    language: (Scalars['String'] | null)
    /** Número do dia da semana em que a semana deve iniciar. */
    startOfWeek: (Scalars['Int'] | null)
    /** Um formato de hora para todos os textos. */
    timeFormat: (Scalars['String'] | null)
    /** Uma cidade no mesmo fuso horário que você. */
    timezone: (Scalars['String'] | null)
    /** Título do site. */
    title: (Scalars['String'] | null)
    /** Site URL. */
    url: (Scalars['String'] | null)
    __typename: 'GeneralSettings'
}


/** The Type of Identifier used to fetch a single resource. Default is ID. */
export type MediaItemIdType = 'DATABASE_ID' | 'ID' | 'SLUG' | 'SOURCE_URL' | 'URI'


/** Connection between the RootQuery type and the mediaItem type */
export interface RootQueryToMediaItemConnection {
    /** Edges for the RootQueryToMediaItemConnection connection */
    edges: RootQueryToMediaItemConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: MediaItem[]
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToMediaItemConnectionPageInfo
    __typename: 'RootQueryToMediaItemConnection'
}


/** An edge in a connection */
export interface RootQueryToMediaItemConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: MediaItem
    __typename: 'RootQueryToMediaItemConnectionEdge'
}


/** Page Info on the &quot;RootQueryToMediaItemConnection&quot; */
export interface RootQueryToMediaItemConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'RootQueryToMediaItemConnectionPageInfo'
}


/** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */
export type MenuNodeIdTypeEnum = 'DATABASE_ID' | 'ID' | 'LOCATION' | 'NAME' | 'SLUG'


/** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */
export interface Menu {
    /** The number of items in the menu */
    count: (Scalars['Int'] | null)
    /** The unique identifier stored in the database */
    databaseId: Scalars['Int']
    /** The globally unique identifier of the nav menu object. */
    id: Scalars['ID']
    /** Whether the object is restricted from the current viewer */
    isRestricted: (Scalars['Boolean'] | null)
    /** The locations a menu is assigned to */
    locations: ((MenuLocationEnum | null)[] | null)
    /**
     * @deprecated Deprecated in favor of the databaseId field
     * WP ID of the nav menu.
     */
    menuId: (Scalars['Int'] | null)
    /** Connection between the Menu type and the MenuItem type */
    menuItems: (MenuToMenuItemConnection | null)
    /** Display name of the menu. Equivalent to WP_Term-&gt;name. */
    name: (Scalars['String'] | null)
    /** The url friendly name of the menu. Equivalent to WP_Term-&gt;slug */
    slug: (Scalars['String'] | null)
    __typename: 'Menu'
}


/** Registered menu locations */
export type MenuLocationEnum = 'CTA' | 'PRIMARY' | 'SECONDARY'


/** Connection between the Menu type and the MenuItem type */
export interface MenuToMenuItemConnection {
    /** Edges for the MenuToMenuItemConnection connection */
    edges: MenuToMenuItemConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: MenuItem[]
    /** Information about pagination in a connection. */
    pageInfo: MenuToMenuItemConnectionPageInfo
    __typename: 'MenuToMenuItemConnection'
}


/** Connection to MenuItem Nodes */
export type MenuItemConnection = (MenuToMenuItemConnection | MenuItemToMenuItemConnection | RootQueryToMenuItemConnection) & { __isUnion?: true }


/** Edge between a Node and a connected MenuItem */
export type MenuItemConnectionEdge = (MenuItemToMenuItemConnectionEdge | MenuToMenuItemConnectionEdge | RootQueryToMenuItemConnectionEdge) & { __isUnion?: true }


/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export interface MenuItem {
    /** Connection between the MenuItem type and the MenuItem type */
    childItems: (MenuItemToMenuItemConnection | null)
    /** Connection from MenuItem to it&#039;s connected node */
    connectedNode: (MenuItemToMenuItemLinkableConnectionEdge | null)
    /**
     * @deprecated Deprecated in favor of the connectedNode field
     * The object connected to this menu item.
     */
    connectedObject: (MenuItemObjectUnion | null)
    /** Class attribute for the menu item link */
    cssClasses: ((Scalars['String'] | null)[] | null)
    /** The unique identifier stored in the database */
    databaseId: Scalars['Int']
    /** Description of the menu item. */
    description: (Scalars['String'] | null)
    /** The globally unique identifier of the nav menu item object. */
    id: Scalars['ID']
    /** Whether the object is restricted from the current viewer */
    isRestricted: (Scalars['Boolean'] | null)
    /** Label or title of the menu item. */
    label: (Scalars['String'] | null)
    /** Link relationship (XFN) of the menu item. */
    linkRelationship: (Scalars['String'] | null)
    /** The locations the menu item&#039;s Menu is assigned to */
    locations: ((MenuLocationEnum | null)[] | null)
    /** The Menu a MenuItem is part of */
    menu: (MenuItemToMenuConnectionEdge | null)
    /**
     * @deprecated Deprecated in favor of the databaseId field
     * WP ID of the menu item.
     */
    menuItemId: (Scalars['Int'] | null)
    /** Menu item order */
    order: (Scalars['Int'] | null)
    /** The database id of the parent menu item or null if it is the root */
    parentDatabaseId: (Scalars['Int'] | null)
    /** The globally unique identifier of the parent nav menu item object. */
    parentId: (Scalars['ID'] | null)
    /** Path for the resource. Relative path for internal resources. Absolute path for external resources. */
    path: (Scalars['String'] | null)
    /** Target attribute for the menu item link. */
    target: (Scalars['String'] | null)
    /** Title attribute for the menu item link */
    title: (Scalars['String'] | null)
    /** The uri of the resource the menu item links to */
    uri: (Scalars['String'] | null)
    /** URL or destination of the menu item. */
    url: (Scalars['String'] | null)
    __typename: 'MenuItem'
}


/** Connection between the MenuItem type and the MenuItem type */
export interface MenuItemToMenuItemConnection {
    /** Edges for the MenuItemToMenuItemConnection connection */
    edges: MenuItemToMenuItemConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: MenuItem[]
    /** Information about pagination in a connection. */
    pageInfo: MenuItemToMenuItemConnectionPageInfo
    __typename: 'MenuItemToMenuItemConnection'
}


/** An edge in a connection */
export interface MenuItemToMenuItemConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: MenuItem
    __typename: 'MenuItemToMenuItemConnectionEdge'
}


/** Page Info on the &quot;MenuItemToMenuItemConnection&quot; */
export interface MenuItemToMenuItemConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'MenuItemToMenuItemConnectionPageInfo'
}


/** Page Info on the connected MenuItemConnectionEdge */
export type MenuItemConnectionPageInfo = (MenuItemToMenuItemConnectionPageInfo | MenuToMenuItemConnectionPageInfo | RootQueryToMenuItemConnectionPageInfo) & { __isUnion?: true }


/** Connection between the MenuItem type and the MenuItemLinkable type */
export interface MenuItemToMenuItemLinkableConnectionEdge {
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor: (Scalars['String'] | null)
    /** The node of the connection, without the edges */
    node: MenuItemLinkable
    __typename: 'MenuItemToMenuItemLinkableConnectionEdge'
}


/** Edge between a Node and a connected MenuItemLinkable */
export type MenuItemLinkableConnectionEdge = (MenuItemToMenuItemLinkableConnectionEdge) & { __isUnion?: true }


/** Deprecated in favor of MenuItemLinkeable Interface */
export type MenuItemObjectUnion = (Post | Page | Category | Tag | PostFormat) & { __isUnion?: true }


/** Connection between the MenuItem type and the Menu type */
export interface MenuItemToMenuConnectionEdge {
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor: (Scalars['String'] | null)
    /** The node of the connection, without the edges */
    node: Menu
    __typename: 'MenuItemToMenuConnectionEdge'
}


/** Edge between a Node and a connected Menu */
export type MenuConnectionEdge = (MenuItemToMenuConnectionEdge | RootQueryToMenuConnectionEdge) & { __isUnion?: true }


/** An edge in a connection */
export interface MenuToMenuItemConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: MenuItem
    __typename: 'MenuToMenuItemConnectionEdge'
}


/** Page Info on the &quot;MenuToMenuItemConnection&quot; */
export interface MenuToMenuItemConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'MenuToMenuItemConnectionPageInfo'
}


/** The Type of Identifier used to fetch a single node. Default is "ID". To be used along with the "id" field. */
export type MenuItemNodeIdTypeEnum = 'DATABASE_ID' | 'ID'


/** Connection between the RootQuery type and the MenuItem type */
export interface RootQueryToMenuItemConnection {
    /** Edges for the RootQueryToMenuItemConnection connection */
    edges: RootQueryToMenuItemConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: MenuItem[]
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToMenuItemConnectionPageInfo
    __typename: 'RootQueryToMenuItemConnection'
}


/** An edge in a connection */
export interface RootQueryToMenuItemConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: MenuItem
    __typename: 'RootQueryToMenuItemConnectionEdge'
}


/** Page Info on the &quot;RootQueryToMenuItemConnection&quot; */
export interface RootQueryToMenuItemConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'RootQueryToMenuItemConnectionPageInfo'
}


/** Connection between the RootQuery type and the Menu type */
export interface RootQueryToMenuConnection {
    /** Edges for the RootQueryToMenuConnection connection */
    edges: RootQueryToMenuConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: Menu[]
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToMenuConnectionPageInfo
    __typename: 'RootQueryToMenuConnection'
}


/** Connection to Menu Nodes */
export type MenuConnection = (RootQueryToMenuConnection) & { __isUnion?: true }


/** Page Info on the connected MenuConnectionEdge */
export type MenuConnectionPageInfo = (RootQueryToMenuConnectionPageInfo) & { __isUnion?: true }


/** An edge in a connection */
export interface RootQueryToMenuConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: Menu
    __typename: 'RootQueryToMenuConnectionEdge'
}


/** Page Info on the &quot;RootQueryToMenuConnection&quot; */
export interface RootQueryToMenuConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'RootQueryToMenuConnectionPageInfo'
}


/** The Type of Identifier used to fetch a single resource. Default is ID. */
export type PageIdType = 'DATABASE_ID' | 'ID' | 'URI'


/** Connection between the RootQuery type and the page type */
export interface RootQueryToPageConnection {
    /** Edges for the RootQueryToPageConnection connection */
    edges: RootQueryToPageConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: Page[]
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToPageConnectionPageInfo
    __typename: 'RootQueryToPageConnection'
}


/** An edge in a connection */
export interface RootQueryToPageConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: Page
    __typename: 'RootQueryToPageConnectionEdge'
}


/** Page Info on the &quot;RootQueryToPageConnection&quot; */
export interface RootQueryToPageConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'RootQueryToPageConnectionPageInfo'
}


/** An plugin object */
export interface Plugin {
    /** Name of the plugin author(s), may also be a company name. */
    author: (Scalars['String'] | null)
    /** URI for the related author(s)/company website. */
    authorUri: (Scalars['String'] | null)
    /** Description of the plugin. */
    description: (Scalars['String'] | null)
    /** The globally unique identifier of the plugin object. */
    id: Scalars['ID']
    /** Whether the object is restricted from the current viewer */
    isRestricted: (Scalars['Boolean'] | null)
    /** Display name of the plugin. */
    name: (Scalars['String'] | null)
    /** Plugin path. */
    path: (Scalars['String'] | null)
    /** URI for the plugin website. This is useful for directing users for support requests etc. */
    pluginUri: (Scalars['String'] | null)
    /** Current version of the plugin. */
    version: (Scalars['String'] | null)
    __typename: 'Plugin'
}


/** The status of the WordPress plugin. */
export type PluginStatusEnum = 'ACTIVE' | 'DROP_IN' | 'INACTIVE' | 'MUST_USE' | 'NETWORK_ACTIVATED' | 'NETWORK_INACTIVE' | 'PAUSED' | 'RECENTLY_ACTIVE' | 'UPGRADE'


/** Connection between the RootQuery type and the Plugin type */
export interface RootQueryToPluginConnection {
    /** Edges for the RootQueryToPluginConnection connection */
    edges: RootQueryToPluginConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: Plugin[]
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToPluginConnectionPageInfo
    __typename: 'RootQueryToPluginConnection'
}


/** Connection to Plugin Nodes */
export type PluginConnection = (RootQueryToPluginConnection) & { __isUnion?: true }


/** Edge between a Node and a connected Plugin */
export type PluginConnectionEdge = (RootQueryToPluginConnectionEdge) & { __isUnion?: true }


/** Page Info on the connected PluginConnectionEdge */
export type PluginConnectionPageInfo = (RootQueryToPluginConnectionPageInfo) & { __isUnion?: true }


/** An edge in a connection */
export interface RootQueryToPluginConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: Plugin
    __typename: 'RootQueryToPluginConnectionEdge'
}


/** Page Info on the &quot;RootQueryToPluginConnection&quot; */
export interface RootQueryToPluginConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'RootQueryToPluginConnectionPageInfo'
}


/** The Type of Identifier used to fetch a single resource. Default is ID. */
export type PostIdType = 'DATABASE_ID' | 'ID' | 'SLUG' | 'URI'


/** The Type of Identifier used to fetch a single resource. Default is ID. */
export type PostFormatIdType = 'DATABASE_ID' | 'ID' | 'NAME' | 'SLUG' | 'URI'


/** Connection between the RootQuery type and the postFormat type */
export interface RootQueryToPostFormatConnection {
    /** Edges for the RootQueryToPostFormatConnection connection */
    edges: RootQueryToPostFormatConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: PostFormat[]
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToPostFormatConnectionPageInfo
    __typename: 'RootQueryToPostFormatConnection'
}


/** An edge in a connection */
export interface RootQueryToPostFormatConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: PostFormat
    __typename: 'RootQueryToPostFormatConnectionEdge'
}


/** Page Info on the &quot;RootQueryToPostFormatConnection&quot; */
export interface RootQueryToPostFormatConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'RootQueryToPostFormatConnectionPageInfo'
}


/** Connection between the RootQuery type and the post type */
export interface RootQueryToPostConnection {
    /** Edges for the RootQueryToPostConnection connection */
    edges: RootQueryToPostConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: Post[]
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToPostConnectionPageInfo
    __typename: 'RootQueryToPostConnection'
}


/** An edge in a connection */
export interface RootQueryToPostConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: Post
    __typename: 'RootQueryToPostConnectionEdge'
}


/** Page Info on the &quot;RootQueryToPostConnection&quot; */
export interface RootQueryToPostConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'RootQueryToPostConnectionPageInfo'
}


/** The reading setting type */
export interface ReadingSettings {
    /** O ID da página que deve exibir os posts mais recentes */
    pageForPosts: (Scalars['Int'] | null)
    /** O ID da página que deve ser exibida na página inicial */
    pageOnFront: (Scalars['Int'] | null)
    /** As páginas do blog mostram no máximo. */
    postsPerPage: (Scalars['Int'] | null)
    /** O que exibir na página inicial */
    showOnFront: (Scalars['String'] | null)
    __typename: 'ReadingSettings'
}


/** Connection between the RootQuery type and the EnqueuedScript type */
export interface RootQueryToEnqueuedScriptConnection {
    /** Edges for the RootQueryToEnqueuedScriptConnection connection */
    edges: RootQueryToEnqueuedScriptConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: EnqueuedScript[]
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToEnqueuedScriptConnectionPageInfo
    __typename: 'RootQueryToEnqueuedScriptConnection'
}


/** An edge in a connection */
export interface RootQueryToEnqueuedScriptConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: EnqueuedScript
    __typename: 'RootQueryToEnqueuedScriptConnectionEdge'
}


/** Page Info on the &quot;RootQueryToEnqueuedScriptConnection&quot; */
export interface RootQueryToEnqueuedScriptConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'RootQueryToEnqueuedScriptConnectionPageInfo'
}


/** Connection between the RootQuery type and the EnqueuedStylesheet type */
export interface RootQueryToEnqueuedStylesheetConnection {
    /** Edges for the RootQueryToEnqueuedStylesheetConnection connection */
    edges: RootQueryToEnqueuedStylesheetConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: EnqueuedStylesheet[]
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToEnqueuedStylesheetConnectionPageInfo
    __typename: 'RootQueryToEnqueuedStylesheetConnection'
}


/** An edge in a connection */
export interface RootQueryToEnqueuedStylesheetConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: EnqueuedStylesheet
    __typename: 'RootQueryToEnqueuedStylesheetConnectionEdge'
}


/** Page Info on the &quot;RootQueryToEnqueuedStylesheetConnection&quot; */
export interface RootQueryToEnqueuedStylesheetConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'RootQueryToEnqueuedStylesheetConnectionPageInfo'
}


/** Connection between the RootQuery type and the ContentNode type */
export interface RootQueryToRevisionsConnection {
    /** Edges for the RootQueryToRevisionsConnection connection */
    edges: RootQueryToRevisionsConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: ContentNode[]
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToRevisionsConnectionPageInfo
    __typename: 'RootQueryToRevisionsConnection'
}


/** An edge in a connection */
export interface RootQueryToRevisionsConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: ContentNode
    __typename: 'RootQueryToRevisionsConnectionEdge'
}


/** Page Info on the &quot;RootQueryToRevisionsConnection&quot; */
export interface RootQueryToRevisionsConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'RootQueryToRevisionsConnectionPageInfo'
}


/** The Type of Identifier used to fetch a single resource. Default is ID. */
export type TagIdType = 'DATABASE_ID' | 'ID' | 'NAME' | 'SLUG' | 'URI'


/** Connection between the RootQuery type and the tag type */
export interface RootQueryToTagConnection {
    /** Edges for the RootQueryToTagConnection connection */
    edges: RootQueryToTagConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: Tag[]
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToTagConnectionPageInfo
    __typename: 'RootQueryToTagConnection'
}


/** An edge in a connection */
export interface RootQueryToTagConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: Tag
    __typename: 'RootQueryToTagConnectionEdge'
}


/** Page Info on the &quot;RootQueryToTagConnection&quot; */
export interface RootQueryToTagConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'RootQueryToTagConnectionPageInfo'
}


/** Connection between the RootQuery type and the Taxonomy type */
export interface RootQueryToTaxonomyConnection {
    /** Edges for the RootQueryToTaxonomyConnection connection */
    edges: RootQueryToTaxonomyConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: Taxonomy[]
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToTaxonomyConnectionPageInfo
    __typename: 'RootQueryToTaxonomyConnection'
}


/** An edge in a connection */
export interface RootQueryToTaxonomyConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: Taxonomy
    __typename: 'RootQueryToTaxonomyConnectionEdge'
}


/** Page Info on the &quot;RootQueryToTaxonomyConnection&quot; */
export interface RootQueryToTaxonomyConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'RootQueryToTaxonomyConnectionPageInfo'
}


/** The Type of Identifier used to fetch a single Taxonomy node. To be used along with the "id" field. Default is "ID". */
export type TaxonomyIdTypeEnum = 'ID' | 'NAME'


/** The Type of Identifier used to fetch a single resource. Default is "ID". To be used along with the "id" field. */
export type TermNodeIdTypeEnum = 'DATABASE_ID' | 'ID' | 'NAME' | 'SLUG' | 'URI'


/** Connection between the RootQuery type and the TermNode type */
export interface RootQueryToTermNodeConnection {
    /** Edges for the RootQueryToTermNodeConnection connection */
    edges: RootQueryToTermNodeConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: TermNode[]
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToTermNodeConnectionPageInfo
    __typename: 'RootQueryToTermNodeConnection'
}


/** An edge in a connection */
export interface RootQueryToTermNodeConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: TermNode
    __typename: 'RootQueryToTermNodeConnectionEdge'
}


/** Page Info on the &quot;RootQueryToTermNodeConnection&quot; */
export interface RootQueryToTermNodeConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'RootQueryToTermNodeConnectionPageInfo'
}


/** A theme object */
export interface Theme {
    /** Name of the theme author(s), could also be a company name. This field is equivalent to WP_Theme-&gt;get( &quot;Author&quot; ). */
    author: (Scalars['String'] | null)
    /** URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;AuthorURI&quot; ). */
    authorUri: (Scalars['String'] | null)
    /** The description of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Description&quot; ). */
    description: (Scalars['String'] | null)
    /** The globally unique identifier of the theme object. */
    id: Scalars['ID']
    /** Whether the object is restricted from the current viewer */
    isRestricted: (Scalars['Boolean'] | null)
    /** Display name of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Name&quot; ). */
    name: (Scalars['String'] | null)
    /** The URL of the screenshot for the theme. The screenshot is intended to give an overview of what the theme looks like. This field is equivalent to WP_Theme-&gt;get_screenshot(). */
    screenshot: (Scalars['String'] | null)
    /** The theme slug is used to internally match themes. Theme slugs can have subdirectories like: my-theme/sub-theme. This field is equivalent to WP_Theme-&gt;get_stylesheet(). */
    slug: (Scalars['String'] | null)
    /** URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;Tags&quot; ). */
    tags: ((Scalars['String'] | null)[] | null)
    /** A URI if the theme has a website associated with it. The Theme URI is handy for directing users to a theme site for support etc. This field is equivalent to WP_Theme-&gt;get( &quot;ThemeURI&quot; ). */
    themeUri: (Scalars['String'] | null)
    /** The current version of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Version&quot; ). */
    version: (Scalars['String'] | null)
    __typename: 'Theme'
}


/** Connection between the RootQuery type and the Theme type */
export interface RootQueryToThemeConnection {
    /** Edges for the RootQueryToThemeConnection connection */
    edges: RootQueryToThemeConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: Theme[]
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToThemeConnectionPageInfo
    __typename: 'RootQueryToThemeConnection'
}


/** Connection to Theme Nodes */
export type ThemeConnection = (RootQueryToThemeConnection) & { __isUnion?: true }


/** Edge between a Node and a connected Theme */
export type ThemeConnectionEdge = (RootQueryToThemeConnectionEdge) & { __isUnion?: true }


/** Page Info on the connected ThemeConnectionEdge */
export type ThemeConnectionPageInfo = (RootQueryToThemeConnectionPageInfo) & { __isUnion?: true }


/** An edge in a connection */
export interface RootQueryToThemeConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: Theme
    __typename: 'RootQueryToThemeConnectionEdge'
}


/** Page Info on the &quot;RootQueryToThemeConnection&quot; */
export interface RootQueryToThemeConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'RootQueryToThemeConnectionPageInfo'
}


/** The Type of Identifier used to fetch a single User node. To be used along with the "id" field. Default is "ID". */
export type UserNodeIdTypeEnum = 'DATABASE_ID' | 'EMAIL' | 'ID' | 'SLUG' | 'URI' | 'USERNAME'


/** Connection between the RootQuery type and the UserRole type */
export interface RootQueryToUserRoleConnection {
    /** Edges for the RootQueryToUserRoleConnection connection */
    edges: RootQueryToUserRoleConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: UserRole[]
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToUserRoleConnectionPageInfo
    __typename: 'RootQueryToUserRoleConnection'
}


/** An edge in a connection */
export interface RootQueryToUserRoleConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: UserRole
    __typename: 'RootQueryToUserRoleConnectionEdge'
}


/** Page Info on the &quot;RootQueryToUserRoleConnection&quot; */
export interface RootQueryToUserRoleConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'RootQueryToUserRoleConnectionPageInfo'
}


/** Field to order the connection by */
export type UsersConnectionOrderbyEnum = 'DISPLAY_NAME' | 'EMAIL' | 'LOGIN' | 'LOGIN_IN' | 'NICE_NAME' | 'NICE_NAME_IN' | 'REGISTERED' | 'URL'


/** Names of available user roles */
export type UserRoleEnum = 'ADMINISTRATOR' | 'AUTHOR' | 'CONTRIBUTOR' | 'CUSTOMER' | 'EDITOR' | 'SEO_EDITOR' | 'SEO_MANAGER' | 'SHOP_MANAGER' | 'SUBSCRIBER' | 'TRANSLATOR'


/** Column used for searching for users. */
export type UsersConnectionSearchColumnEnum = 'EMAIL' | 'ID' | 'LOGIN' | 'NICENAME' | 'URL'


/** Connection between the RootQuery type and the User type */
export interface RootQueryToUserConnection {
    /** Edges for the RootQueryToUserConnection connection */
    edges: RootQueryToUserConnectionEdge[]
    /** The nodes of the connection, without the edges */
    nodes: User[]
    /** Information about pagination in a connection. */
    pageInfo: RootQueryToUserConnectionPageInfo
    __typename: 'RootQueryToUserConnection'
}


/** Connection to User Nodes */
export type UserConnection = (RootQueryToUserConnection) & { __isUnion?: true }


/** Page Info on the connected UserConnectionEdge */
export type UserConnectionPageInfo = (RootQueryToUserConnectionPageInfo) & { __isUnion?: true }


/** An edge in a connection */
export interface RootQueryToUserConnectionEdge {
    /** A cursor for use in pagination */
    cursor: (Scalars['String'] | null)
    /** The item at the end of the edge */
    node: User
    __typename: 'RootQueryToUserConnectionEdge'
}


/** Page Info on the &quot;RootQueryToUserConnection&quot; */
export interface RootQueryToUserConnectionPageInfo {
    /** When paginating forwards, the cursor to continue. */
    endCursor: (Scalars['String'] | null)
    /** When paginating forwards, are there more items? */
    hasNextPage: Scalars['Boolean']
    /** When paginating backwards, are there more items? */
    hasPreviousPage: Scalars['Boolean']
    /** When paginating backwards, the cursor to continue. */
    startCursor: (Scalars['String'] | null)
    __typename: 'RootQueryToUserConnectionPageInfo'
}


/** The writing setting type */
export interface WritingSettings {
    /** Categoria padrão para post. */
    defaultCategory: (Scalars['Int'] | null)
    /** Formato de post padrão. */
    defaultPostFormat: (Scalars['String'] | null)
    /** Converter emoticons como :-) e :-P em gráficos ao exibí-los. */
    useSmilies: (Scalars['Boolean'] | null)
    __typename: 'WritingSettings'
}


/** The root mutation */
export interface RootMutation {
    /** The createCategory mutation */
    createCategory: (CreateCategoryPayload | null)
    /** The createComment mutation */
    createComment: (CreateCommentPayload | null)
    /** The createMediaItem mutation */
    createMediaItem: (CreateMediaItemPayload | null)
    /** The createPage mutation */
    createPage: (CreatePagePayload | null)
    /** The createPost mutation */
    createPost: (CreatePostPayload | null)
    /** The createPostFormat mutation */
    createPostFormat: (CreatePostFormatPayload | null)
    /** The createTag mutation */
    createTag: (CreateTagPayload | null)
    /** The createUser mutation */
    createUser: (CreateUserPayload | null)
    /** The deleteCategory mutation */
    deleteCategory: (DeleteCategoryPayload | null)
    /** The deleteComment mutation */
    deleteComment: (DeleteCommentPayload | null)
    /** The deleteMediaItem mutation */
    deleteMediaItem: (DeleteMediaItemPayload | null)
    /** The deletePage mutation */
    deletePage: (DeletePagePayload | null)
    /** The deletePost mutation */
    deletePost: (DeletePostPayload | null)
    /** The deletePostFormat mutation */
    deletePostFormat: (DeletePostFormatPayload | null)
    /** The deleteTag mutation */
    deleteTag: (DeleteTagPayload | null)
    /** The deleteUser mutation */
    deleteUser: (DeleteUserPayload | null)
    /** Increase the count. */
    increaseCount: (Scalars['Int'] | null)
    /** The registerUser mutation */
    registerUser: (RegisterUserPayload | null)
    /** The resetUserPassword mutation */
    resetUserPassword: (ResetUserPasswordPayload | null)
    /** The restoreComment mutation */
    restoreComment: (RestoreCommentPayload | null)
    /** Send password reset email to user */
    sendPasswordResetEmail: (SendPasswordResetEmailPayload | null)
    /** The updateCategory mutation */
    updateCategory: (UpdateCategoryPayload | null)
    /** The updateComment mutation */
    updateComment: (UpdateCommentPayload | null)
    /** The updateMediaItem mutation */
    updateMediaItem: (UpdateMediaItemPayload | null)
    /** The updatePage mutation */
    updatePage: (UpdatePagePayload | null)
    /** The updatePost mutation */
    updatePost: (UpdatePostPayload | null)
    /** The updatePostFormat mutation */
    updatePostFormat: (UpdatePostFormatPayload | null)
    /** The updateSettings mutation */
    updateSettings: (UpdateSettingsPayload | null)
    /** The updateTag mutation */
    updateTag: (UpdateTagPayload | null)
    /** The updateUser mutation */
    updateUser: (UpdateUserPayload | null)
    __typename: 'RootMutation'
}


/** The payload for the createCategory mutation. */
export interface CreateCategoryPayload {
    /** The created category */
    category: (Category | null)
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId: (Scalars['String'] | null)
    __typename: 'CreateCategoryPayload'
}


/** The payload for the createComment mutation. */
export interface CreateCommentPayload {
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId: (Scalars['String'] | null)
    /** The comment that was created */
    comment: (Comment | null)
    /** Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache */
    success: (Scalars['Boolean'] | null)
    __typename: 'CreateCommentPayload'
}


/** The status of the media item object. */
export type MediaItemStatusEnum = 'AUTO_DRAFT' | 'INHERIT' | 'PRIVATE' | 'TRASH'


/** The payload for the createMediaItem mutation. */
export interface CreateMediaItemPayload {
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId: (Scalars['String'] | null)
    /** The MediaItem object mutation type. */
    mediaItem: (MediaItem | null)
    __typename: 'CreateMediaItemPayload'
}


/** The payload for the createPage mutation. */
export interface CreatePagePayload {
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId: (Scalars['String'] | null)
    /** The Post object mutation type. */
    page: (Page | null)
    __typename: 'CreatePagePayload'
}


/** The payload for the createPost mutation. */
export interface CreatePostPayload {
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId: (Scalars['String'] | null)
    /** The Post object mutation type. */
    post: (Post | null)
    __typename: 'CreatePostPayload'
}


/** The payload for the createPostFormat mutation. */
export interface CreatePostFormatPayload {
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId: (Scalars['String'] | null)
    /** The created post_format */
    postFormat: (PostFormat | null)
    __typename: 'CreatePostFormatPayload'
}


/** The payload for the createTag mutation. */
export interface CreateTagPayload {
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId: (Scalars['String'] | null)
    /** The created post_tag */
    tag: (Tag | null)
    __typename: 'CreateTagPayload'
}


/** The payload for the createUser mutation. */
export interface CreateUserPayload {
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId: (Scalars['String'] | null)
    /** The User object mutation type. */
    user: (User | null)
    __typename: 'CreateUserPayload'
}


/** The payload for the deleteCategory mutation. */
export interface DeleteCategoryPayload {
    /** The deleted term object */
    category: (Category | null)
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId: (Scalars['String'] | null)
    /** The ID of the deleted object */
    deletedId: (Scalars['ID'] | null)
    __typename: 'DeleteCategoryPayload'
}


/** The payload for the deleteComment mutation. */
export interface DeleteCommentPayload {
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId: (Scalars['String'] | null)
    /** The deleted comment object */
    comment: (Comment | null)
    /** The deleted comment ID */
    deletedId: (Scalars['ID'] | null)
    __typename: 'DeleteCommentPayload'
}


/** The payload for the deleteMediaItem mutation. */
export interface DeleteMediaItemPayload {
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId: (Scalars['String'] | null)
    /** The ID of the deleted mediaItem */
    deletedId: (Scalars['ID'] | null)
    /** The mediaItem before it was deleted */
    mediaItem: (MediaItem | null)
    __typename: 'DeleteMediaItemPayload'
}


/** The payload for the deletePage mutation. */
export interface DeletePagePayload {
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId: (Scalars['String'] | null)
    /** The ID of the deleted object */
    deletedId: (Scalars['ID'] | null)
    /** The object before it was deleted */
    page: (Page | null)
    __typename: 'DeletePagePayload'
}


/** The payload for the deletePost mutation. */
export interface DeletePostPayload {
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId: (Scalars['String'] | null)
    /** The ID of the deleted object */
    deletedId: (Scalars['ID'] | null)
    /** The object before it was deleted */
    post: (Post | null)
    __typename: 'DeletePostPayload'
}


/** The payload for the deletePostFormat mutation. */
export interface DeletePostFormatPayload {
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId: (Scalars['String'] | null)
    /** The ID of the deleted object */
    deletedId: (Scalars['ID'] | null)
    /** The deleted term object */
    postFormat: (PostFormat | null)
    __typename: 'DeletePostFormatPayload'
}


/** The payload for the deleteTag mutation. */
export interface DeleteTagPayload {
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId: (Scalars['String'] | null)
    /** The ID of the deleted object */
    deletedId: (Scalars['ID'] | null)
    /** The deleted term object */
    tag: (Tag | null)
    __typename: 'DeleteTagPayload'
}


/** The payload for the deleteUser mutation. */
export interface DeleteUserPayload {
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId: (Scalars['String'] | null)
    /** The ID of the user that you just deleted */
    deletedId: (Scalars['ID'] | null)
    /** The deleted user object */
    user: (User | null)
    __typename: 'DeleteUserPayload'
}


/** The payload for the registerUser mutation. */
export interface RegisterUserPayload {
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId: (Scalars['String'] | null)
    /** The User object mutation type. */
    user: (User | null)
    __typename: 'RegisterUserPayload'
}


/** The payload for the resetUserPassword mutation. */
export interface ResetUserPasswordPayload {
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId: (Scalars['String'] | null)
    /** The User object mutation type. */
    user: (User | null)
    __typename: 'ResetUserPasswordPayload'
}


/** The payload for the restoreComment mutation. */
export interface RestoreCommentPayload {
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId: (Scalars['String'] | null)
    /** The restored comment object */
    comment: (Comment | null)
    /** The ID of the restored comment */
    restoredId: (Scalars['ID'] | null)
    __typename: 'RestoreCommentPayload'
}


/** The payload for the sendPasswordResetEmail mutation. */
export interface SendPasswordResetEmailPayload {
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId: (Scalars['String'] | null)
    /** Whether the mutation completed successfully. This does NOT necessarily mean that an email was sent. */
    success: (Scalars['Boolean'] | null)
    /**
     * @deprecated This field will be removed in a future version of WPGraphQL
     * The user that the password reset email was sent to
     */
    user: (User | null)
    __typename: 'SendPasswordResetEmailPayload'
}


/** The payload for the updateCategory mutation. */
export interface UpdateCategoryPayload {
    /** The created category */
    category: (Category | null)
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId: (Scalars['String'] | null)
    __typename: 'UpdateCategoryPayload'
}


/** The payload for the updateComment mutation. */
export interface UpdateCommentPayload {
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId: (Scalars['String'] | null)
    /** The comment that was created */
    comment: (Comment | null)
    /** Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache */
    success: (Scalars['Boolean'] | null)
    __typename: 'UpdateCommentPayload'
}


/** The payload for the updateMediaItem mutation. */
export interface UpdateMediaItemPayload {
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId: (Scalars['String'] | null)
    /** The MediaItem object mutation type. */
    mediaItem: (MediaItem | null)
    __typename: 'UpdateMediaItemPayload'
}


/** The payload for the updatePage mutation. */
export interface UpdatePagePayload {
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId: (Scalars['String'] | null)
    /** The Post object mutation type. */
    page: (Page | null)
    __typename: 'UpdatePagePayload'
}


/** The payload for the updatePost mutation. */
export interface UpdatePostPayload {
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId: (Scalars['String'] | null)
    /** The Post object mutation type. */
    post: (Post | null)
    __typename: 'UpdatePostPayload'
}


/** The payload for the updatePostFormat mutation. */
export interface UpdatePostFormatPayload {
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId: (Scalars['String'] | null)
    /** The created post_format */
    postFormat: (PostFormat | null)
    __typename: 'UpdatePostFormatPayload'
}


/** The payload for the updateSettings mutation. */
export interface UpdateSettingsPayload {
    /** Update all settings. */
    allSettings: (Settings | null)
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId: (Scalars['String'] | null)
    /** Update the DiscussionSettings setting. */
    discussionSettings: (DiscussionSettings | null)
    /** Update the GeneralSettings setting. */
    generalSettings: (GeneralSettings | null)
    /** Update the ReadingSettings setting. */
    readingSettings: (ReadingSettings | null)
    /** Update the WritingSettings setting. */
    writingSettings: (WritingSettings | null)
    __typename: 'UpdateSettingsPayload'
}


/** The payload for the updateTag mutation. */
export interface UpdateTagPayload {
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId: (Scalars['String'] | null)
    /** The created post_tag */
    tag: (Tag | null)
    __typename: 'UpdateTagPayload'
}


/** The payload for the updateUser mutation. */
export interface UpdateUserPayload {
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId: (Scalars['String'] | null)
    /** The User object mutation type. */
    user: (User | null)
    __typename: 'UpdateUserPayload'
}


/** A Comment Author object */
export interface CommentAuthor {
    /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
    avatar: (Avatar | null)
    /** The unique identifier stored in the database */
    databaseId: Scalars['Int']
    /** The email for the comment author */
    email: (Scalars['String'] | null)
    /** The globally unique identifier for the comment author object */
    id: Scalars['ID']
    /** Whether the object is restricted from the current viewer */
    isRestricted: (Scalars['Boolean'] | null)
    /** The name for the comment author. */
    name: (Scalars['String'] | null)
    /** The url the comment author. */
    url: (Scalars['String'] | null)
    __typename: 'CommentAuthor'
}


/** The template assigned to the node */
export interface DefaultTemplate {
    /** The name of the template */
    templateName: (Scalars['String'] | null)
    __typename: 'DefaultTemplate'
}


/** Interface representing fields of the ACF &quot;AtributosExtraProduto&quot; Field Group */
export type AtributosExtraProduto_Fields = (AtributosExtraProduto) & { __isUnion?: true }


/** A Field Group managed by ACF */
export type AcfFieldGroup = (AtributosExtraProduto | CabeAlhoDeCatLogos | CamposEspeciaisDeConteDo | DadosExtraProdutores | OutrosDadosDeProduto | PromoEs) & { __isUnion?: true }


/** Fields associated with an ACF Field Group */
export type AcfFieldGroupFields = (AtributosExtraProduto | CabeAlhoDeCatLogos | CamposEspeciaisDeConteDo | DadosExtraProdutores | OutrosDadosDeProduto | PromoEs) & { __isUnion?: true }


/** The &quot;AtributosExtraProduto&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export interface AtributosExtraProduto {
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;AtributosExtraProduto&quot; Field Group */
    amadurecimento: (Scalars['String'] | null)
    /**
     * @deprecated Use __typename instead
     * The name of the field group
     */
    fieldGroupName: (Scalars['String'] | null)
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;AtributosExtraProduto&quot; Field Group */
    potencialDeGuarda: (Scalars['String'] | null)
    __typename: 'AtributosExtraProduto'
}


/** Interface representing fields of the ACF &quot;CabeAlhoDeCatLogos&quot; Field Group */
export type CabeAlhoDeCatLogos_Fields = (CabeAlhoDeCatLogos) & { __isUnion?: true }


/** Connection between the CabeAlhoDeCatLogos_Fields type and the MediaItem type */
export interface AcfMediaItemConnectionEdge {
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor: (Scalars['String'] | null)
    /** The node of the connection, without the edges */
    node: MediaItem
    __typename: 'AcfMediaItemConnectionEdge'
}


/** The &quot;CabeAlhoDeCatLogos&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export interface CabeAlhoDeCatLogos {
    /** Image &quot;customizada&quot; a mostrar no cabeçalho */
    customCatalogImage: (AcfMediaItemConnectionEdge | null)
    /** Título customizado para o catálogo */
    customCatalogTitle: (Scalars['String'] | null)
    /**
     * @deprecated Use __typename instead
     * The name of the field group
     */
    fieldGroupName: (Scalars['String'] | null)
    __typename: 'CabeAlhoDeCatLogos'
}


/** Interface representing fields of the ACF &quot;CamposEspeciaisDeConteDo&quot; Field Group */
export type CamposEspeciaisDeConteDo_Fields = (CamposEspeciaisDeConteDo) & { __isUnion?: true }


/** The &quot;CamposEspeciaisDeConteDo&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export interface CamposEspeciaisDeConteDo {
    /**
     * @deprecated Use __typename instead
     * The name of the field group
     */
    fieldGroupName: (Scalars['String'] | null)
    /** Field of the &quot;wysiwyg&quot; Field Type added to the schema as part of the &quot;CamposEspeciaisDeConteDo&quot; Field Group */
    firstParagraph: (Scalars['String'] | null)
    /** Primeira legenda do conteúdo */
    firstSubtitle: (Scalars['String'] | null)
    __typename: 'CamposEspeciaisDeConteDo'
}


/** Interface representing fields of the ACF &quot;DadosExtraProdutores&quot; Field Group */
export type DadosExtraProdutores_Fields = (DadosExtraProdutores) & { __isUnion?: true }


/** The &quot;DadosExtraProdutores&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export interface DadosExtraProdutores {
    /**
     * @deprecated Use __typename instead
     * The name of the field group
     */
    fieldGroupName: (Scalars['String'] | null)
    /** Pequeno texto de informações em destaque do produtor (para a página de produto) */
    textoDestaque: (Scalars['String'] | null)
    __typename: 'DadosExtraProdutores'
}


/** Interface representing fields of the ACF &quot;OutrosDadosDeProduto&quot; Field Group */
export type OutrosDadosDeProduto_Fields = (OutrosDadosDeProduto) & { __isUnion?: true }


/** The &quot;OutrosDadosDeProduto&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export interface OutrosDadosDeProduto {
    /** Imagem que vai embaixo do vinho, como fundo do título do artigo */
    bgContentImage: (AcfMediaItemConnectionEdge | null)
    /** Cor final do gradiente do fundo das garrafas */
    bgGradientEnd: (Scalars['String'] | null)
    /** Cor inicial do gradiente do fundo das garrafas */
    bgGradientStart: (Scalars['String'] | null)
    /**
     * @deprecated Use __typename instead
     * The name of the field group
     */
    fieldGroupName: (Scalars['String'] | null)
    /** Cor utilizado para o botão de adicionar ao carrinho, cor de links, etc */
    pageMainColor: (Scalars['String'] | null)
    /** O título para o artigo que vai embaixo da foto do produto */
    tituloDoArtigo: (Scalars['String'] | null)
    __typename: 'OutrosDadosDeProduto'
}


/** Interface representing fields of the ACF &quot;PromoEs&quot; Field Group */
export type PromoEs_Fields = (PromoEs) & { __isUnion?: true }


/** The &quot;PromoEs&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export interface PromoEs {
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;PromoEs&quot; Field Group */
    codigoDeCupom: (Scalars['String'] | null)
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;PromoEs&quot; Field Group */
    descontoDoCupom: (Scalars['String'] | null)
    /**
     * @deprecated Use __typename instead
     * The name of the field group
     */
    fieldGroupName: (Scalars['String'] | null)
    /** Field of the &quot;select&quot; Field Type added to the schema as part of the &quot;PromoEs&quot; Field Group */
    tipoDePromocao: ((Scalars['String'] | null)[] | null)
    __typename: 'PromoEs'
}

export type Query = RootQuery
export type Mutation = RootMutation


/** The root entry point into the Graph */
export interface RootQueryGenqlSelection{
    /** Entry point to get all settings for the site */
    allSettings?: SettingsGenqlSelection
    /** Connection between the RootQuery type and the category type */
    categories?: (RootQueryToCategoryConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null), 
    /** Arguments for filtering the connection */
    where?: (RootQueryToCategoryConnectionWhereArgs | null)} })
    /** A 0bject */
    category?: (CategoryGenqlSelection & { __args: {
    /** The globally unique identifier of the object. */
    id: Scalars['ID'], 
    /** Type of unique identifier to fetch by. Default is Global ID */
    idType?: (CategoryIdType | null)} })
    /** Returns a Comment */
    comment?: (CommentGenqlSelection & { __args: {
    /** Unique identifier for the comment node. */
    id: Scalars['ID'], 
    /** Type of unique identifier to fetch a comment by. Default is Global ID */
    idType?: (CommentNodeIdTypeEnum | null)} })
    /** Connection between the RootQuery type and the Comment type */
    comments?: (RootQueryToCommentConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null), 
    /** Arguments for filtering the connection */
    where?: (RootQueryToCommentConnectionWhereArgs | null)} })
    /** A node used to manage content */
    contentNode?: (ContentNodeGenqlSelection & { __args: {
    /** Unique identifier for the content node. */
    id: Scalars['ID'], 
    /** Type of unique identifier to fetch a content node by. Default is Global ID */
    idType?: (ContentNodeIdTypeEnum | null), 
    /** The content type the node is used for. Required when idType is set to "name" or "slug" */
    contentType?: (ContentTypeEnum | null), 
    /** Whether to return the Preview Node instead of the Published Node. When the ID of a Node is provided along with asPreview being set to true, the preview node with un-published changes will be returned instead of the published node. If no preview node exists or the requester doesn't have proper capabilities to preview, no node will be returned. If the ID provided is a URI and has a preview query arg, it will be used as a fallback if the "asPreview" argument is not explicitly provided as an argument. */
    asPreview?: (Scalars['Boolean'] | null)} })
    /** Connection between the RootQuery type and the ContentNode type */
    contentNodes?: (RootQueryToContentNodeConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null), 
    /** Arguments for filtering the connection */
    where?: (RootQueryToContentNodeConnectionWhereArgs | null)} })
    /** Fetch a Content Type node by unique Identifier */
    contentType?: (ContentTypeGenqlSelection & { __args: {
    /** Unique Identifier for the Content Type node. */
    id: Scalars['ID'], 
    /** Type of unique identifier to fetch a content type by. Default is Global ID */
    idType?: (ContentTypeIdTypeEnum | null)} })
    /** Connection between the RootQuery type and the ContentType type */
    contentTypes?: (RootQueryToContentTypeConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null)} })
    /** Fields of the &#039;DiscussionSettings&#039; settings group */
    discussionSettings?: DiscussionSettingsGenqlSelection
    /** Fields of the &#039;GeneralSettings&#039; settings group */
    generalSettings?: GeneralSettingsGenqlSelection
    /** An object of the mediaItem Type.  */
    mediaItem?: (MediaItemGenqlSelection & { __args: {
    /** The globally unique identifier of the object. */
    id: Scalars['ID'], 
    /** Type of unique identifier to fetch by. Default is Global ID */
    idType?: (MediaItemIdType | null), 
    /** Whether to return the Preview Node instead of the Published Node. When the ID of a Node is provided along with asPreview being set to true, the preview node with un-published changes will be returned instead of the published node. If no preview node exists or the requester doesn't have proper capabilities to preview, no node will be returned. If the ID provided is a URI and has a preview query arg, it will be used as a fallback if the "asPreview" argument is not explicitly provided as an argument. */
    asPreview?: (Scalars['Boolean'] | null)} })
    /**
     * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
     * A mediaItem object
     */
    mediaItemBy?: (MediaItemGenqlSelection & { __args?: {
    /** Get the mediaItem object by its global ID */
    id?: (Scalars['ID'] | null), 
    /** Get the mediaItem by its database ID */
    mediaItemId?: (Scalars['Int'] | null), 
    /** Get the mediaItem by its uri */
    uri?: (Scalars['String'] | null), 
    /** Get the mediaItem by its slug (only available for non-hierarchical types) */
    slug?: (Scalars['String'] | null)} })
    /** Connection between the RootQuery type and the mediaItem type */
    mediaItems?: (RootQueryToMediaItemConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null), 
    /** Arguments for filtering the connection */
    where?: (RootQueryToMediaItemConnectionWhereArgs | null)} })
    /** A WordPress navigation menu */
    menu?: (MenuGenqlSelection & { __args: {
    /** The globally unique identifier of the menu. */
    id: Scalars['ID'], 
    /** Type of unique identifier to fetch a menu by. Default is Global ID */
    idType?: (MenuNodeIdTypeEnum | null)} })
    /** A WordPress navigation menu item */
    menuItem?: (MenuItemGenqlSelection & { __args: {
    /** The globally unique identifier of the menu item. */
    id: Scalars['ID'], 
    /** Type of unique identifier to fetch a menu item by. Default is Global ID */
    idType?: (MenuItemNodeIdTypeEnum | null)} })
    /** Connection between the RootQuery type and the MenuItem type */
    menuItems?: (RootQueryToMenuItemConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null), 
    /** Arguments for filtering the connection */
    where?: (RootQueryToMenuItemConnectionWhereArgs | null)} })
    /** Connection between the RootQuery type and the Menu type */
    menus?: (RootQueryToMenuConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null), 
    /** Arguments for filtering the connection */
    where?: (RootQueryToMenuConnectionWhereArgs | null)} })
    /** Fetches an object given its ID */
    node?: (NodeGenqlSelection & { __args?: {
    /** The unique identifier of the node */
    id?: (Scalars['ID'] | null)} })
    /** Fetches an object given its Unique Resource Identifier */
    nodeByUri?: (UniformResourceIdentifiableGenqlSelection & { __args: {
    /** Unique Resource Identifier in the form of a path or permalink for a node. Ex: "/hello-world" */
    uri: Scalars['String']} })
    /** An object of the page Type.  */
    page?: (PageGenqlSelection & { __args: {
    /** The globally unique identifier of the object. */
    id: Scalars['ID'], 
    /** Type of unique identifier to fetch by. Default is Global ID */
    idType?: (PageIdType | null), 
    /** Whether to return the Preview Node instead of the Published Node. When the ID of a Node is provided along with asPreview being set to true, the preview node with un-published changes will be returned instead of the published node. If no preview node exists or the requester doesn't have proper capabilities to preview, no node will be returned. If the ID provided is a URI and has a preview query arg, it will be used as a fallback if the "asPreview" argument is not explicitly provided as an argument. */
    asPreview?: (Scalars['Boolean'] | null)} })
    /**
     * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
     * A page object
     */
    pageBy?: (PageGenqlSelection & { __args?: {
    /** Get the page object by its global ID */
    id?: (Scalars['ID'] | null), 
    /** Get the page by its database ID */
    pageId?: (Scalars['Int'] | null), 
    /** Get the page by its uri */
    uri?: (Scalars['String'] | null)} })
    /** Connection between the RootQuery type and the page type */
    pages?: (RootQueryToPageConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null), 
    /** Arguments for filtering the connection */
    where?: (RootQueryToPageConnectionWhereArgs | null)} })
    /** A WordPress plugin */
    plugin?: (PluginGenqlSelection & { __args: {
    /** The globally unique identifier of the plugin. */
    id: Scalars['ID']} })
    /** Connection between the RootQuery type and the Plugin type */
    plugins?: (RootQueryToPluginConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null), 
    /** Arguments for filtering the connection */
    where?: (RootQueryToPluginConnectionWhereArgs | null)} })
    /** An object of the post Type.  */
    post?: (PostGenqlSelection & { __args: {
    /** The globally unique identifier of the object. */
    id: Scalars['ID'], 
    /** Type of unique identifier to fetch by. Default is Global ID */
    idType?: (PostIdType | null), 
    /** Whether to return the Preview Node instead of the Published Node. When the ID of a Node is provided along with asPreview being set to true, the preview node with un-published changes will be returned instead of the published node. If no preview node exists or the requester doesn't have proper capabilities to preview, no node will be returned. If the ID provided is a URI and has a preview query arg, it will be used as a fallback if the "asPreview" argument is not explicitly provided as an argument. */
    asPreview?: (Scalars['Boolean'] | null)} })
    /**
     * @deprecated Deprecated in favor of using the single entry point for this type with ID and IDType fields. For example, instead of postBy( id: &quot;&quot; ), use post(id: &quot;&quot; idType: &quot;&quot;)
     * A post object
     */
    postBy?: (PostGenqlSelection & { __args?: {
    /** Get the post object by its global ID */
    id?: (Scalars['ID'] | null), 
    /** Get the post by its database ID */
    postId?: (Scalars['Int'] | null), 
    /** Get the post by its uri */
    uri?: (Scalars['String'] | null), 
    /** Get the post by its slug (only available for non-hierarchical types) */
    slug?: (Scalars['String'] | null)} })
    /** A 0bject */
    postFormat?: (PostFormatGenqlSelection & { __args: {
    /** The globally unique identifier of the object. */
    id: Scalars['ID'], 
    /** Type of unique identifier to fetch by. Default is Global ID */
    idType?: (PostFormatIdType | null)} })
    /** Connection between the RootQuery type and the postFormat type */
    postFormats?: (RootQueryToPostFormatConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null), 
    /** Arguments for filtering the connection */
    where?: (RootQueryToPostFormatConnectionWhereArgs | null)} })
    /** Connection between the RootQuery type and the post type */
    posts?: (RootQueryToPostConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null), 
    /** Arguments for filtering the connection */
    where?: (RootQueryToPostConnectionWhereArgs | null)} })
    /** Fields of the &#039;ReadingSettings&#039; settings group */
    readingSettings?: ReadingSettingsGenqlSelection
    /** Connection between the RootQuery type and the EnqueuedScript type */
    registeredScripts?: (RootQueryToEnqueuedScriptConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null)} })
    /** Connection between the RootQuery type and the EnqueuedStylesheet type */
    registeredStylesheets?: (RootQueryToEnqueuedStylesheetConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null)} })
    /** Connection between the RootQuery type and the ContentNode type */
    revisions?: (RootQueryToRevisionsConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null), 
    /** Arguments for filtering the connection */
    where?: (RootQueryToRevisionsConnectionWhereArgs | null)} })
    /** A 0bject */
    tag?: (TagGenqlSelection & { __args: {
    /** The globally unique identifier of the object. */
    id: Scalars['ID'], 
    /** Type of unique identifier to fetch by. Default is Global ID */
    idType?: (TagIdType | null)} })
    /** Connection between the RootQuery type and the tag type */
    tags?: (RootQueryToTagConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null), 
    /** Arguments for filtering the connection */
    where?: (RootQueryToTagConnectionWhereArgs | null)} })
    /** Connection between the RootQuery type and the Taxonomy type */
    taxonomies?: (RootQueryToTaxonomyConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null)} })
    /** Fetch a Taxonomy node by unique Identifier */
    taxonomy?: (TaxonomyGenqlSelection & { __args: {
    /** Unique Identifier for the Taxonomy node. */
    id: Scalars['ID'], 
    /** Type of unique identifier to fetch a taxonomy by. Default is Global ID */
    idType?: (TaxonomyIdTypeEnum | null)} })
    /** A node in a taxonomy used to group and relate content nodes */
    termNode?: (TermNodeGenqlSelection & { __args: {
    /** Unique identifier for the term node. */
    id: Scalars['ID'], 
    /** Type of unique identifier to fetch a term node by. Default is Global ID */
    idType?: (TermNodeIdTypeEnum | null), 
    /** The taxonomy of the tern node. Required when idType is set to "name" or "slug" */
    taxonomy?: (TaxonomyEnum | null)} })
    /** Connection between the RootQuery type and the TermNode type */
    terms?: (RootQueryToTermNodeConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null), 
    /** Arguments for filtering the connection */
    where?: (RootQueryToTermNodeConnectionWhereArgs | null)} })
    /** A Theme object */
    theme?: (ThemeGenqlSelection & { __args: {
    /** The globally unique identifier of the theme. */
    id: Scalars['ID']} })
    /** Connection between the RootQuery type and the Theme type */
    themes?: (RootQueryToThemeConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null)} })
    /** Returns a user */
    user?: (UserGenqlSelection & { __args: {
    /** The globally unique identifier of the user. */
    id: Scalars['ID'], 
    /** Type of unique identifier to fetch a user by. Default is Global ID */
    idType?: (UserNodeIdTypeEnum | null)} })
    /** Returns a user role */
    userRole?: (UserRoleGenqlSelection & { __args: {
    /** The globally unique identifier of the user object. */
    id: Scalars['ID']} })
    /** Connection between the RootQuery type and the UserRole type */
    userRoles?: (RootQueryToUserRoleConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null)} })
    /** Connection between the RootQuery type and the User type */
    users?: (RootQueryToUserConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null), 
    /** Arguments for filtering the connection */
    where?: (RootQueryToUserConnectionWhereArgs | null)} })
    /** Returns the current user */
    viewer?: UserGenqlSelection
    /** Fields of the &#039;WritingSettings&#039; settings group */
    writingSettings?: WritingSettingsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** All of the registered settings */
export interface SettingsGenqlSelection{
    /** Settings of the the string Settings Group */
    discussionSettingsDefaultCommentStatus?: boolean | number
    /** Settings of the the string Settings Group */
    discussionSettingsDefaultPingStatus?: boolean | number
    /** Settings of the the string Settings Group */
    generalSettingsDateFormat?: boolean | number
    /** Settings of the the string Settings Group */
    generalSettingsDescription?: boolean | number
    /** Settings of the the string Settings Group */
    generalSettingsLanguage?: boolean | number
    /** Settings of the the integer Settings Group */
    generalSettingsStartOfWeek?: boolean | number
    /** Settings of the the string Settings Group */
    generalSettingsTimeFormat?: boolean | number
    /** Settings of the the string Settings Group */
    generalSettingsTimezone?: boolean | number
    /** Settings of the the string Settings Group */
    generalSettingsTitle?: boolean | number
    /** Settings of the the integer Settings Group */
    readingSettingsPageForPosts?: boolean | number
    /** Settings of the the integer Settings Group */
    readingSettingsPageOnFront?: boolean | number
    /** Settings of the the integer Settings Group */
    readingSettingsPostsPerPage?: boolean | number
    /** Settings of the the string Settings Group */
    readingSettingsShowOnFront?: boolean | number
    /** Settings of the the integer Settings Group */
    writingSettingsDefaultCategory?: boolean | number
    /** Settings of the the string Settings Group */
    writingSettingsDefaultPostFormat?: boolean | number
    /** Settings of the the boolean Settings Group */
    writingSettingsUseSmilies?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Arguments for filtering the RootQueryToCategoryConnection connection */
export interface RootQueryToCategoryConnectionWhereArgs {
/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
cacheDomain?: (Scalars['String'] | null),
/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
childOf?: (Scalars['Int'] | null),
/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
childless?: (Scalars['Boolean'] | null),
/** Retrieve terms where the description is LIKE the input value. Default empty. */
descriptionLike?: (Scalars['String'] | null),
/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
exclude?: ((Scalars['ID'] | null)[] | null),
/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
excludeTree?: ((Scalars['ID'] | null)[] | null),
/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
hideEmpty?: (Scalars['Boolean'] | null),
/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
hierarchical?: (Scalars['Boolean'] | null),
/** Array of term ids to include. Default empty array. */
include?: ((Scalars['ID'] | null)[] | null),
/** Array of names to return term(s) for. Default empty. */
name?: ((Scalars['String'] | null)[] | null),
/** Retrieve terms where the name is LIKE the input value. Default empty. */
nameLike?: (Scalars['String'] | null),
/** Array of object IDs. Results will be limited to terms associated with these objects. */
objectIds?: ((Scalars['ID'] | null)[] | null),
/** Direction the connection should be ordered in */
order?: (OrderEnum | null),
/** Field(s) to order terms by. Defaults to 'name'. */
orderby?: (TermObjectsConnectionOrderbyEnum | null),
/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
padCounts?: (Scalars['Boolean'] | null),
/** Parent term ID to retrieve direct-child terms of. Default empty. */
parent?: (Scalars['Int'] | null),
/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
search?: (Scalars['String'] | null),
/** Array of slugs to return term(s) for. Default empty. */
slug?: ((Scalars['String'] | null)[] | null),
/** Array of term taxonomy IDs, to match when querying terms. */
termTaxonomId?: ((Scalars['ID'] | null)[] | null),
/** Array of term taxonomy IDs, to match when querying terms. */
termTaxonomyId?: ((Scalars['ID'] | null)[] | null),
/** Whether to prime meta caches for matched terms. Default true. */
updateTermMetaCache?: (Scalars['Boolean'] | null)}


/** Connection between the RootQuery type and the category type */
export interface RootQueryToCategoryConnectionGenqlSelection{
    /** Edges for the RootQueryToCategoryConnection connection */
    edges?: RootQueryToCategoryConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: CategoryGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: RootQueryToCategoryConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection to category Nodes */
export interface CategoryConnectionGenqlSelection{
    /** A list of edges (relational context) between RootQuery and connected category Nodes */
    edges?: CategoryConnectionEdgeGenqlSelection
    /** A list of connected category Nodes */
    nodes?: CategoryGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: CategoryConnectionPageInfoGenqlSelection
    on_RootQueryToCategoryConnection?: RootQueryToCategoryConnectionGenqlSelection
    on_CategoryToAncestorsCategoryConnection?: CategoryToAncestorsCategoryConnectionGenqlSelection
    on_CategoryToCategoryConnection?: CategoryToCategoryConnectionGenqlSelection
    on_PostToCategoryConnection?: PostToCategoryConnectionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A plural connection from one Node Type in the Graph to another Node Type, with support for relational data via &quot;edges&quot;. */
export interface ConnectionGenqlSelection{
    /** A list of edges (relational context) between connected nodes */
    edges?: EdgeGenqlSelection
    /** A list of connected nodes */
    nodes?: NodeGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: PageInfoGenqlSelection
    on_RootQueryToCategoryConnection?: RootQueryToCategoryConnectionGenqlSelection
    on_TermNodeToEnqueuedScriptConnection?: TermNodeToEnqueuedScriptConnectionGenqlSelection
    on_TermNodeToEnqueuedStylesheetConnection?: TermNodeToEnqueuedStylesheetConnectionGenqlSelection
    on_CategoryToAncestorsCategoryConnection?: CategoryToAncestorsCategoryConnectionGenqlSelection
    on_CategoryToCategoryConnection?: CategoryToCategoryConnectionGenqlSelection
    on_CategoryToContentNodeConnection?: CategoryToContentNodeConnectionGenqlSelection
    on_ContentTypeToTaxonomyConnection?: ContentTypeToTaxonomyConnectionGenqlSelection
    on_TaxonomyToContentTypeConnection?: TaxonomyToContentTypeConnectionGenqlSelection
    on_TaxonomyToTermNodeConnection?: TaxonomyToTermNodeConnectionGenqlSelection
    on_ContentTypeToContentNodeConnection?: ContentTypeToContentNodeConnectionGenqlSelection
    on_UserToCommentConnection?: UserToCommentConnectionGenqlSelection
    on_CommentToCommentConnection?: CommentToCommentConnectionGenqlSelection
    on_UserToEnqueuedScriptConnection?: UserToEnqueuedScriptConnectionGenqlSelection
    on_UserToEnqueuedStylesheetConnection?: UserToEnqueuedStylesheetConnectionGenqlSelection
    on_UserToMediaItemConnection?: UserToMediaItemConnectionGenqlSelection
    on_HierarchicalContentNodeToContentNodeAncestorsConnection?: HierarchicalContentNodeToContentNodeAncestorsConnectionGenqlSelection
    on_HierarchicalContentNodeToContentNodeChildrenConnection?: HierarchicalContentNodeToContentNodeChildrenConnectionGenqlSelection
    on_ContentNodeToEnqueuedScriptConnection?: ContentNodeToEnqueuedScriptConnectionGenqlSelection
    on_ContentNodeToEnqueuedStylesheetConnection?: ContentNodeToEnqueuedStylesheetConnectionGenqlSelection
    on_MediaItemToCommentConnection?: MediaItemToCommentConnectionGenqlSelection
    on_UserToPageConnection?: UserToPageConnectionGenqlSelection
    on_PageToCommentConnection?: PageToCommentConnectionGenqlSelection
    on_PageToRevisionConnection?: PageToRevisionConnectionGenqlSelection
    on_UserToPostConnection?: UserToPostConnectionGenqlSelection
    on_PostToPostConnection?: PostToPostConnectionGenqlSelection
    on_PostToCategoryConnection?: PostToCategoryConnectionGenqlSelection
    on_PostToCommentConnection?: PostToCommentConnectionGenqlSelection
    on_PostToPostFormatConnection?: PostToPostFormatConnectionGenqlSelection
    on_PostFormatToContentNodeConnection?: PostFormatToContentNodeConnectionGenqlSelection
    on_PostFormatToPostConnection?: PostFormatToPostConnectionGenqlSelection
    on_PostToRevisionConnection?: PostToRevisionConnectionGenqlSelection
    on_PostToTagConnection?: PostToTagConnectionGenqlSelection
    on_TagToContentNodeConnection?: TagToContentNodeConnectionGenqlSelection
    on_TagToPostConnection?: TagToPostConnectionGenqlSelection
    on_PostToTermNodeConnection?: PostToTermNodeConnectionGenqlSelection
    on_UserToRevisionsConnection?: UserToRevisionsConnectionGenqlSelection
    on_UserToUserRoleConnection?: UserToUserRoleConnectionGenqlSelection
    on_CategoryToPostConnection?: CategoryToPostConnectionGenqlSelection
    on_RootQueryToCommentConnection?: RootQueryToCommentConnectionGenqlSelection
    on_RootQueryToContentNodeConnection?: RootQueryToContentNodeConnectionGenqlSelection
    on_RootQueryToContentTypeConnection?: RootQueryToContentTypeConnectionGenqlSelection
    on_RootQueryToMediaItemConnection?: RootQueryToMediaItemConnectionGenqlSelection
    on_MenuToMenuItemConnection?: MenuToMenuItemConnectionGenqlSelection
    on_MenuItemToMenuItemConnection?: MenuItemToMenuItemConnectionGenqlSelection
    on_RootQueryToMenuItemConnection?: RootQueryToMenuItemConnectionGenqlSelection
    on_RootQueryToMenuConnection?: RootQueryToMenuConnectionGenqlSelection
    on_RootQueryToPageConnection?: RootQueryToPageConnectionGenqlSelection
    on_RootQueryToPluginConnection?: RootQueryToPluginConnectionGenqlSelection
    on_RootQueryToPostFormatConnection?: RootQueryToPostFormatConnectionGenqlSelection
    on_RootQueryToPostConnection?: RootQueryToPostConnectionGenqlSelection
    on_RootQueryToEnqueuedScriptConnection?: RootQueryToEnqueuedScriptConnectionGenqlSelection
    on_RootQueryToEnqueuedStylesheetConnection?: RootQueryToEnqueuedStylesheetConnectionGenqlSelection
    on_RootQueryToRevisionsConnection?: RootQueryToRevisionsConnectionGenqlSelection
    on_RootQueryToTagConnection?: RootQueryToTagConnectionGenqlSelection
    on_RootQueryToTaxonomyConnection?: RootQueryToTaxonomyConnectionGenqlSelection
    on_RootQueryToTermNodeConnection?: RootQueryToTermNodeConnectionGenqlSelection
    on_RootQueryToThemeConnection?: RootQueryToThemeConnectionGenqlSelection
    on_RootQueryToUserRoleConnection?: RootQueryToUserRoleConnectionGenqlSelection
    on_RootQueryToUserConnection?: RootQueryToUserConnectionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Relational context between connected nodes */
export interface EdgeGenqlSelection{
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: boolean | number
    /** The connected node */
    node?: NodeGenqlSelection
    on_TermNodeToEnqueuedScriptConnectionEdge?: TermNodeToEnqueuedScriptConnectionEdgeGenqlSelection
    on_TermNodeToEnqueuedStylesheetConnectionEdge?: TermNodeToEnqueuedStylesheetConnectionEdgeGenqlSelection
    on_CategoryToAncestorsCategoryConnectionEdge?: CategoryToAncestorsCategoryConnectionEdgeGenqlSelection
    on_CategoryToCategoryConnectionEdge?: CategoryToCategoryConnectionEdgeGenqlSelection
    on_ContentNodeToContentTypeConnectionEdge?: ContentNodeToContentTypeConnectionEdgeGenqlSelection
    on_TaxonomyToContentTypeConnectionEdge?: TaxonomyToContentTypeConnectionEdgeGenqlSelection
    on_TaxonomyToTermNodeConnectionEdge?: TaxonomyToTermNodeConnectionEdgeGenqlSelection
    on_ContentTypeToTaxonomyConnectionEdge?: ContentTypeToTaxonomyConnectionEdgeGenqlSelection
    on_ContentTypeToContentNodeConnectionEdge?: ContentTypeToContentNodeConnectionEdgeGenqlSelection
    on_ContentNodeToEditLockConnectionEdge?: ContentNodeToEditLockConnectionEdgeGenqlSelection
    on_CommentToCommenterConnectionEdge?: CommentToCommenterConnectionEdgeGenqlSelection
    on_CommentToContentNodeConnectionEdge?: CommentToContentNodeConnectionEdgeGenqlSelection
    on_CommentToParentCommentConnectionEdge?: CommentToParentCommentConnectionEdgeGenqlSelection
    on_CommentToCommentConnectionEdge?: CommentToCommentConnectionEdgeGenqlSelection
    on_UserToCommentConnectionEdge?: UserToCommentConnectionEdgeGenqlSelection
    on_UserToEnqueuedScriptConnectionEdge?: UserToEnqueuedScriptConnectionEdgeGenqlSelection
    on_UserToEnqueuedStylesheetConnectionEdge?: UserToEnqueuedStylesheetConnectionEdgeGenqlSelection
    on_NodeWithAuthorToUserConnectionEdge?: NodeWithAuthorToUserConnectionEdgeGenqlSelection
    on_HierarchicalContentNodeToContentNodeAncestorsConnectionEdge?: HierarchicalContentNodeToContentNodeAncestorsConnectionEdgeGenqlSelection
    on_HierarchicalContentNodeToContentNodeChildrenConnectionEdge?: HierarchicalContentNodeToContentNodeChildrenConnectionEdgeGenqlSelection
    on_ContentNodeToEnqueuedScriptConnectionEdge?: ContentNodeToEnqueuedScriptConnectionEdgeGenqlSelection
    on_ContentNodeToEnqueuedStylesheetConnectionEdge?: ContentNodeToEnqueuedStylesheetConnectionEdgeGenqlSelection
    on_ContentNodeToEditLastConnectionEdge?: ContentNodeToEditLastConnectionEdgeGenqlSelection
    on_HierarchicalContentNodeToParentContentNodeConnectionEdge?: HierarchicalContentNodeToParentContentNodeConnectionEdgeGenqlSelection
    on_MediaItemToCommentConnectionEdge?: MediaItemToCommentConnectionEdgeGenqlSelection
    on_UserToMediaItemConnectionEdge?: UserToMediaItemConnectionEdgeGenqlSelection
    on_NodeWithFeaturedImageToMediaItemConnectionEdge?: NodeWithFeaturedImageToMediaItemConnectionEdgeGenqlSelection
    on_NodeWithRevisionsToContentNodeConnectionEdge?: NodeWithRevisionsToContentNodeConnectionEdgeGenqlSelection
    on_PageToCommentConnectionEdge?: PageToCommentConnectionEdgeGenqlSelection
    on_PageToPreviewConnectionEdge?: PageToPreviewConnectionEdgeGenqlSelection
    on_PageToRevisionConnectionEdge?: PageToRevisionConnectionEdgeGenqlSelection
    on_UserToPageConnectionEdge?: UserToPageConnectionEdgeGenqlSelection
    on_PostToPostConnectionEdge?: PostToPostConnectionEdgeGenqlSelection
    on_PostToCategoryConnectionEdge?: PostToCategoryConnectionEdgeGenqlSelection
    on_PostToCommentConnectionEdge?: PostToCommentConnectionEdgeGenqlSelection
    on_PostToParentConnectionEdge?: PostToParentConnectionEdgeGenqlSelection
    on_PostFormatToContentNodeConnectionEdge?: PostFormatToContentNodeConnectionEdgeGenqlSelection
    on_PostFormatToPostConnectionEdge?: PostFormatToPostConnectionEdgeGenqlSelection
    on_PostFormatToTaxonomyConnectionEdge?: PostFormatToTaxonomyConnectionEdgeGenqlSelection
    on_PostToPostFormatConnectionEdge?: PostToPostFormatConnectionEdgeGenqlSelection
    on_PostToPreviewConnectionEdge?: PostToPreviewConnectionEdgeGenqlSelection
    on_PostToRevisionConnectionEdge?: PostToRevisionConnectionEdgeGenqlSelection
    on_TagToContentNodeConnectionEdge?: TagToContentNodeConnectionEdgeGenqlSelection
    on_TagToPostConnectionEdge?: TagToPostConnectionEdgeGenqlSelection
    on_TagToTaxonomyConnectionEdge?: TagToTaxonomyConnectionEdgeGenqlSelection
    on_PostToTagConnectionEdge?: PostToTagConnectionEdgeGenqlSelection
    on_PostToTermNodeConnectionEdge?: PostToTermNodeConnectionEdgeGenqlSelection
    on_UserToPostConnectionEdge?: UserToPostConnectionEdgeGenqlSelection
    on_UserToRevisionsConnectionEdge?: UserToRevisionsConnectionEdgeGenqlSelection
    on_UserToUserRoleConnectionEdge?: UserToUserRoleConnectionEdgeGenqlSelection
    on_CategoryToContentNodeConnectionEdge?: CategoryToContentNodeConnectionEdgeGenqlSelection
    on_CategoryToParentCategoryConnectionEdge?: CategoryToParentCategoryConnectionEdgeGenqlSelection
    on_CategoryToPostConnectionEdge?: CategoryToPostConnectionEdgeGenqlSelection
    on_CategoryToTaxonomyConnectionEdge?: CategoryToTaxonomyConnectionEdgeGenqlSelection
    on_RootQueryToCategoryConnectionEdge?: RootQueryToCategoryConnectionEdgeGenqlSelection
    on_RootQueryToCommentConnectionEdge?: RootQueryToCommentConnectionEdgeGenqlSelection
    on_RootQueryToContentNodeConnectionEdge?: RootQueryToContentNodeConnectionEdgeGenqlSelection
    on_RootQueryToContentTypeConnectionEdge?: RootQueryToContentTypeConnectionEdgeGenqlSelection
    on_RootQueryToMediaItemConnectionEdge?: RootQueryToMediaItemConnectionEdgeGenqlSelection
    on_MenuItemToMenuItemConnectionEdge?: MenuItemToMenuItemConnectionEdgeGenqlSelection
    on_MenuItemToMenuItemLinkableConnectionEdge?: MenuItemToMenuItemLinkableConnectionEdgeGenqlSelection
    on_MenuItemToMenuConnectionEdge?: MenuItemToMenuConnectionEdgeGenqlSelection
    on_MenuToMenuItemConnectionEdge?: MenuToMenuItemConnectionEdgeGenqlSelection
    on_RootQueryToMenuItemConnectionEdge?: RootQueryToMenuItemConnectionEdgeGenqlSelection
    on_RootQueryToMenuConnectionEdge?: RootQueryToMenuConnectionEdgeGenqlSelection
    on_RootQueryToPageConnectionEdge?: RootQueryToPageConnectionEdgeGenqlSelection
    on_RootQueryToPluginConnectionEdge?: RootQueryToPluginConnectionEdgeGenqlSelection
    on_RootQueryToPostFormatConnectionEdge?: RootQueryToPostFormatConnectionEdgeGenqlSelection
    on_RootQueryToPostConnectionEdge?: RootQueryToPostConnectionEdgeGenqlSelection
    on_RootQueryToEnqueuedScriptConnectionEdge?: RootQueryToEnqueuedScriptConnectionEdgeGenqlSelection
    on_RootQueryToEnqueuedStylesheetConnectionEdge?: RootQueryToEnqueuedStylesheetConnectionEdgeGenqlSelection
    on_RootQueryToRevisionsConnectionEdge?: RootQueryToRevisionsConnectionEdgeGenqlSelection
    on_RootQueryToTagConnectionEdge?: RootQueryToTagConnectionEdgeGenqlSelection
    on_RootQueryToTaxonomyConnectionEdge?: RootQueryToTaxonomyConnectionEdgeGenqlSelection
    on_RootQueryToTermNodeConnectionEdge?: RootQueryToTermNodeConnectionEdgeGenqlSelection
    on_RootQueryToThemeConnectionEdge?: RootQueryToThemeConnectionEdgeGenqlSelection
    on_RootQueryToUserRoleConnectionEdge?: RootQueryToUserRoleConnectionEdgeGenqlSelection
    on_RootQueryToUserConnectionEdge?: RootQueryToUserConnectionEdgeGenqlSelection
    on_AcfMediaItemConnectionEdge?: AcfMediaItemConnectionEdgeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An object with an ID */
export interface NodeGenqlSelection{
    /** The globally unique ID for the object */
    id?: boolean | number
    on_Category?: CategoryGenqlSelection
    on_EnqueuedScript?: EnqueuedScriptGenqlSelection
    on_EnqueuedStylesheet?: EnqueuedStylesheetGenqlSelection
    on_ContentType?: ContentTypeGenqlSelection
    on_Taxonomy?: TaxonomyGenqlSelection
    on_User?: UserGenqlSelection
    on_Comment?: CommentGenqlSelection
    on_MediaItem?: MediaItemGenqlSelection
    on_Page?: PageGenqlSelection
    on_Post?: PostGenqlSelection
    on_PostFormat?: PostFormatGenqlSelection
    on_Tag?: TagGenqlSelection
    on_UserRole?: UserRoleGenqlSelection
    on_Menu?: MenuGenqlSelection
    on_MenuItem?: MenuItemGenqlSelection
    on_Plugin?: PluginGenqlSelection
    on_Theme?: ThemeGenqlSelection
    on_CommentAuthor?: CommentAuthorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Information about pagination in a connection. */
export interface PageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    on_TermNodeToEnqueuedScriptConnectionPageInfo?: TermNodeToEnqueuedScriptConnectionPageInfoGenqlSelection
    on_TermNodeToEnqueuedStylesheetConnectionPageInfo?: TermNodeToEnqueuedStylesheetConnectionPageInfoGenqlSelection
    on_CategoryToAncestorsCategoryConnectionPageInfo?: CategoryToAncestorsCategoryConnectionPageInfoGenqlSelection
    on_CategoryToCategoryConnectionPageInfo?: CategoryToCategoryConnectionPageInfoGenqlSelection
    on_TaxonomyToContentTypeConnectionPageInfo?: TaxonomyToContentTypeConnectionPageInfoGenqlSelection
    on_TaxonomyToTermNodeConnectionPageInfo?: TaxonomyToTermNodeConnectionPageInfoGenqlSelection
    on_ContentTypeToTaxonomyConnectionPageInfo?: ContentTypeToTaxonomyConnectionPageInfoGenqlSelection
    on_ContentTypeToContentNodeConnectionPageInfo?: ContentTypeToContentNodeConnectionPageInfoGenqlSelection
    on_CommentToCommentConnectionPageInfo?: CommentToCommentConnectionPageInfoGenqlSelection
    on_UserToCommentConnectionPageInfo?: UserToCommentConnectionPageInfoGenqlSelection
    on_UserToEnqueuedScriptConnectionPageInfo?: UserToEnqueuedScriptConnectionPageInfoGenqlSelection
    on_UserToEnqueuedStylesheetConnectionPageInfo?: UserToEnqueuedStylesheetConnectionPageInfoGenqlSelection
    on_HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo?: HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfoGenqlSelection
    on_HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo?: HierarchicalContentNodeToContentNodeChildrenConnectionPageInfoGenqlSelection
    on_ContentNodeToEnqueuedScriptConnectionPageInfo?: ContentNodeToEnqueuedScriptConnectionPageInfoGenqlSelection
    on_ContentNodeToEnqueuedStylesheetConnectionPageInfo?: ContentNodeToEnqueuedStylesheetConnectionPageInfoGenqlSelection
    on_MediaItemToCommentConnectionPageInfo?: MediaItemToCommentConnectionPageInfoGenqlSelection
    on_UserToMediaItemConnectionPageInfo?: UserToMediaItemConnectionPageInfoGenqlSelection
    on_PageToCommentConnectionPageInfo?: PageToCommentConnectionPageInfoGenqlSelection
    on_PageToRevisionConnectionPageInfo?: PageToRevisionConnectionPageInfoGenqlSelection
    on_UserToPageConnectionPageInfo?: UserToPageConnectionPageInfoGenqlSelection
    on_PostToPostConnectionPageInfo?: PostToPostConnectionPageInfoGenqlSelection
    on_PostToCategoryConnectionPageInfo?: PostToCategoryConnectionPageInfoGenqlSelection
    on_PostToCommentConnectionPageInfo?: PostToCommentConnectionPageInfoGenqlSelection
    on_PostFormatToContentNodeConnectionPageInfo?: PostFormatToContentNodeConnectionPageInfoGenqlSelection
    on_PostFormatToPostConnectionPageInfo?: PostFormatToPostConnectionPageInfoGenqlSelection
    on_PostToPostFormatConnectionPageInfo?: PostToPostFormatConnectionPageInfoGenqlSelection
    on_PostToRevisionConnectionPageInfo?: PostToRevisionConnectionPageInfoGenqlSelection
    on_TagToContentNodeConnectionPageInfo?: TagToContentNodeConnectionPageInfoGenqlSelection
    on_TagToPostConnectionPageInfo?: TagToPostConnectionPageInfoGenqlSelection
    on_PostToTagConnectionPageInfo?: PostToTagConnectionPageInfoGenqlSelection
    on_PostToTermNodeConnectionPageInfo?: PostToTermNodeConnectionPageInfoGenqlSelection
    on_UserToPostConnectionPageInfo?: UserToPostConnectionPageInfoGenqlSelection
    on_UserToRevisionsConnectionPageInfo?: UserToRevisionsConnectionPageInfoGenqlSelection
    on_UserToUserRoleConnectionPageInfo?: UserToUserRoleConnectionPageInfoGenqlSelection
    on_CategoryToContentNodeConnectionPageInfo?: CategoryToContentNodeConnectionPageInfoGenqlSelection
    on_CategoryToPostConnectionPageInfo?: CategoryToPostConnectionPageInfoGenqlSelection
    on_RootQueryToCategoryConnectionPageInfo?: RootQueryToCategoryConnectionPageInfoGenqlSelection
    on_RootQueryToCommentConnectionPageInfo?: RootQueryToCommentConnectionPageInfoGenqlSelection
    on_RootQueryToContentNodeConnectionPageInfo?: RootQueryToContentNodeConnectionPageInfoGenqlSelection
    on_RootQueryToContentTypeConnectionPageInfo?: RootQueryToContentTypeConnectionPageInfoGenqlSelection
    on_RootQueryToMediaItemConnectionPageInfo?: RootQueryToMediaItemConnectionPageInfoGenqlSelection
    on_MenuItemToMenuItemConnectionPageInfo?: MenuItemToMenuItemConnectionPageInfoGenqlSelection
    on_MenuToMenuItemConnectionPageInfo?: MenuToMenuItemConnectionPageInfoGenqlSelection
    on_RootQueryToMenuItemConnectionPageInfo?: RootQueryToMenuItemConnectionPageInfoGenqlSelection
    on_RootQueryToMenuConnectionPageInfo?: RootQueryToMenuConnectionPageInfoGenqlSelection
    on_RootQueryToPageConnectionPageInfo?: RootQueryToPageConnectionPageInfoGenqlSelection
    on_RootQueryToPluginConnectionPageInfo?: RootQueryToPluginConnectionPageInfoGenqlSelection
    on_RootQueryToPostFormatConnectionPageInfo?: RootQueryToPostFormatConnectionPageInfoGenqlSelection
    on_RootQueryToPostConnectionPageInfo?: RootQueryToPostConnectionPageInfoGenqlSelection
    on_RootQueryToEnqueuedScriptConnectionPageInfo?: RootQueryToEnqueuedScriptConnectionPageInfoGenqlSelection
    on_RootQueryToEnqueuedStylesheetConnectionPageInfo?: RootQueryToEnqueuedStylesheetConnectionPageInfoGenqlSelection
    on_RootQueryToRevisionsConnectionPageInfo?: RootQueryToRevisionsConnectionPageInfoGenqlSelection
    on_RootQueryToTagConnectionPageInfo?: RootQueryToTagConnectionPageInfoGenqlSelection
    on_RootQueryToTaxonomyConnectionPageInfo?: RootQueryToTaxonomyConnectionPageInfoGenqlSelection
    on_RootQueryToTermNodeConnectionPageInfo?: RootQueryToTermNodeConnectionPageInfoGenqlSelection
    on_RootQueryToThemeConnectionPageInfo?: RootQueryToThemeConnectionPageInfoGenqlSelection
    on_RootQueryToUserRoleConnectionPageInfo?: RootQueryToUserRoleConnectionPageInfoGenqlSelection
    on_RootQueryToUserConnectionPageInfo?: RootQueryToUserConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Edge between a Node and a connected category */
export interface CategoryConnectionEdgeGenqlSelection{
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: boolean | number
    /** The connected category Node */
    node?: CategoryGenqlSelection
    on_CategoryToAncestorsCategoryConnectionEdge?: CategoryToAncestorsCategoryConnectionEdgeGenqlSelection
    on_CategoryToCategoryConnectionEdge?: CategoryToCategoryConnectionEdgeGenqlSelection
    on_PostToCategoryConnectionEdge?: PostToCategoryConnectionEdgeGenqlSelection
    on_CategoryToParentCategoryConnectionEdge?: CategoryToParentCategoryConnectionEdgeGenqlSelection
    on_RootQueryToCategoryConnectionEdge?: RootQueryToCategoryConnectionEdgeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The category type */
export interface CategoryGenqlSelection{
    /** The ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
    ancestors?: (CategoryToAncestorsCategoryConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null)} })
    /**
     * @deprecated Deprecated in favor of databaseId
     * The id field matches the WP_Post-&gt;ID field.
     */
    categoryId?: boolean | number
    /** Connection between the category type and its children categories. */
    children?: (CategoryToCategoryConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null), 
    /** Arguments for filtering the connection */
    where?: (CategoryToCategoryConnectionWhereArgs | null)} })
    /** Connection between the Category type and the ContentNode type */
    contentNodes?: (CategoryToContentNodeConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null), 
    /** Arguments for filtering the connection */
    where?: (CategoryToContentNodeConnectionWhereArgs | null)} })
    /** The number of objects connected to the object */
    count?: boolean | number
    /** The unique identifier stored in the database */
    databaseId?: boolean | number
    /** The description of the object */
    description?: boolean | number
    /** Connection between the TermNode type and the EnqueuedScript type */
    enqueuedScripts?: (TermNodeToEnqueuedScriptConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null)} })
    /** Connection between the TermNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: (TermNodeToEnqueuedStylesheetConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null)} })
    /** The globally unique ID for the object */
    id?: boolean | number
    /** Whether the node is a Comment */
    isComment?: boolean | number
    /** Whether the node is a Content Node */
    isContentNode?: boolean | number
    /** Whether the node represents the front page. */
    isFrontPage?: boolean | number
    /** Whether  the node represents the blog page. */
    isPostsPage?: boolean | number
    /** Whether the object is restricted from the current viewer */
    isRestricted?: boolean | number
    /** Whether the node is a Term */
    isTermNode?: boolean | number
    /** The link to the term */
    link?: boolean | number
    /** The human friendly name of the object. */
    name?: boolean | number
    /** Connection between the category type and its parent category. */
    parent?: CategoryToParentCategoryConnectionEdgeGenqlSelection
    /** Database id of the parent node */
    parentDatabaseId?: boolean | number
    /** The globally unique identifier of the parent node. */
    parentId?: boolean | number
    /** Connection between the Category type and the post type */
    posts?: (CategoryToPostConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null), 
    /** Arguments for filtering the connection */
    where?: (CategoryToPostConnectionWhereArgs | null)} })
    /** An alphanumeric identifier for the object unique to its type. */
    slug?: boolean | number
    /** Connection between the Category type and the Taxonomy type */
    taxonomy?: CategoryToTaxonomyConnectionEdgeGenqlSelection
    /** The name of the taxonomy that the object is associated with */
    taxonomyName?: boolean | number
    /** The ID of the term group that this term object belongs to */
    termGroupId?: boolean | number
    /** The taxonomy ID that the object is associated with */
    termTaxonomyId?: boolean | number
    /** The unique resource identifier path */
    uri?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Terms are nodes within a Taxonomy, used to group and relate other nodes. */
export interface TermNodeGenqlSelection{
    /** The number of objects connected to the object */
    count?: boolean | number
    /** Identifies the primary key from the database. */
    databaseId?: boolean | number
    /** The description of the object */
    description?: boolean | number
    /** Connection between the TermNode type and the EnqueuedScript type */
    enqueuedScripts?: (TermNodeToEnqueuedScriptConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null)} })
    /** Connection between the TermNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: (TermNodeToEnqueuedStylesheetConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null)} })
    /** The globally unique ID for the object */
    id?: boolean | number
    /** Whether the node is a Comment */
    isComment?: boolean | number
    /** Whether the node is a Content Node */
    isContentNode?: boolean | number
    /** Whether the node represents the front page. */
    isFrontPage?: boolean | number
    /** Whether  the node represents the blog page. */
    isPostsPage?: boolean | number
    /** Whether the object is restricted from the current viewer */
    isRestricted?: boolean | number
    /** Whether the node is a Term */
    isTermNode?: boolean | number
    /** The link to the term */
    link?: boolean | number
    /** The human friendly name of the object. */
    name?: boolean | number
    /** An alphanumeric identifier for the object unique to its type. */
    slug?: boolean | number
    /** The name of the taxonomy that the object is associated with */
    taxonomyName?: boolean | number
    /** The ID of the term group that this term object belongs to */
    termGroupId?: boolean | number
    /** The taxonomy ID that the object is associated with */
    termTaxonomyId?: boolean | number
    /** The unique resource identifier path */
    uri?: boolean | number
    on_Category?: CategoryGenqlSelection
    on_PostFormat?: PostFormatGenqlSelection
    on_Tag?: TagGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Any node that has a URI */
export interface UniformResourceIdentifiableGenqlSelection{
    /** The globally unique ID for the object */
    id?: boolean | number
    /** Whether the node is a Comment */
    isComment?: boolean | number
    /** Whether the node is a Content Node */
    isContentNode?: boolean | number
    /** Whether the node represents the front page. */
    isFrontPage?: boolean | number
    /** Whether  the node represents the blog page. */
    isPostsPage?: boolean | number
    /** Whether the node is a Term */
    isTermNode?: boolean | number
    /** The unique resource identifier path */
    uri?: boolean | number
    on_Category?: CategoryGenqlSelection
    on_ContentType?: ContentTypeGenqlSelection
    on_User?: UserGenqlSelection
    on_Comment?: CommentGenqlSelection
    on_MediaItem?: MediaItemGenqlSelection
    on_Page?: PageGenqlSelection
    on_Post?: PostGenqlSelection
    on_PostFormat?: PostFormatGenqlSelection
    on_Tag?: TagGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection between the TermNode type and the EnqueuedScript type */
export interface TermNodeToEnqueuedScriptConnectionGenqlSelection{
    /** Edges for the TermNodeToEnqueuedScriptConnection connection */
    edges?: TermNodeToEnqueuedScriptConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: EnqueuedScriptGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: TermNodeToEnqueuedScriptConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection to EnqueuedScript Nodes */
export interface EnqueuedScriptConnectionGenqlSelection{
    /** A list of edges (relational context) between ContentNode and connected EnqueuedScript Nodes */
    edges?: EnqueuedScriptConnectionEdgeGenqlSelection
    /** A list of connected EnqueuedScript Nodes */
    nodes?: EnqueuedScriptGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: EnqueuedScriptConnectionPageInfoGenqlSelection
    on_TermNodeToEnqueuedScriptConnection?: TermNodeToEnqueuedScriptConnectionGenqlSelection
    on_UserToEnqueuedScriptConnection?: UserToEnqueuedScriptConnectionGenqlSelection
    on_ContentNodeToEnqueuedScriptConnection?: ContentNodeToEnqueuedScriptConnectionGenqlSelection
    on_RootQueryToEnqueuedScriptConnection?: RootQueryToEnqueuedScriptConnectionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Edge between a Node and a connected EnqueuedScript */
export interface EnqueuedScriptConnectionEdgeGenqlSelection{
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: boolean | number
    /** The connected EnqueuedScript Node */
    node?: EnqueuedScriptGenqlSelection
    on_TermNodeToEnqueuedScriptConnectionEdge?: TermNodeToEnqueuedScriptConnectionEdgeGenqlSelection
    on_UserToEnqueuedScriptConnectionEdge?: UserToEnqueuedScriptConnectionEdgeGenqlSelection
    on_ContentNodeToEnqueuedScriptConnectionEdge?: ContentNodeToEnqueuedScriptConnectionEdgeGenqlSelection
    on_RootQueryToEnqueuedScriptConnectionEdge?: RootQueryToEnqueuedScriptConnectionEdgeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Script enqueued by the CMS */
export interface EnqueuedScriptGenqlSelection{
    /** The inline code to be run after the asset is loaded. */
    after?: boolean | number
    /**
     * @deprecated Use `EnqueuedAsset.media` instead.
     * Deprecated
     */
    args?: boolean | number
    /** The inline code to be run before the asset is loaded. */
    before?: boolean | number
    /** The HTML conditional comment for the enqueued asset. E.g. IE 6, lte IE 7, etc */
    conditional?: boolean | number
    /** Dependencies needed to use this asset */
    dependencies?: EnqueuedScriptGenqlSelection
    /**
     * @deprecated Use `EnqueuedScript.extraData` instead.
     * Extra information needed for the script
     */
    extra?: boolean | number
    /** Extra data supplied to the enqueued script */
    extraData?: boolean | number
    /** The handle of the enqueued asset */
    handle?: boolean | number
    /** The global ID of the enqueued script */
    id?: boolean | number
    /** The source of the asset */
    src?: boolean | number
    /** The loading strategy to use on the script tag */
    strategy?: boolean | number
    /** The version of the enqueued script */
    version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Asset enqueued by the CMS */
export interface EnqueuedAssetGenqlSelection{
    /** The inline code to be run after the asset is loaded. */
    after?: boolean | number
    /**
     * @deprecated Use `EnqueuedAsset.media` instead.
     * Deprecated
     */
    args?: boolean | number
    /** The inline code to be run before the asset is loaded. */
    before?: boolean | number
    /** The HTML conditional comment for the enqueued asset. E.g. IE 6, lte IE 7, etc */
    conditional?: boolean | number
    /** Dependencies needed to use this asset */
    dependencies?: EnqueuedAssetGenqlSelection
    /**
     * @deprecated Use `EnqueuedScript.extraData` instead.
     * Extra information needed for the script
     */
    extra?: boolean | number
    /** The handle of the enqueued asset */
    handle?: boolean | number
    /** The ID of the enqueued asset */
    id?: boolean | number
    /** The source of the asset */
    src?: boolean | number
    /** The version of the enqueued asset */
    version?: boolean | number
    on_EnqueuedScript?: EnqueuedScriptGenqlSelection
    on_EnqueuedStylesheet?: EnqueuedStylesheetGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the connected EnqueuedScriptConnectionEdge */
export interface EnqueuedScriptConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    on_TermNodeToEnqueuedScriptConnectionPageInfo?: TermNodeToEnqueuedScriptConnectionPageInfoGenqlSelection
    on_UserToEnqueuedScriptConnectionPageInfo?: UserToEnqueuedScriptConnectionPageInfoGenqlSelection
    on_ContentNodeToEnqueuedScriptConnectionPageInfo?: ContentNodeToEnqueuedScriptConnectionPageInfoGenqlSelection
    on_RootQueryToEnqueuedScriptConnectionPageInfo?: RootQueryToEnqueuedScriptConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Information about pagination in a connection. */
export interface WPPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    on_TermNodeToEnqueuedScriptConnectionPageInfo?: TermNodeToEnqueuedScriptConnectionPageInfoGenqlSelection
    on_TermNodeToEnqueuedStylesheetConnectionPageInfo?: TermNodeToEnqueuedStylesheetConnectionPageInfoGenqlSelection
    on_CategoryToAncestorsCategoryConnectionPageInfo?: CategoryToAncestorsCategoryConnectionPageInfoGenqlSelection
    on_CategoryToCategoryConnectionPageInfo?: CategoryToCategoryConnectionPageInfoGenqlSelection
    on_TaxonomyToContentTypeConnectionPageInfo?: TaxonomyToContentTypeConnectionPageInfoGenqlSelection
    on_TaxonomyToTermNodeConnectionPageInfo?: TaxonomyToTermNodeConnectionPageInfoGenqlSelection
    on_ContentTypeToTaxonomyConnectionPageInfo?: ContentTypeToTaxonomyConnectionPageInfoGenqlSelection
    on_ContentTypeToContentNodeConnectionPageInfo?: ContentTypeToContentNodeConnectionPageInfoGenqlSelection
    on_CommentToCommentConnectionPageInfo?: CommentToCommentConnectionPageInfoGenqlSelection
    on_UserToCommentConnectionPageInfo?: UserToCommentConnectionPageInfoGenqlSelection
    on_UserToEnqueuedScriptConnectionPageInfo?: UserToEnqueuedScriptConnectionPageInfoGenqlSelection
    on_UserToEnqueuedStylesheetConnectionPageInfo?: UserToEnqueuedStylesheetConnectionPageInfoGenqlSelection
    on_HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo?: HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfoGenqlSelection
    on_HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo?: HierarchicalContentNodeToContentNodeChildrenConnectionPageInfoGenqlSelection
    on_ContentNodeToEnqueuedScriptConnectionPageInfo?: ContentNodeToEnqueuedScriptConnectionPageInfoGenqlSelection
    on_ContentNodeToEnqueuedStylesheetConnectionPageInfo?: ContentNodeToEnqueuedStylesheetConnectionPageInfoGenqlSelection
    on_MediaItemToCommentConnectionPageInfo?: MediaItemToCommentConnectionPageInfoGenqlSelection
    on_UserToMediaItemConnectionPageInfo?: UserToMediaItemConnectionPageInfoGenqlSelection
    on_PageToCommentConnectionPageInfo?: PageToCommentConnectionPageInfoGenqlSelection
    on_PageToRevisionConnectionPageInfo?: PageToRevisionConnectionPageInfoGenqlSelection
    on_UserToPageConnectionPageInfo?: UserToPageConnectionPageInfoGenqlSelection
    on_PostToPostConnectionPageInfo?: PostToPostConnectionPageInfoGenqlSelection
    on_PostToCategoryConnectionPageInfo?: PostToCategoryConnectionPageInfoGenqlSelection
    on_PostToCommentConnectionPageInfo?: PostToCommentConnectionPageInfoGenqlSelection
    on_PostFormatToContentNodeConnectionPageInfo?: PostFormatToContentNodeConnectionPageInfoGenqlSelection
    on_PostFormatToPostConnectionPageInfo?: PostFormatToPostConnectionPageInfoGenqlSelection
    on_PostToPostFormatConnectionPageInfo?: PostToPostFormatConnectionPageInfoGenqlSelection
    on_PostToRevisionConnectionPageInfo?: PostToRevisionConnectionPageInfoGenqlSelection
    on_TagToContentNodeConnectionPageInfo?: TagToContentNodeConnectionPageInfoGenqlSelection
    on_TagToPostConnectionPageInfo?: TagToPostConnectionPageInfoGenqlSelection
    on_PostToTagConnectionPageInfo?: PostToTagConnectionPageInfoGenqlSelection
    on_PostToTermNodeConnectionPageInfo?: PostToTermNodeConnectionPageInfoGenqlSelection
    on_UserToPostConnectionPageInfo?: UserToPostConnectionPageInfoGenqlSelection
    on_UserToRevisionsConnectionPageInfo?: UserToRevisionsConnectionPageInfoGenqlSelection
    on_UserToUserRoleConnectionPageInfo?: UserToUserRoleConnectionPageInfoGenqlSelection
    on_CategoryToContentNodeConnectionPageInfo?: CategoryToContentNodeConnectionPageInfoGenqlSelection
    on_CategoryToPostConnectionPageInfo?: CategoryToPostConnectionPageInfoGenqlSelection
    on_RootQueryToCategoryConnectionPageInfo?: RootQueryToCategoryConnectionPageInfoGenqlSelection
    on_RootQueryToCommentConnectionPageInfo?: RootQueryToCommentConnectionPageInfoGenqlSelection
    on_RootQueryToContentNodeConnectionPageInfo?: RootQueryToContentNodeConnectionPageInfoGenqlSelection
    on_RootQueryToContentTypeConnectionPageInfo?: RootQueryToContentTypeConnectionPageInfoGenqlSelection
    on_RootQueryToMediaItemConnectionPageInfo?: RootQueryToMediaItemConnectionPageInfoGenqlSelection
    on_MenuItemToMenuItemConnectionPageInfo?: MenuItemToMenuItemConnectionPageInfoGenqlSelection
    on_MenuToMenuItemConnectionPageInfo?: MenuToMenuItemConnectionPageInfoGenqlSelection
    on_RootQueryToMenuItemConnectionPageInfo?: RootQueryToMenuItemConnectionPageInfoGenqlSelection
    on_RootQueryToMenuConnectionPageInfo?: RootQueryToMenuConnectionPageInfoGenqlSelection
    on_RootQueryToPageConnectionPageInfo?: RootQueryToPageConnectionPageInfoGenqlSelection
    on_RootQueryToPluginConnectionPageInfo?: RootQueryToPluginConnectionPageInfoGenqlSelection
    on_RootQueryToPostFormatConnectionPageInfo?: RootQueryToPostFormatConnectionPageInfoGenqlSelection
    on_RootQueryToPostConnectionPageInfo?: RootQueryToPostConnectionPageInfoGenqlSelection
    on_RootQueryToEnqueuedScriptConnectionPageInfo?: RootQueryToEnqueuedScriptConnectionPageInfoGenqlSelection
    on_RootQueryToEnqueuedStylesheetConnectionPageInfo?: RootQueryToEnqueuedStylesheetConnectionPageInfoGenqlSelection
    on_RootQueryToRevisionsConnectionPageInfo?: RootQueryToRevisionsConnectionPageInfoGenqlSelection
    on_RootQueryToTagConnectionPageInfo?: RootQueryToTagConnectionPageInfoGenqlSelection
    on_RootQueryToTaxonomyConnectionPageInfo?: RootQueryToTaxonomyConnectionPageInfoGenqlSelection
    on_RootQueryToTermNodeConnectionPageInfo?: RootQueryToTermNodeConnectionPageInfoGenqlSelection
    on_RootQueryToThemeConnectionPageInfo?: RootQueryToThemeConnectionPageInfoGenqlSelection
    on_RootQueryToUserRoleConnectionPageInfo?: RootQueryToUserRoleConnectionPageInfoGenqlSelection
    on_RootQueryToUserConnectionPageInfo?: RootQueryToUserConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface TermNodeToEnqueuedScriptConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: EnqueuedScriptGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;TermNodeToEnqueuedScriptConnection&quot; */
export interface TermNodeToEnqueuedScriptConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection between the TermNode type and the EnqueuedStylesheet type */
export interface TermNodeToEnqueuedStylesheetConnectionGenqlSelection{
    /** Edges for the TermNodeToEnqueuedStylesheetConnection connection */
    edges?: TermNodeToEnqueuedStylesheetConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: EnqueuedStylesheetGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: TermNodeToEnqueuedStylesheetConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection to EnqueuedStylesheet Nodes */
export interface EnqueuedStylesheetConnectionGenqlSelection{
    /** A list of edges (relational context) between ContentNode and connected EnqueuedStylesheet Nodes */
    edges?: EnqueuedStylesheetConnectionEdgeGenqlSelection
    /** A list of connected EnqueuedStylesheet Nodes */
    nodes?: EnqueuedStylesheetGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: EnqueuedStylesheetConnectionPageInfoGenqlSelection
    on_TermNodeToEnqueuedStylesheetConnection?: TermNodeToEnqueuedStylesheetConnectionGenqlSelection
    on_UserToEnqueuedStylesheetConnection?: UserToEnqueuedStylesheetConnectionGenqlSelection
    on_ContentNodeToEnqueuedStylesheetConnection?: ContentNodeToEnqueuedStylesheetConnectionGenqlSelection
    on_RootQueryToEnqueuedStylesheetConnection?: RootQueryToEnqueuedStylesheetConnectionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Edge between a Node and a connected EnqueuedStylesheet */
export interface EnqueuedStylesheetConnectionEdgeGenqlSelection{
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: boolean | number
    /** The connected EnqueuedStylesheet Node */
    node?: EnqueuedStylesheetGenqlSelection
    on_TermNodeToEnqueuedStylesheetConnectionEdge?: TermNodeToEnqueuedStylesheetConnectionEdgeGenqlSelection
    on_UserToEnqueuedStylesheetConnectionEdge?: UserToEnqueuedStylesheetConnectionEdgeGenqlSelection
    on_ContentNodeToEnqueuedStylesheetConnectionEdge?: ContentNodeToEnqueuedStylesheetConnectionEdgeGenqlSelection
    on_RootQueryToEnqueuedStylesheetConnectionEdge?: RootQueryToEnqueuedStylesheetConnectionEdgeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Stylesheet enqueued by the CMS */
export interface EnqueuedStylesheetGenqlSelection{
    /** The inline code to be run after the asset is loaded. */
    after?: boolean | number
    /**
     * @deprecated Use `EnqueuedAsset.media` instead.
     * Deprecated
     */
    args?: boolean | number
    /** The inline code to be run before the asset is loaded. */
    before?: boolean | number
    /** The HTML conditional comment for the enqueued asset. E.g. IE 6, lte IE 7, etc */
    conditional?: boolean | number
    /** Dependencies needed to use this asset */
    dependencies?: EnqueuedStylesheetGenqlSelection
    /**
     * @deprecated Use `EnqueuedScript.extraData` instead.
     * Extra information needed for the script
     */
    extra?: boolean | number
    /** The handle of the enqueued asset */
    handle?: boolean | number
    /** The global ID of the enqueued stylesheet */
    id?: boolean | number
    /** Whether the enqueued style is RTL or not */
    isRtl?: boolean | number
    /** The media attribute to use for the link */
    media?: boolean | number
    /** The absolute path to the enqueued style. Set when the stylesheet is meant to load inline. */
    path?: boolean | number
    /** The `rel` attribute to use for the link */
    rel?: boolean | number
    /** The source of the asset */
    src?: boolean | number
    /** Optional suffix, used in combination with RTL */
    suffix?: boolean | number
    /** The title of the enqueued style. Used for preferred/alternate stylesheets. */
    title?: boolean | number
    /** The version of the enqueued style */
    version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the connected EnqueuedStylesheetConnectionEdge */
export interface EnqueuedStylesheetConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    on_TermNodeToEnqueuedStylesheetConnectionPageInfo?: TermNodeToEnqueuedStylesheetConnectionPageInfoGenqlSelection
    on_UserToEnqueuedStylesheetConnectionPageInfo?: UserToEnqueuedStylesheetConnectionPageInfoGenqlSelection
    on_ContentNodeToEnqueuedStylesheetConnectionPageInfo?: ContentNodeToEnqueuedStylesheetConnectionPageInfoGenqlSelection
    on_RootQueryToEnqueuedStylesheetConnectionPageInfo?: RootQueryToEnqueuedStylesheetConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface TermNodeToEnqueuedStylesheetConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: EnqueuedStylesheetGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;TermNodeToEnqueuedStylesheetConnection&quot; */
export interface TermNodeToEnqueuedStylesheetConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Object that can be identified with a Database ID */
export interface DatabaseIdentifierGenqlSelection{
    /** The unique identifier stored in the database */
    databaseId?: boolean | number
    on_Category?: CategoryGenqlSelection
    on_User?: UserGenqlSelection
    on_Comment?: CommentGenqlSelection
    on_MediaItem?: MediaItemGenqlSelection
    on_Page?: PageGenqlSelection
    on_Post?: PostGenqlSelection
    on_PostFormat?: PostFormatGenqlSelection
    on_Tag?: TagGenqlSelection
    on_Menu?: MenuGenqlSelection
    on_MenuItem?: MenuItemGenqlSelection
    on_CommentAuthor?: CommentAuthorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Term node with hierarchical (parent/child) relationships */
export interface HierarchicalTermNodeGenqlSelection{
    /** The number of objects connected to the object */
    count?: boolean | number
    /** The unique identifier stored in the database */
    databaseId?: boolean | number
    /** The description of the object */
    description?: boolean | number
    /** Connection between the TermNode type and the EnqueuedScript type */
    enqueuedScripts?: (TermNodeToEnqueuedScriptConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null)} })
    /** Connection between the TermNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: (TermNodeToEnqueuedStylesheetConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null)} })
    /** The globally unique ID for the object */
    id?: boolean | number
    /** Whether the node is a Comment */
    isComment?: boolean | number
    /** Whether the node is a Content Node */
    isContentNode?: boolean | number
    /** Whether the node represents the front page. */
    isFrontPage?: boolean | number
    /** Whether  the node represents the blog page. */
    isPostsPage?: boolean | number
    /** Whether the object is restricted from the current viewer */
    isRestricted?: boolean | number
    /** Whether the node is a Term */
    isTermNode?: boolean | number
    /** The link to the term */
    link?: boolean | number
    /** The human friendly name of the object. */
    name?: boolean | number
    /** Database id of the parent node */
    parentDatabaseId?: boolean | number
    /** The globally unique identifier of the parent node. */
    parentId?: boolean | number
    /** An alphanumeric identifier for the object unique to its type. */
    slug?: boolean | number
    /** The name of the taxonomy that the object is associated with */
    taxonomyName?: boolean | number
    /** The ID of the term group that this term object belongs to */
    termGroupId?: boolean | number
    /** The taxonomy ID that the object is associated with */
    termTaxonomyId?: boolean | number
    /** The unique resource identifier path */
    uri?: boolean | number
    on_Category?: CategoryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Node with hierarchical (parent/child) relationships */
export interface HierarchicalNodeGenqlSelection{
    /** The unique identifier stored in the database */
    databaseId?: boolean | number
    /** The globally unique ID for the object */
    id?: boolean | number
    /** Database id of the parent node */
    parentDatabaseId?: boolean | number
    /** The globally unique identifier of the parent node. */
    parentId?: boolean | number
    on_Category?: CategoryGenqlSelection
    on_MediaItem?: MediaItemGenqlSelection
    on_Page?: PageGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Nodes that can be linked to as Menu Items */
export interface MenuItemLinkableGenqlSelection{
    /** The unique identifier stored in the database */
    databaseId?: boolean | number
    /** The globally unique ID for the object */
    id?: boolean | number
    /** Whether the node is a Comment */
    isComment?: boolean | number
    /** Whether the node is a Content Node */
    isContentNode?: boolean | number
    /** Whether the node represents the front page. */
    isFrontPage?: boolean | number
    /** Whether  the node represents the blog page. */
    isPostsPage?: boolean | number
    /** Whether the node is a Term */
    isTermNode?: boolean | number
    /** The unique resource identifier path */
    uri?: boolean | number
    on_Category?: CategoryGenqlSelection
    on_Page?: PageGenqlSelection
    on_Post?: PostGenqlSelection
    on_PostFormat?: PostFormatGenqlSelection
    on_Tag?: TagGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection between the Category type and the category type */
export interface CategoryToAncestorsCategoryConnectionGenqlSelection{
    /** Edges for the CategoryToAncestorsCategoryConnection connection */
    edges?: CategoryToAncestorsCategoryConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: CategoryGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: CategoryToAncestorsCategoryConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface CategoryToAncestorsCategoryConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: CategoryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;CategoryToAncestorsCategoryConnection&quot; */
export interface CategoryToAncestorsCategoryConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the connected CategoryConnectionEdge */
export interface CategoryConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    on_CategoryToAncestorsCategoryConnectionPageInfo?: CategoryToAncestorsCategoryConnectionPageInfoGenqlSelection
    on_CategoryToCategoryConnectionPageInfo?: CategoryToCategoryConnectionPageInfoGenqlSelection
    on_PostToCategoryConnectionPageInfo?: PostToCategoryConnectionPageInfoGenqlSelection
    on_RootQueryToCategoryConnectionPageInfo?: RootQueryToCategoryConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Arguments for filtering the CategoryToCategoryConnection connection */
export interface CategoryToCategoryConnectionWhereArgs {
/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
cacheDomain?: (Scalars['String'] | null),
/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
childOf?: (Scalars['Int'] | null),
/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
childless?: (Scalars['Boolean'] | null),
/** Retrieve terms where the description is LIKE the input value. Default empty. */
descriptionLike?: (Scalars['String'] | null),
/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
exclude?: ((Scalars['ID'] | null)[] | null),
/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
excludeTree?: ((Scalars['ID'] | null)[] | null),
/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
hideEmpty?: (Scalars['Boolean'] | null),
/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
hierarchical?: (Scalars['Boolean'] | null),
/** Array of term ids to include. Default empty array. */
include?: ((Scalars['ID'] | null)[] | null),
/** Array of names to return term(s) for. Default empty. */
name?: ((Scalars['String'] | null)[] | null),
/** Retrieve terms where the name is LIKE the input value. Default empty. */
nameLike?: (Scalars['String'] | null),
/** Array of object IDs. Results will be limited to terms associated with these objects. */
objectIds?: ((Scalars['ID'] | null)[] | null),
/** Direction the connection should be ordered in */
order?: (OrderEnum | null),
/** Field(s) to order terms by. Defaults to 'name'. */
orderby?: (TermObjectsConnectionOrderbyEnum | null),
/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
padCounts?: (Scalars['Boolean'] | null),
/** Parent term ID to retrieve direct-child terms of. Default empty. */
parent?: (Scalars['Int'] | null),
/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
search?: (Scalars['String'] | null),
/** Array of slugs to return term(s) for. Default empty. */
slug?: ((Scalars['String'] | null)[] | null),
/** Array of term taxonomy IDs, to match when querying terms. */
termTaxonomId?: ((Scalars['ID'] | null)[] | null),
/** Array of term taxonomy IDs, to match when querying terms. */
termTaxonomyId?: ((Scalars['ID'] | null)[] | null),
/** Whether to prime meta caches for matched terms. Default true. */
updateTermMetaCache?: (Scalars['Boolean'] | null)}


/** Connection between the Category type and the category type */
export interface CategoryToCategoryConnectionGenqlSelection{
    /** Edges for the CategoryToCategoryConnection connection */
    edges?: CategoryToCategoryConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: CategoryGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: CategoryToCategoryConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface CategoryToCategoryConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: CategoryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;CategoryToCategoryConnection&quot; */
export interface CategoryToCategoryConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Arguments for filtering the CategoryToContentNodeConnection connection */
export interface CategoryToContentNodeConnectionWhereArgs {
/** The Types of content to filter */
contentTypes?: ((ContentTypesOfCategoryEnum | null)[] | null),
/** Filter the connection based on dates */
dateQuery?: (DateQueryInput | null),
/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
hasPassword?: (Scalars['Boolean'] | null),
/** Specific database ID of the object */
id?: (Scalars['Int'] | null),
/** Array of IDs for the objects to retrieve */
in?: ((Scalars['ID'] | null)[] | null),
/** Get objects with a specific mimeType property */
mimeType?: (MimeTypeEnum | null),
/** Slug / post_name of the object */
name?: (Scalars['String'] | null),
/** Specify objects to retrieve. Use slugs */
nameIn?: ((Scalars['String'] | null)[] | null),
/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
notIn?: ((Scalars['ID'] | null)[] | null),
/** What parameter to use to order the objects by. */
orderby?: ((PostObjectsConnectionOrderbyInput | null)[] | null),
/** Use ID to return only children. Use 0 to return only top-level items */
parent?: (Scalars['ID'] | null),
/** Specify objects whose parent is in an array */
parentIn?: ((Scalars['ID'] | null)[] | null),
/** Specify posts whose parent is not in an array */
parentNotIn?: ((Scalars['ID'] | null)[] | null),
/** Show posts with a specific password. */
password?: (Scalars['String'] | null),
/** Show Posts based on a keyword search */
search?: (Scalars['String'] | null),
/** Retrieve posts where post status is in an array. */
stati?: ((PostStatusEnum | null)[] | null),
/** Show posts with a specific status. */
status?: (PostStatusEnum | null),
/** Title of the object */
title?: (Scalars['String'] | null)}


/** Filter the connection based on input */
export interface DateQueryInput {
/** Nodes should be returned after this date */
after?: (DateInput | null),
/** Nodes should be returned before this date */
before?: (DateInput | null),
/** Column to query against */
column?: (PostObjectsConnectionDateColumnEnum | null),
/** For after/before, whether exact value should be matched or not */
compare?: (Scalars['String'] | null),
/** Day of the month (from 1 to 31) */
day?: (Scalars['Int'] | null),
/** Hour (from 0 to 23) */
hour?: (Scalars['Int'] | null),
/** For after/before, whether exact value should be matched or not */
inclusive?: (Scalars['Boolean'] | null),
/** Minute (from 0 to 59) */
minute?: (Scalars['Int'] | null),
/** Month number (from 1 to 12) */
month?: (Scalars['Int'] | null),
/** OR or AND, how the sub-arrays should be compared */
relation?: (RelationEnum | null),
/** Second (0 to 59) */
second?: (Scalars['Int'] | null),
/** Week of the year (from 0 to 53) */
week?: (Scalars['Int'] | null),
/** 4 digit year (e.g. 2017) */
year?: (Scalars['Int'] | null)}


/** Date values */
export interface DateInput {
/** Day of the month (from 1 to 31) */
day?: (Scalars['Int'] | null),
/** Month number (from 1 to 12) */
month?: (Scalars['Int'] | null),
/** 4 digit year (e.g. 2017) */
year?: (Scalars['Int'] | null)}


/** Options for ordering the connection */
export interface PostObjectsConnectionOrderbyInput {
/** The field to order the connection by */
field: PostObjectsConnectionOrderbyEnum,
/** Possible directions in which to order a list of items */
order: OrderEnum}


/** Connection between the Category type and the ContentNode type */
export interface CategoryToContentNodeConnectionGenqlSelection{
    /** Edges for the CategoryToContentNodeConnection connection */
    edges?: CategoryToContentNodeConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: ContentNodeGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: CategoryToContentNodeConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection to ContentNode Nodes */
export interface ContentNodeConnectionGenqlSelection{
    /** A list of edges (relational context) between ContentType and connected ContentNode Nodes */
    edges?: ContentNodeConnectionEdgeGenqlSelection
    /** A list of connected ContentNode Nodes */
    nodes?: ContentNodeGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: ContentNodeConnectionPageInfoGenqlSelection
    on_CategoryToContentNodeConnection?: CategoryToContentNodeConnectionGenqlSelection
    on_ContentTypeToContentNodeConnection?: ContentTypeToContentNodeConnectionGenqlSelection
    on_HierarchicalContentNodeToContentNodeAncestorsConnection?: HierarchicalContentNodeToContentNodeAncestorsConnectionGenqlSelection
    on_HierarchicalContentNodeToContentNodeChildrenConnection?: HierarchicalContentNodeToContentNodeChildrenConnectionGenqlSelection
    on_PostFormatToContentNodeConnection?: PostFormatToContentNodeConnectionGenqlSelection
    on_TagToContentNodeConnection?: TagToContentNodeConnectionGenqlSelection
    on_UserToRevisionsConnection?: UserToRevisionsConnectionGenqlSelection
    on_RootQueryToContentNodeConnection?: RootQueryToContentNodeConnectionGenqlSelection
    on_RootQueryToRevisionsConnection?: RootQueryToRevisionsConnectionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Edge between a Node and a connected ContentNode */
export interface ContentNodeConnectionEdgeGenqlSelection{
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: boolean | number
    /** The connected ContentNode Node */
    node?: ContentNodeGenqlSelection
    on_ContentTypeToContentNodeConnectionEdge?: ContentTypeToContentNodeConnectionEdgeGenqlSelection
    on_CommentToContentNodeConnectionEdge?: CommentToContentNodeConnectionEdgeGenqlSelection
    on_HierarchicalContentNodeToContentNodeAncestorsConnectionEdge?: HierarchicalContentNodeToContentNodeAncestorsConnectionEdgeGenqlSelection
    on_HierarchicalContentNodeToContentNodeChildrenConnectionEdge?: HierarchicalContentNodeToContentNodeChildrenConnectionEdgeGenqlSelection
    on_HierarchicalContentNodeToParentContentNodeConnectionEdge?: HierarchicalContentNodeToParentContentNodeConnectionEdgeGenqlSelection
    on_NodeWithRevisionsToContentNodeConnectionEdge?: NodeWithRevisionsToContentNodeConnectionEdgeGenqlSelection
    on_PostFormatToContentNodeConnectionEdge?: PostFormatToContentNodeConnectionEdgeGenqlSelection
    on_TagToContentNodeConnectionEdge?: TagToContentNodeConnectionEdgeGenqlSelection
    on_UserToRevisionsConnectionEdge?: UserToRevisionsConnectionEdgeGenqlSelection
    on_CategoryToContentNodeConnectionEdge?: CategoryToContentNodeConnectionEdgeGenqlSelection
    on_RootQueryToContentNodeConnectionEdge?: RootQueryToContentNodeConnectionEdgeGenqlSelection
    on_RootQueryToRevisionsConnectionEdge?: RootQueryToRevisionsConnectionEdgeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Nodes used to manage content */
export interface ContentNodeGenqlSelection{
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: ContentNodeToContentTypeConnectionEdgeGenqlSelection
    /** The name of the Content Type the node belongs to */
    contentTypeName?: boolean | number
    /** The ID of the node in the database. */
    databaseId?: boolean | number
    /** Post publishing date. */
    date?: boolean | number
    /** The publishing date set in GMT. */
    dateGmt?: boolean | number
    /** The desired slug of the post */
    desiredSlug?: boolean | number
    /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
    editingLockedBy?: ContentNodeToEditLockConnectionEdgeGenqlSelection
    /** The RSS enclosure for the object */
    enclosure?: boolean | number
    /** Connection between the ContentNode type and the EnqueuedScript type */
    enqueuedScripts?: (ContentNodeToEnqueuedScriptConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null)} })
    /** Connection between the ContentNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: (ContentNodeToEnqueuedStylesheetConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null)} })
    /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
    guid?: boolean | number
    /** The globally unique ID for the object */
    id?: boolean | number
    /** Whether the node is a Comment */
    isComment?: boolean | number
    /** Whether the node is a Content Node */
    isContentNode?: boolean | number
    /** Whether the node represents the front page. */
    isFrontPage?: boolean | number
    /** Whether  the node represents the blog page. */
    isPostsPage?: boolean | number
    /** Whether the object is a node in the preview state */
    isPreview?: boolean | number
    /** Whether the object is restricted from the current viewer */
    isRestricted?: boolean | number
    /** Whether the node is a Term */
    isTermNode?: boolean | number
    /** The user that most recently edited the node */
    lastEditedBy?: ContentNodeToEditLastConnectionEdgeGenqlSelection
    /** The permalink of the post */
    link?: boolean | number
    /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
    modified?: boolean | number
    /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
    modifiedGmt?: boolean | number
    /** The database id of the preview node */
    previewRevisionDatabaseId?: boolean | number
    /** Whether the object is a node in the preview state */
    previewRevisionId?: boolean | number
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: boolean | number
    /** The current status of the object */
    status?: boolean | number
    /** The template assigned to a node of content */
    template?: ContentTemplateGenqlSelection
    /** The unique resource identifier path */
    uri?: boolean | number
    on_MediaItem?: MediaItemGenqlSelection
    on_Page?: PageGenqlSelection
    on_Post?: PostGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection between the ContentNode type and the ContentType type */
export interface ContentNodeToContentTypeConnectionEdgeGenqlSelection{
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: boolean | number
    /** The node of the connection, without the edges */
    node?: ContentTypeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A singular connection from one Node to another, with support for relational data on the &quot;edge&quot; of the connection. */
export interface OneToOneConnectionGenqlSelection{
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: boolean | number
    /** The connected node */
    node?: NodeGenqlSelection
    on_ContentNodeToContentTypeConnectionEdge?: ContentNodeToContentTypeConnectionEdgeGenqlSelection
    on_ContentNodeToEditLockConnectionEdge?: ContentNodeToEditLockConnectionEdgeGenqlSelection
    on_CommentToCommenterConnectionEdge?: CommentToCommenterConnectionEdgeGenqlSelection
    on_CommentToContentNodeConnectionEdge?: CommentToContentNodeConnectionEdgeGenqlSelection
    on_CommentToParentCommentConnectionEdge?: CommentToParentCommentConnectionEdgeGenqlSelection
    on_NodeWithAuthorToUserConnectionEdge?: NodeWithAuthorToUserConnectionEdgeGenqlSelection
    on_ContentNodeToEditLastConnectionEdge?: ContentNodeToEditLastConnectionEdgeGenqlSelection
    on_HierarchicalContentNodeToParentContentNodeConnectionEdge?: HierarchicalContentNodeToParentContentNodeConnectionEdgeGenqlSelection
    on_NodeWithFeaturedImageToMediaItemConnectionEdge?: NodeWithFeaturedImageToMediaItemConnectionEdgeGenqlSelection
    on_NodeWithRevisionsToContentNodeConnectionEdge?: NodeWithRevisionsToContentNodeConnectionEdgeGenqlSelection
    on_PageToPreviewConnectionEdge?: PageToPreviewConnectionEdgeGenqlSelection
    on_PostToParentConnectionEdge?: PostToParentConnectionEdgeGenqlSelection
    on_PostFormatToTaxonomyConnectionEdge?: PostFormatToTaxonomyConnectionEdgeGenqlSelection
    on_PostToPreviewConnectionEdge?: PostToPreviewConnectionEdgeGenqlSelection
    on_TagToTaxonomyConnectionEdge?: TagToTaxonomyConnectionEdgeGenqlSelection
    on_CategoryToParentCategoryConnectionEdge?: CategoryToParentCategoryConnectionEdgeGenqlSelection
    on_CategoryToTaxonomyConnectionEdge?: CategoryToTaxonomyConnectionEdgeGenqlSelection
    on_MenuItemToMenuItemLinkableConnectionEdge?: MenuItemToMenuItemLinkableConnectionEdgeGenqlSelection
    on_MenuItemToMenuConnectionEdge?: MenuItemToMenuConnectionEdgeGenqlSelection
    on_AcfMediaItemConnectionEdge?: AcfMediaItemConnectionEdgeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Edge between a Node and a connected ContentType */
export interface ContentTypeConnectionEdgeGenqlSelection{
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: boolean | number
    /** The connected ContentType Node */
    node?: ContentTypeGenqlSelection
    on_ContentNodeToContentTypeConnectionEdge?: ContentNodeToContentTypeConnectionEdgeGenqlSelection
    on_TaxonomyToContentTypeConnectionEdge?: TaxonomyToContentTypeConnectionEdgeGenqlSelection
    on_RootQueryToContentTypeConnectionEdge?: RootQueryToContentTypeConnectionEdgeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An Post Type object */
export interface ContentTypeGenqlSelection{
    /** Whether this content type should can be exported. */
    canExport?: boolean | number
    /** Connection between the ContentType type and the Taxonomy type */
    connectedTaxonomies?: (ContentTypeToTaxonomyConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null)} })
    /** Connection between the ContentType type and the ContentNode type */
    contentNodes?: (ContentTypeToContentNodeConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null), 
    /** Arguments for filtering the connection */
    where?: (ContentTypeToContentNodeConnectionWhereArgs | null)} })
    /** Whether content of this type should be deleted when the author of it is deleted from the system. */
    deleteWithUser?: boolean | number
    /** Description of the content type. */
    description?: boolean | number
    /** Whether to exclude nodes of this content type from front end search results. */
    excludeFromSearch?: boolean | number
    /** The plural name of the content type within the GraphQL Schema. */
    graphqlPluralName?: boolean | number
    /** The singular name of the content type within the GraphQL Schema. */
    graphqlSingleName?: boolean | number
    /** Whether this content type should have archives. Content archives are generated by type and by date. */
    hasArchive?: boolean | number
    /** Whether the content type is hierarchical, for example pages. */
    hierarchical?: boolean | number
    /** The globally unique identifier of the post-type object. */
    id?: boolean | number
    /** Whether the node is a Comment */
    isComment?: boolean | number
    /** Whether the node is a Content Node */
    isContentNode?: boolean | number
    /** Whether this page is set to the static front page. */
    isFrontPage?: boolean | number
    /** Whether this page is set to the blog posts page. */
    isPostsPage?: boolean | number
    /** Whether the object is restricted from the current viewer */
    isRestricted?: boolean | number
    /** Whether the node is a Term */
    isTermNode?: boolean | number
    /** Display name of the content type. */
    label?: boolean | number
    /** Details about the content type labels. */
    labels?: PostTypeLabelDetailsGenqlSelection
    /** The name of the icon file to display as a menu icon. */
    menuIcon?: boolean | number
    /** The position of this post type in the menu. Only applies if show_in_menu is true. */
    menuPosition?: boolean | number
    /** The internal name of the post type. This should not be used for display purposes. */
    name?: boolean | number
    /** Whether a content type is intended for use publicly either via the admin interface or by front-end users. While the default settings of exclude_from_search, publicly_queryable, show_ui, and show_in_nav_menus are inherited from public, each does not rely on this relationship and controls a very specific intention. */
    public?: boolean | number
    /** Whether queries can be performed on the front end for the content type as part of parse_request(). */
    publiclyQueryable?: boolean | number
    /** Name of content type to display in REST API &quot;wp/v2&quot; namespace. */
    restBase?: boolean | number
    /** The REST Controller class assigned to handling this content type. */
    restControllerClass?: boolean | number
    /** Makes this content type available via the admin bar. */
    showInAdminBar?: boolean | number
    /** Whether to add the content type to the GraphQL Schema. */
    showInGraphql?: boolean | number
    /** Where to show the content type in the admin menu. To work, $show_ui must be true. If true, the post type is shown in its own top level menu. If false, no menu is shown. If a string of an existing top level menu (eg. &quot;tools.php&quot; or &quot;edit.php?post_type=page&quot;), the post type will be placed as a sub-menu of that. */
    showInMenu?: boolean | number
    /** Makes this content type available for selection in navigation menus. */
    showInNavMenus?: boolean | number
    /** Whether the content type is associated with a route under the the REST API &quot;wp/v2&quot; namespace. */
    showInRest?: boolean | number
    /** Whether to generate and allow a UI for managing this content type in the admin. */
    showUi?: boolean | number
    /** The unique resource identifier path */
    uri?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection between the ContentType type and the Taxonomy type */
export interface ContentTypeToTaxonomyConnectionGenqlSelection{
    /** Edges for the ContentTypeToTaxonomyConnection connection */
    edges?: ContentTypeToTaxonomyConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: TaxonomyGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: ContentTypeToTaxonomyConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection to Taxonomy Nodes */
export interface TaxonomyConnectionGenqlSelection{
    /** A list of edges (relational context) between RootQuery and connected Taxonomy Nodes */
    edges?: TaxonomyConnectionEdgeGenqlSelection
    /** A list of connected Taxonomy Nodes */
    nodes?: TaxonomyGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: TaxonomyConnectionPageInfoGenqlSelection
    on_ContentTypeToTaxonomyConnection?: ContentTypeToTaxonomyConnectionGenqlSelection
    on_RootQueryToTaxonomyConnection?: RootQueryToTaxonomyConnectionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Edge between a Node and a connected Taxonomy */
export interface TaxonomyConnectionEdgeGenqlSelection{
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: boolean | number
    /** The connected Taxonomy Node */
    node?: TaxonomyGenqlSelection
    on_ContentTypeToTaxonomyConnectionEdge?: ContentTypeToTaxonomyConnectionEdgeGenqlSelection
    on_PostFormatToTaxonomyConnectionEdge?: PostFormatToTaxonomyConnectionEdgeGenqlSelection
    on_TagToTaxonomyConnectionEdge?: TagToTaxonomyConnectionEdgeGenqlSelection
    on_CategoryToTaxonomyConnectionEdge?: CategoryToTaxonomyConnectionEdgeGenqlSelection
    on_RootQueryToTaxonomyConnectionEdge?: RootQueryToTaxonomyConnectionEdgeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A taxonomy object */
export interface TaxonomyGenqlSelection{
    /** List of Content Types associated with the Taxonomy */
    connectedContentTypes?: (TaxonomyToContentTypeConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null)} })
    /** List of Term Nodes associated with the Taxonomy */
    connectedTerms?: (TaxonomyToTermNodeConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null)} })
    /** Description of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;description */
    description?: boolean | number
    /** The plural name of the post type within the GraphQL Schema. */
    graphqlPluralName?: boolean | number
    /** The singular name of the post type within the GraphQL Schema. */
    graphqlSingleName?: boolean | number
    /** Whether the taxonomy is hierarchical */
    hierarchical?: boolean | number
    /** The globally unique identifier of the taxonomy object. */
    id?: boolean | number
    /** Whether the object is restricted from the current viewer */
    isRestricted?: boolean | number
    /** Name of the taxonomy shown in the menu. Usually plural. */
    label?: boolean | number
    /** The display name of the taxonomy. This field is equivalent to WP_Taxonomy-&gt;label */
    name?: boolean | number
    /** Whether the taxonomy is publicly queryable */
    public?: boolean | number
    /** Name of content type to display in REST API &quot;wp/v2&quot; namespace. */
    restBase?: boolean | number
    /** The REST Controller class assigned to handling this content type. */
    restControllerClass?: boolean | number
    /** Whether to show the taxonomy as part of a tag cloud widget. This field is equivalent to WP_Taxonomy-&gt;show_tagcloud */
    showCloud?: boolean | number
    /** Whether to display a column for the taxonomy on its post type listing screens. */
    showInAdminColumn?: boolean | number
    /** Whether to add the post type to the GraphQL Schema. */
    showInGraphql?: boolean | number
    /** Whether to show the taxonomy in the admin menu */
    showInMenu?: boolean | number
    /** Whether the taxonomy is available for selection in navigation menus. */
    showInNavMenus?: boolean | number
    /** Whether to show the taxonomy in the quick/bulk edit panel. */
    showInQuickEdit?: boolean | number
    /** Whether to add the post type route in the REST API &quot;wp/v2&quot; namespace. */
    showInRest?: boolean | number
    /** Whether to generate and allow a UI for managing terms in this taxonomy in the admin */
    showUi?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection between the Taxonomy type and the ContentType type */
export interface TaxonomyToContentTypeConnectionGenqlSelection{
    /** Edges for the TaxonomyToContentTypeConnection connection */
    edges?: TaxonomyToContentTypeConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: ContentTypeGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: TaxonomyToContentTypeConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection to ContentType Nodes */
export interface ContentTypeConnectionGenqlSelection{
    /** A list of edges (relational context) between RootQuery and connected ContentType Nodes */
    edges?: ContentTypeConnectionEdgeGenqlSelection
    /** A list of connected ContentType Nodes */
    nodes?: ContentTypeGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: ContentTypeConnectionPageInfoGenqlSelection
    on_TaxonomyToContentTypeConnection?: TaxonomyToContentTypeConnectionGenqlSelection
    on_RootQueryToContentTypeConnection?: RootQueryToContentTypeConnectionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the connected ContentTypeConnectionEdge */
export interface ContentTypeConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    on_TaxonomyToContentTypeConnectionPageInfo?: TaxonomyToContentTypeConnectionPageInfoGenqlSelection
    on_RootQueryToContentTypeConnectionPageInfo?: RootQueryToContentTypeConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface TaxonomyToContentTypeConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: ContentTypeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;TaxonomyToContentTypeConnection&quot; */
export interface TaxonomyToContentTypeConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection between the Taxonomy type and the TermNode type */
export interface TaxonomyToTermNodeConnectionGenqlSelection{
    /** Edges for the TaxonomyToTermNodeConnection connection */
    edges?: TaxonomyToTermNodeConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: TermNodeGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: TaxonomyToTermNodeConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection to TermNode Nodes */
export interface TermNodeConnectionGenqlSelection{
    /** A list of edges (relational context) between RootQuery and connected TermNode Nodes */
    edges?: TermNodeConnectionEdgeGenqlSelection
    /** A list of connected TermNode Nodes */
    nodes?: TermNodeGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: TermNodeConnectionPageInfoGenqlSelection
    on_TaxonomyToTermNodeConnection?: TaxonomyToTermNodeConnectionGenqlSelection
    on_PostToTermNodeConnection?: PostToTermNodeConnectionGenqlSelection
    on_RootQueryToTermNodeConnection?: RootQueryToTermNodeConnectionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Edge between a Node and a connected TermNode */
export interface TermNodeConnectionEdgeGenqlSelection{
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: boolean | number
    /** The connected TermNode Node */
    node?: TermNodeGenqlSelection
    on_TaxonomyToTermNodeConnectionEdge?: TaxonomyToTermNodeConnectionEdgeGenqlSelection
    on_PostToTermNodeConnectionEdge?: PostToTermNodeConnectionEdgeGenqlSelection
    on_RootQueryToTermNodeConnectionEdge?: RootQueryToTermNodeConnectionEdgeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the connected TermNodeConnectionEdge */
export interface TermNodeConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    on_TaxonomyToTermNodeConnectionPageInfo?: TaxonomyToTermNodeConnectionPageInfoGenqlSelection
    on_PostToTermNodeConnectionPageInfo?: PostToTermNodeConnectionPageInfoGenqlSelection
    on_RootQueryToTermNodeConnectionPageInfo?: RootQueryToTermNodeConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface TaxonomyToTermNodeConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: TermNodeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;TaxonomyToTermNodeConnection&quot; */
export interface TaxonomyToTermNodeConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the connected TaxonomyConnectionEdge */
export interface TaxonomyConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    on_ContentTypeToTaxonomyConnectionPageInfo?: ContentTypeToTaxonomyConnectionPageInfoGenqlSelection
    on_RootQueryToTaxonomyConnectionPageInfo?: RootQueryToTaxonomyConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface ContentTypeToTaxonomyConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: TaxonomyGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;ContentTypeToTaxonomyConnection&quot; */
export interface ContentTypeToTaxonomyConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Arguments for filtering the ContentTypeToContentNodeConnection connection */
export interface ContentTypeToContentNodeConnectionWhereArgs {
/** The Types of content to filter */
contentTypes?: ((ContentTypeEnum | null)[] | null),
/** Filter the connection based on dates */
dateQuery?: (DateQueryInput | null),
/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
hasPassword?: (Scalars['Boolean'] | null),
/** Specific database ID of the object */
id?: (Scalars['Int'] | null),
/** Array of IDs for the objects to retrieve */
in?: ((Scalars['ID'] | null)[] | null),
/** Get objects with a specific mimeType property */
mimeType?: (MimeTypeEnum | null),
/** Slug / post_name of the object */
name?: (Scalars['String'] | null),
/** Specify objects to retrieve. Use slugs */
nameIn?: ((Scalars['String'] | null)[] | null),
/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
notIn?: ((Scalars['ID'] | null)[] | null),
/** What parameter to use to order the objects by. */
orderby?: ((PostObjectsConnectionOrderbyInput | null)[] | null),
/** Use ID to return only children. Use 0 to return only top-level items */
parent?: (Scalars['ID'] | null),
/** Specify objects whose parent is in an array */
parentIn?: ((Scalars['ID'] | null)[] | null),
/** Specify posts whose parent is not in an array */
parentNotIn?: ((Scalars['ID'] | null)[] | null),
/** Show posts with a specific password. */
password?: (Scalars['String'] | null),
/** Show Posts based on a keyword search */
search?: (Scalars['String'] | null),
/** Retrieve posts where post status is in an array. */
stati?: ((PostStatusEnum | null)[] | null),
/** Show posts with a specific status. */
status?: (PostStatusEnum | null),
/** Title of the object */
title?: (Scalars['String'] | null)}


/** Connection between the ContentType type and the ContentNode type */
export interface ContentTypeToContentNodeConnectionGenqlSelection{
    /** Edges for the ContentTypeToContentNodeConnection connection */
    edges?: ContentTypeToContentNodeConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: ContentNodeGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: ContentTypeToContentNodeConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface ContentTypeToContentNodeConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: ContentNodeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;ContentTypeToContentNodeConnection&quot; */
export interface ContentTypeToContentNodeConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the connected ContentNodeConnectionEdge */
export interface ContentNodeConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    on_ContentTypeToContentNodeConnectionPageInfo?: ContentTypeToContentNodeConnectionPageInfoGenqlSelection
    on_HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo?: HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfoGenqlSelection
    on_HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo?: HierarchicalContentNodeToContentNodeChildrenConnectionPageInfoGenqlSelection
    on_PostFormatToContentNodeConnectionPageInfo?: PostFormatToContentNodeConnectionPageInfoGenqlSelection
    on_TagToContentNodeConnectionPageInfo?: TagToContentNodeConnectionPageInfoGenqlSelection
    on_UserToRevisionsConnectionPageInfo?: UserToRevisionsConnectionPageInfoGenqlSelection
    on_CategoryToContentNodeConnectionPageInfo?: CategoryToContentNodeConnectionPageInfoGenqlSelection
    on_RootQueryToContentNodeConnectionPageInfo?: RootQueryToContentNodeConnectionPageInfoGenqlSelection
    on_RootQueryToRevisionsConnectionPageInfo?: RootQueryToRevisionsConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Details for labels of the PostType */
export interface PostTypeLabelDetailsGenqlSelection{
    /** Default is ‘Add New’ for both hierarchical and non-hierarchical types. */
    addNew?: boolean | number
    /** Label for adding a new singular item. */
    addNewItem?: boolean | number
    /** Label to signify all items in a submenu link. */
    allItems?: boolean | number
    /** Label for archives in nav menus */
    archives?: boolean | number
    /** Label for the attributes meta box. */
    attributes?: boolean | number
    /** Label for editing a singular item. */
    editItem?: boolean | number
    /** Label for the Featured Image meta box title. */
    featuredImage?: boolean | number
    /** Label for the table views hidden heading. */
    filterItemsList?: boolean | number
    /** Label for the media frame button. */
    insertIntoItem?: boolean | number
    /** Label for the table hidden heading. */
    itemsList?: boolean | number
    /** Label for the table pagination hidden heading. */
    itemsListNavigation?: boolean | number
    /** Label for the menu name. */
    menuName?: boolean | number
    /** General name for the post type, usually plural. */
    name?: boolean | number
    /** Label for the new item page title. */
    newItem?: boolean | number
    /** Label used when no items are found. */
    notFound?: boolean | number
    /** Label used when no items are in the trash. */
    notFoundInTrash?: boolean | number
    /** Label used to prefix parents of hierarchical items. */
    parentItemColon?: boolean | number
    /** Label for removing the featured image. */
    removeFeaturedImage?: boolean | number
    /** Label for searching plural items. */
    searchItems?: boolean | number
    /** Label for setting the featured image. */
    setFeaturedImage?: boolean | number
    /** Name for one object of this post type. */
    singularName?: boolean | number
    /** Label for the media frame filter. */
    uploadedToThisItem?: boolean | number
    /** Label in the media frame for using a featured image. */
    useFeaturedImage?: boolean | number
    /** Label for viewing a singular item. */
    viewItem?: boolean | number
    /** Label for viewing post type archives. */
    viewItems?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection between the ContentNode type and the User type */
export interface ContentNodeToEditLockConnectionEdgeGenqlSelection{
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: boolean | number
    /** The timestamp for when the node was last edited */
    lockTimestamp?: boolean | number
    /** The node of the connection, without the edges */
    node?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Edge between a Node and a connected User */
export interface UserConnectionEdgeGenqlSelection{
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: boolean | number
    /** The connected User Node */
    node?: UserGenqlSelection
    on_ContentNodeToEditLockConnectionEdge?: ContentNodeToEditLockConnectionEdgeGenqlSelection
    on_NodeWithAuthorToUserConnectionEdge?: NodeWithAuthorToUserConnectionEdgeGenqlSelection
    on_ContentNodeToEditLastConnectionEdge?: ContentNodeToEditLastConnectionEdgeGenqlSelection
    on_RootQueryToUserConnectionEdge?: RootQueryToUserConnectionEdgeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A User object */
export interface UserGenqlSelection{
    /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
    avatar?: (AvatarGenqlSelection & { __args?: {
    /** The size attribute of the avatar field can be used to fetch avatars of different sizes. The value corresponds to the dimension in pixels to fetch. The default is 96 pixels. */
    size?: (Scalars['Int'] | null), 
    /** Whether to always show the default image, never the Gravatar. Default false */
    forceDefault?: (Scalars['Boolean'] | null), 
    /** The rating level of the avatar. */
    rating?: (AvatarRatingEnum | null)} })
    /** User metadata option name. Usually it will be &quot;wp_capabilities&quot;. */
    capKey?: boolean | number
    /** A list of capabilities (permissions) granted to the user */
    capabilities?: boolean | number
    /** Connection between the User type and the Comment type */
    comments?: (UserToCommentConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null), 
    /** Arguments for filtering the connection */
    where?: (UserToCommentConnectionWhereArgs | null)} })
    /** Identifies the primary key from the database. */
    databaseId?: boolean | number
    /** Description of the user. */
    description?: boolean | number
    /** Email address of the user. This is equivalent to the WP_User-&gt;user_email property. */
    email?: boolean | number
    /** Connection between the User type and the EnqueuedScript type */
    enqueuedScripts?: (UserToEnqueuedScriptConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null)} })
    /** Connection between the User type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: (UserToEnqueuedStylesheetConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null)} })
    /** A complete list of capabilities including capabilities inherited from a role. This is equivalent to the array keys of WP_User-&gt;allcaps. */
    extraCapabilities?: boolean | number
    /** First name of the user. This is equivalent to the WP_User-&gt;user_first_name property. */
    firstName?: boolean | number
    /** The globally unique identifier for the user object. */
    id?: boolean | number
    /** Whether the node is a Comment */
    isComment?: boolean | number
    /** Whether the node is a Content Node */
    isContentNode?: boolean | number
    /** Whether the node represents the front page. */
    isFrontPage?: boolean | number
    /** Whether  the node represents the blog page. */
    isPostsPage?: boolean | number
    /** Whether the object is restricted from the current viewer */
    isRestricted?: boolean | number
    /** Whether the node is a Term */
    isTermNode?: boolean | number
    /** Last name of the user. This is equivalent to the WP_User-&gt;user_last_name property. */
    lastName?: boolean | number
    /** The preferred language locale set for the user. Value derived from get_user_locale(). */
    locale?: boolean | number
    /** Connection between the User type and the mediaItem type */
    mediaItems?: (UserToMediaItemConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null), 
    /** Arguments for filtering the connection */
    where?: (UserToMediaItemConnectionWhereArgs | null)} })
    /** Display name of the user. This is equivalent to the WP_User-&gt;display_name property. */
    name?: boolean | number
    /** The nicename for the user. This field is equivalent to WP_User-&gt;user_nicename */
    nicename?: boolean | number
    /** Nickname of the user. */
    nickname?: boolean | number
    /** Connection between the User type and the page type */
    pages?: (UserToPageConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null), 
    /** Arguments for filtering the connection */
    where?: (UserToPageConnectionWhereArgs | null)} })
    /** Connection between the User type and the post type */
    posts?: (UserToPostConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null), 
    /** Arguments for filtering the connection */
    where?: (UserToPostConnectionWhereArgs | null)} })
    /** The date the user registered or was created. The field follows a full ISO8601 date string format. */
    registeredDate?: boolean | number
    /** Connection between the User and Revisions authored by the user */
    revisions?: (UserToRevisionsConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null), 
    /** Arguments for filtering the connection */
    where?: (UserToRevisionsConnectionWhereArgs | null)} })
    /** Connection between the User type and the UserRole type */
    roles?: (UserToUserRoleConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null)} })
    /** Whether the Toolbar should be displayed when the user is viewing the site. */
    shouldShowAdminToolbar?: boolean | number
    /** The slug for the user. This field is equivalent to WP_User-&gt;user_nicename */
    slug?: boolean | number
    /** The unique resource identifier path */
    uri?: boolean | number
    /** A website url that is associated with the user. */
    url?: boolean | number
    /**
     * @deprecated Deprecated in favor of the databaseId field
     * The Id of the user. Equivalent to WP_User-&gt;ID
     */
    userId?: boolean | number
    /** Username for the user. This field is equivalent to WP_User-&gt;user_login. */
    username?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The author of a comment */
export interface CommenterGenqlSelection{
    /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
    avatar?: AvatarGenqlSelection
    /** Identifies the primary key from the database. */
    databaseId?: boolean | number
    /** The email address of the author of a comment. */
    email?: boolean | number
    /** The globally unique identifier for the comment author. */
    id?: boolean | number
    /** Whether the author information is considered restricted. (not fully public) */
    isRestricted?: boolean | number
    /** The name of the author of a comment. */
    name?: boolean | number
    /** The url of the author of a comment. */
    url?: boolean | number
    on_User?: UserGenqlSelection
    on_CommentAuthor?: CommentAuthorGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Avatars are profile images for users. WordPress by default uses the Gravatar service to host and fetch avatars from. */
export interface AvatarGenqlSelection{
    /** URL for the default image or a default type. Accepts &#039;404&#039; (return a 404 instead of a default image), &#039;retro&#039; (8bit), &#039;monsterid&#039; (monster), &#039;wavatar&#039; (cartoon face), &#039;indenticon&#039; (the &#039;quilt&#039;), &#039;mystery&#039;, &#039;mm&#039;, or &#039;mysteryman&#039; (The Oyster Man), &#039;blank&#039; (transparent GIF), or &#039;gravatar_default&#039; (the Gravatar logo). */
    default?: boolean | number
    /** HTML attributes to insert in the IMG element. Is not sanitized. */
    extraAttr?: boolean | number
    /** Whether to always show the default image, never the Gravatar. */
    forceDefault?: boolean | number
    /** Whether the avatar was successfully found. */
    foundAvatar?: boolean | number
    /** Height of the avatar image. */
    height?: boolean | number
    /** Whether the object is restricted from the current viewer */
    isRestricted?: boolean | number
    /** What rating to display avatars up to. Accepts &#039;G&#039;, &#039;PG&#039;, &#039;R&#039;, &#039;X&#039;, and are judged in that order. */
    rating?: boolean | number
    /** Type of url scheme to use. Typically HTTP vs. HTTPS. */
    scheme?: boolean | number
    /** The size of the avatar in pixels. A value of 96 will match a 96px x 96px gravatar image. */
    size?: boolean | number
    /** URL for the gravatar image source. */
    url?: boolean | number
    /** Width of the avatar image. */
    width?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Arguments for filtering the UserToCommentConnection connection */
export interface UserToCommentConnectionWhereArgs {
/** Comment author email address. */
authorEmail?: (Scalars['String'] | null),
/** Array of author IDs to include comments for. */
authorIn?: ((Scalars['ID'] | null)[] | null),
/** Array of author IDs to exclude comments for. */
authorNotIn?: ((Scalars['ID'] | null)[] | null),
/** Comment author URL. */
authorUrl?: (Scalars['String'] | null),
/** Array of comment IDs to include. */
commentIn?: ((Scalars['ID'] | null)[] | null),
/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
commentNotIn?: ((Scalars['ID'] | null)[] | null),
/** Include comments of a given type. */
commentType?: (Scalars['String'] | null),
/** Include comments from a given array of comment types. */
commentTypeIn?: ((Scalars['String'] | null)[] | null),
/** Exclude comments from a given array of comment types. */
commentTypeNotIn?: (Scalars['String'] | null),
/** Content object author ID to limit results by. */
contentAuthor?: ((Scalars['ID'] | null)[] | null),
/** Array of author IDs to retrieve comments for. */
contentAuthorIn?: ((Scalars['ID'] | null)[] | null),
/** Array of author IDs *not* to retrieve comments for. */
contentAuthorNotIn?: ((Scalars['ID'] | null)[] | null),
/** Limit results to those affiliated with a given content object ID. */
contentId?: (Scalars['ID'] | null),
/** Array of content object IDs to include affiliated comments for. */
contentIdIn?: ((Scalars['ID'] | null)[] | null),
/** Array of content object IDs to exclude affiliated comments for. */
contentIdNotIn?: ((Scalars['ID'] | null)[] | null),
/** Content object name (i.e. slug ) to retrieve affiliated comments for. */
contentName?: (Scalars['String'] | null),
/** Content Object parent ID to retrieve affiliated comments for. */
contentParent?: (Scalars['Int'] | null),
/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
contentStatus?: ((PostStatusEnum | null)[] | null),
/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
contentType?: ((ContentTypeEnum | null)[] | null),
/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
includeUnapproved?: ((Scalars['ID'] | null)[] | null),
/** Karma score to retrieve matching comments for. */
karma?: (Scalars['Int'] | null),
/** The cardinality of the order of the connection */
order?: (OrderEnum | null),
/** Field to order the comments by. */
orderby?: (CommentsConnectionOrderbyEnum | null),
/** Parent ID of comment to retrieve children of. */
parent?: (Scalars['Int'] | null),
/** Array of parent IDs of comments to retrieve children for. */
parentIn?: ((Scalars['ID'] | null)[] | null),
/** Array of parent IDs of comments *not* to retrieve children for. */
parentNotIn?: ((Scalars['ID'] | null)[] | null),
/** Search term(s) to retrieve matching comments for. */
search?: (Scalars['String'] | null),
/** Comment status to limit results by. */
status?: (Scalars['String'] | null),
/** Include comments for a specific user ID. */
userId?: (Scalars['ID'] | null)}


/** Connection between the User type and the Comment type */
export interface UserToCommentConnectionGenqlSelection{
    /** Edges for the UserToCommentConnection connection */
    edges?: UserToCommentConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: CommentGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: UserToCommentConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection to Comment Nodes */
export interface CommentConnectionGenqlSelection{
    /** A list of edges (relational context) between RootQuery and connected Comment Nodes */
    edges?: CommentConnectionEdgeGenqlSelection
    /** A list of connected Comment Nodes */
    nodes?: CommentGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: CommentConnectionPageInfoGenqlSelection
    on_UserToCommentConnection?: UserToCommentConnectionGenqlSelection
    on_CommentToCommentConnection?: CommentToCommentConnectionGenqlSelection
    on_MediaItemToCommentConnection?: MediaItemToCommentConnectionGenqlSelection
    on_PageToCommentConnection?: PageToCommentConnectionGenqlSelection
    on_PostToCommentConnection?: PostToCommentConnectionGenqlSelection
    on_RootQueryToCommentConnection?: RootQueryToCommentConnectionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Edge between a Node and a connected Comment */
export interface CommentConnectionEdgeGenqlSelection{
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: boolean | number
    /** The connected Comment Node */
    node?: CommentGenqlSelection
    on_CommentToParentCommentConnectionEdge?: CommentToParentCommentConnectionEdgeGenqlSelection
    on_CommentToCommentConnectionEdge?: CommentToCommentConnectionEdgeGenqlSelection
    on_UserToCommentConnectionEdge?: UserToCommentConnectionEdgeGenqlSelection
    on_MediaItemToCommentConnectionEdge?: MediaItemToCommentConnectionEdgeGenqlSelection
    on_PageToCommentConnectionEdge?: PageToCommentConnectionEdgeGenqlSelection
    on_PostToCommentConnectionEdge?: PostToCommentConnectionEdgeGenqlSelection
    on_RootQueryToCommentConnectionEdge?: RootQueryToCommentConnectionEdgeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A Comment object */
export interface CommentGenqlSelection{
    /** User agent used to post the comment. This field is equivalent to WP_Comment-&gt;comment_agent and the value matching the &quot;comment_agent&quot; column in SQL. */
    agent?: boolean | number
    /**
     * @deprecated Deprecated in favor of the `status` field
     * The approval status of the comment. This field is equivalent to WP_Comment-&gt;comment_approved and the value matching the &quot;comment_approved&quot; column in SQL.
     */
    approved?: boolean | number
    /** The author of the comment */
    author?: CommentToCommenterConnectionEdgeGenqlSelection
    /** IP address for the author. This field is equivalent to WP_Comment-&gt;comment_author_IP and the value matching the &quot;comment_author_IP&quot; column in SQL. */
    authorIp?: boolean | number
    /**
     * @deprecated Deprecated in favor of databaseId
     * ID for the comment, unique among comments.
     */
    commentId?: boolean | number
    /** Connection between the Comment type and the ContentNode type */
    commentedOn?: CommentToContentNodeConnectionEdgeGenqlSelection
    /** Content of the comment. This field is equivalent to WP_Comment-&gt;comment_content and the value matching the &quot;comment_content&quot; column in SQL. */
    content?: { __args: {
    /** Format of the field output */
    format?: (PostObjectFieldFormatEnum | null)} } | boolean | number
    /** The unique identifier stored in the database */
    databaseId?: boolean | number
    /** Date the comment was posted in local time. This field is equivalent to WP_Comment-&gt;date and the value matching the &quot;date&quot; column in SQL. */
    date?: boolean | number
    /** Date the comment was posted in GMT. This field is equivalent to WP_Comment-&gt;date_gmt and the value matching the &quot;date_gmt&quot; column in SQL. */
    dateGmt?: boolean | number
    /** The globally unique identifier for the comment object */
    id?: boolean | number
    /** Whether the node is a Comment */
    isComment?: boolean | number
    /** Whether the node is a Content Node */
    isContentNode?: boolean | number
    /** Whether the node represents the front page. */
    isFrontPage?: boolean | number
    /** Whether  the node represents the blog page. */
    isPostsPage?: boolean | number
    /** Whether the object is restricted from the current viewer */
    isRestricted?: boolean | number
    /** Whether the node is a Term */
    isTermNode?: boolean | number
    /** Karma value for the comment. This field is equivalent to WP_Comment-&gt;comment_karma and the value matching the &quot;comment_karma&quot; column in SQL. */
    karma?: boolean | number
    /** The permalink of the comment */
    link?: boolean | number
    /** Connection between the Comment type and the Comment type */
    parent?: (CommentToParentCommentConnectionEdgeGenqlSelection & { __args?: {
    /** Arguments for filtering the connection */
    where?: (CommentToParentCommentConnectionWhereArgs | null)} })
    /** The database id of the parent comment node or null if it is the root comment */
    parentDatabaseId?: boolean | number
    /** The globally unique identifier of the parent comment node. */
    parentId?: boolean | number
    /** Connection between the Comment type and the Comment type */
    replies?: (CommentToCommentConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null), 
    /** Arguments for filtering the connection */
    where?: (CommentToCommentConnectionWhereArgs | null)} })
    /** The approval status of the comment. This field is equivalent to WP_Comment-&gt;comment_approved and the value matching the &quot;comment_approved&quot; column in SQL. */
    status?: boolean | number
    /** Type of comment. This field is equivalent to WP_Comment-&gt;comment_type and the value matching the &quot;comment_type&quot; column in SQL. */
    type?: boolean | number
    /** The unique resource identifier path */
    uri?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection between the Comment type and the Commenter type */
export interface CommentToCommenterConnectionEdgeGenqlSelection{
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: boolean | number
    /** The node of the connection, without the edges */
    node?: CommenterGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Edge between a Node and a connected Commenter */
export interface CommenterConnectionEdgeGenqlSelection{
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: boolean | number
    /** The connected Commenter Node */
    node?: CommenterGenqlSelection
    on_CommentToCommenterConnectionEdge?: CommentToCommenterConnectionEdgeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection between the Comment type and the ContentNode type */
export interface CommentToContentNodeConnectionEdgeGenqlSelection{
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: boolean | number
    /** The node of the connection, without the edges */
    node?: ContentNodeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Arguments for filtering the CommentToParentCommentConnection connection */
export interface CommentToParentCommentConnectionWhereArgs {
/** Comment author email address. */
authorEmail?: (Scalars['String'] | null),
/** Array of author IDs to include comments for. */
authorIn?: ((Scalars['ID'] | null)[] | null),
/** Array of author IDs to exclude comments for. */
authorNotIn?: ((Scalars['ID'] | null)[] | null),
/** Comment author URL. */
authorUrl?: (Scalars['String'] | null),
/** Array of comment IDs to include. */
commentIn?: ((Scalars['ID'] | null)[] | null),
/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
commentNotIn?: ((Scalars['ID'] | null)[] | null),
/** Include comments of a given type. */
commentType?: (Scalars['String'] | null),
/** Include comments from a given array of comment types. */
commentTypeIn?: ((Scalars['String'] | null)[] | null),
/** Exclude comments from a given array of comment types. */
commentTypeNotIn?: (Scalars['String'] | null),
/** Content object author ID to limit results by. */
contentAuthor?: ((Scalars['ID'] | null)[] | null),
/** Array of author IDs to retrieve comments for. */
contentAuthorIn?: ((Scalars['ID'] | null)[] | null),
/** Array of author IDs *not* to retrieve comments for. */
contentAuthorNotIn?: ((Scalars['ID'] | null)[] | null),
/** Limit results to those affiliated with a given content object ID. */
contentId?: (Scalars['ID'] | null),
/** Array of content object IDs to include affiliated comments for. */
contentIdIn?: ((Scalars['ID'] | null)[] | null),
/** Array of content object IDs to exclude affiliated comments for. */
contentIdNotIn?: ((Scalars['ID'] | null)[] | null),
/** Content object name (i.e. slug ) to retrieve affiliated comments for. */
contentName?: (Scalars['String'] | null),
/** Content Object parent ID to retrieve affiliated comments for. */
contentParent?: (Scalars['Int'] | null),
/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
contentStatus?: ((PostStatusEnum | null)[] | null),
/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
contentType?: ((ContentTypeEnum | null)[] | null),
/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
includeUnapproved?: ((Scalars['ID'] | null)[] | null),
/** Karma score to retrieve matching comments for. */
karma?: (Scalars['Int'] | null),
/** The cardinality of the order of the connection */
order?: (OrderEnum | null),
/** Field to order the comments by. */
orderby?: (CommentsConnectionOrderbyEnum | null),
/** Parent ID of comment to retrieve children of. */
parent?: (Scalars['Int'] | null),
/** Array of parent IDs of comments to retrieve children for. */
parentIn?: ((Scalars['ID'] | null)[] | null),
/** Array of parent IDs of comments *not* to retrieve children for. */
parentNotIn?: ((Scalars['ID'] | null)[] | null),
/** Search term(s) to retrieve matching comments for. */
search?: (Scalars['String'] | null),
/** Comment status to limit results by. */
status?: (Scalars['String'] | null),
/** Include comments for a specific user ID. */
userId?: (Scalars['ID'] | null)}


/** Connection between the Comment type and the Comment type */
export interface CommentToParentCommentConnectionEdgeGenqlSelection{
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: boolean | number
    /** The node of the connection, without the edges */
    node?: CommentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Arguments for filtering the CommentToCommentConnection connection */
export interface CommentToCommentConnectionWhereArgs {
/** Comment author email address. */
authorEmail?: (Scalars['String'] | null),
/** Array of author IDs to include comments for. */
authorIn?: ((Scalars['ID'] | null)[] | null),
/** Array of author IDs to exclude comments for. */
authorNotIn?: ((Scalars['ID'] | null)[] | null),
/** Comment author URL. */
authorUrl?: (Scalars['String'] | null),
/** Array of comment IDs to include. */
commentIn?: ((Scalars['ID'] | null)[] | null),
/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
commentNotIn?: ((Scalars['ID'] | null)[] | null),
/** Include comments of a given type. */
commentType?: (Scalars['String'] | null),
/** Include comments from a given array of comment types. */
commentTypeIn?: ((Scalars['String'] | null)[] | null),
/** Exclude comments from a given array of comment types. */
commentTypeNotIn?: (Scalars['String'] | null),
/** Content object author ID to limit results by. */
contentAuthor?: ((Scalars['ID'] | null)[] | null),
/** Array of author IDs to retrieve comments for. */
contentAuthorIn?: ((Scalars['ID'] | null)[] | null),
/** Array of author IDs *not* to retrieve comments for. */
contentAuthorNotIn?: ((Scalars['ID'] | null)[] | null),
/** Limit results to those affiliated with a given content object ID. */
contentId?: (Scalars['ID'] | null),
/** Array of content object IDs to include affiliated comments for. */
contentIdIn?: ((Scalars['ID'] | null)[] | null),
/** Array of content object IDs to exclude affiliated comments for. */
contentIdNotIn?: ((Scalars['ID'] | null)[] | null),
/** Content object name (i.e. slug ) to retrieve affiliated comments for. */
contentName?: (Scalars['String'] | null),
/** Content Object parent ID to retrieve affiliated comments for. */
contentParent?: (Scalars['Int'] | null),
/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
contentStatus?: ((PostStatusEnum | null)[] | null),
/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
contentType?: ((ContentTypeEnum | null)[] | null),
/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
includeUnapproved?: ((Scalars['ID'] | null)[] | null),
/** Karma score to retrieve matching comments for. */
karma?: (Scalars['Int'] | null),
/** The cardinality of the order of the connection */
order?: (OrderEnum | null),
/** Field to order the comments by. */
orderby?: (CommentsConnectionOrderbyEnum | null),
/** Parent ID of comment to retrieve children of. */
parent?: (Scalars['Int'] | null),
/** Array of parent IDs of comments to retrieve children for. */
parentIn?: ((Scalars['ID'] | null)[] | null),
/** Array of parent IDs of comments *not* to retrieve children for. */
parentNotIn?: ((Scalars['ID'] | null)[] | null),
/** Search term(s) to retrieve matching comments for. */
search?: (Scalars['String'] | null),
/** Comment status to limit results by. */
status?: (Scalars['String'] | null),
/** Include comments for a specific user ID. */
userId?: (Scalars['ID'] | null)}


/** Connection between the Comment type and the Comment type */
export interface CommentToCommentConnectionGenqlSelection{
    /** Edges for the CommentToCommentConnection connection */
    edges?: CommentToCommentConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: CommentGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: CommentToCommentConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface CommentToCommentConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: CommentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;CommentToCommentConnection&quot; */
export interface CommentToCommentConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the connected CommentConnectionEdge */
export interface CommentConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    on_CommentToCommentConnectionPageInfo?: CommentToCommentConnectionPageInfoGenqlSelection
    on_UserToCommentConnectionPageInfo?: UserToCommentConnectionPageInfoGenqlSelection
    on_MediaItemToCommentConnectionPageInfo?: MediaItemToCommentConnectionPageInfoGenqlSelection
    on_PageToCommentConnectionPageInfo?: PageToCommentConnectionPageInfoGenqlSelection
    on_PostToCommentConnectionPageInfo?: PostToCommentConnectionPageInfoGenqlSelection
    on_RootQueryToCommentConnectionPageInfo?: RootQueryToCommentConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface UserToCommentConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: CommentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;UserToCommentConnection&quot; */
export interface UserToCommentConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection between the User type and the EnqueuedScript type */
export interface UserToEnqueuedScriptConnectionGenqlSelection{
    /** Edges for the UserToEnqueuedScriptConnection connection */
    edges?: UserToEnqueuedScriptConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: EnqueuedScriptGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: UserToEnqueuedScriptConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface UserToEnqueuedScriptConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: EnqueuedScriptGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;UserToEnqueuedScriptConnection&quot; */
export interface UserToEnqueuedScriptConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection between the User type and the EnqueuedStylesheet type */
export interface UserToEnqueuedStylesheetConnectionGenqlSelection{
    /** Edges for the UserToEnqueuedStylesheetConnection connection */
    edges?: UserToEnqueuedStylesheetConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: EnqueuedStylesheetGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: UserToEnqueuedStylesheetConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface UserToEnqueuedStylesheetConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: EnqueuedStylesheetGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;UserToEnqueuedStylesheetConnection&quot; */
export interface UserToEnqueuedStylesheetConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Arguments for filtering the UserToMediaItemConnection connection */
export interface UserToMediaItemConnectionWhereArgs {
/** The user that's connected as the author of the object. Use the userId for the author object. */
author?: (Scalars['Int'] | null),
/** Find objects connected to author(s) in the array of author's userIds */
authorIn?: ((Scalars['ID'] | null)[] | null),
/** Find objects connected to the author by the author's nicename */
authorName?: (Scalars['String'] | null),
/** Find objects NOT connected to author(s) in the array of author's userIds */
authorNotIn?: ((Scalars['ID'] | null)[] | null),
/** Filter the connection based on dates */
dateQuery?: (DateQueryInput | null),
/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
hasPassword?: (Scalars['Boolean'] | null),
/** Specific database ID of the object */
id?: (Scalars['Int'] | null),
/** Array of IDs for the objects to retrieve */
in?: ((Scalars['ID'] | null)[] | null),
/** Get objects with a specific mimeType property */
mimeType?: (MimeTypeEnum | null),
/** Slug / post_name of the object */
name?: (Scalars['String'] | null),
/** Specify objects to retrieve. Use slugs */
nameIn?: ((Scalars['String'] | null)[] | null),
/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
notIn?: ((Scalars['ID'] | null)[] | null),
/** What parameter to use to order the objects by. */
orderby?: ((PostObjectsConnectionOrderbyInput | null)[] | null),
/** Use ID to return only children. Use 0 to return only top-level items */
parent?: (Scalars['ID'] | null),
/** Specify objects whose parent is in an array */
parentIn?: ((Scalars['ID'] | null)[] | null),
/** Specify posts whose parent is not in an array */
parentNotIn?: ((Scalars['ID'] | null)[] | null),
/** Show posts with a specific password. */
password?: (Scalars['String'] | null),
/** Show Posts based on a keyword search */
search?: (Scalars['String'] | null),
/** Retrieve posts where post status is in an array. */
stati?: ((PostStatusEnum | null)[] | null),
/** Show posts with a specific status. */
status?: (PostStatusEnum | null),
/** Title of the object */
title?: (Scalars['String'] | null)}


/** Connection between the User type and the mediaItem type */
export interface UserToMediaItemConnectionGenqlSelection{
    /** Edges for the UserToMediaItemConnection connection */
    edges?: UserToMediaItemConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: MediaItemGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: UserToMediaItemConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection to mediaItem Nodes */
export interface MediaItemConnectionGenqlSelection{
    /** A list of edges (relational context) between RootQuery and connected mediaItem Nodes */
    edges?: MediaItemConnectionEdgeGenqlSelection
    /** A list of connected mediaItem Nodes */
    nodes?: MediaItemGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: MediaItemConnectionPageInfoGenqlSelection
    on_UserToMediaItemConnection?: UserToMediaItemConnectionGenqlSelection
    on_RootQueryToMediaItemConnection?: RootQueryToMediaItemConnectionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Edge between a Node and a connected mediaItem */
export interface MediaItemConnectionEdgeGenqlSelection{
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: boolean | number
    /** The connected mediaItem Node */
    node?: MediaItemGenqlSelection
    on_UserToMediaItemConnectionEdge?: UserToMediaItemConnectionEdgeGenqlSelection
    on_NodeWithFeaturedImageToMediaItemConnectionEdge?: NodeWithFeaturedImageToMediaItemConnectionEdgeGenqlSelection
    on_RootQueryToMediaItemConnectionEdge?: RootQueryToMediaItemConnectionEdgeGenqlSelection
    on_AcfMediaItemConnectionEdge?: AcfMediaItemConnectionEdgeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The mediaItem type */
export interface MediaItemGenqlSelection{
    /** Alternative text to display when resource is not displayed */
    altText?: boolean | number
    /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
    ancestors?: (HierarchicalContentNodeToContentNodeAncestorsConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null), 
    /** Arguments for filtering the connection */
    where?: (HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs | null)} })
    /** Connection between the NodeWithAuthor type and the User type */
    author?: NodeWithAuthorToUserConnectionEdgeGenqlSelection
    /** The database identifier of the author of the node */
    authorDatabaseId?: boolean | number
    /** The globally unique identifier of the author of the node */
    authorId?: boolean | number
    /** The caption for the resource */
    caption?: { __args: {
    /** Format of the field output */
    format?: (PostObjectFieldFormatEnum | null)} } | boolean | number
    /** Connection between the HierarchicalContentNode type and the ContentNode type */
    children?: (HierarchicalContentNodeToContentNodeChildrenConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null), 
    /** Arguments for filtering the connection */
    where?: (HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs | null)} })
    /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
    commentCount?: boolean | number
    /** Whether the comments are open or closed for this particular post. */
    commentStatus?: boolean | number
    /** Connection between the MediaItem type and the Comment type */
    comments?: (MediaItemToCommentConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null), 
    /** Arguments for filtering the connection */
    where?: (MediaItemToCommentConnectionWhereArgs | null)} })
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: ContentNodeToContentTypeConnectionEdgeGenqlSelection
    /** The name of the Content Type the node belongs to */
    contentTypeName?: boolean | number
    /** The unique identifier stored in the database */
    databaseId?: boolean | number
    /** Post publishing date. */
    date?: boolean | number
    /** The publishing date set in GMT. */
    dateGmt?: boolean | number
    /** Description of the image (stored as post_content) */
    description?: { __args: {
    /** Format of the field output */
    format?: (PostObjectFieldFormatEnum | null)} } | boolean | number
    /** The desired slug of the post */
    desiredSlug?: boolean | number
    /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
    editingLockedBy?: ContentNodeToEditLockConnectionEdgeGenqlSelection
    /** The RSS enclosure for the object */
    enclosure?: boolean | number
    /** Connection between the ContentNode type and the EnqueuedScript type */
    enqueuedScripts?: (ContentNodeToEnqueuedScriptConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null)} })
    /** Connection between the ContentNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: (ContentNodeToEnqueuedStylesheetConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null)} })
    /** The filesize in bytes of the resource */
    fileSize?: { __args: {
    /** Size of the MediaItem to return */
    size?: (MediaItemSizeEnum | null)} } | boolean | number
    /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
    guid?: boolean | number
    /** Whether the attachment object is password protected. */
    hasPassword?: boolean | number
    /** The globally unique identifier of the attachment object. */
    id?: boolean | number
    /** Whether the node is a Comment */
    isComment?: boolean | number
    /** Whether the node is a Content Node */
    isContentNode?: boolean | number
    /** Whether the node represents the front page. */
    isFrontPage?: boolean | number
    /** Whether  the node represents the blog page. */
    isPostsPage?: boolean | number
    /** Whether the object is a node in the preview state */
    isPreview?: boolean | number
    /** Whether the object is restricted from the current viewer */
    isRestricted?: boolean | number
    /** Whether the node is a Term */
    isTermNode?: boolean | number
    /** The user that most recently edited the node */
    lastEditedBy?: ContentNodeToEditLastConnectionEdgeGenqlSelection
    /** The permalink of the post */
    link?: boolean | number
    /** Details about the mediaItem */
    mediaDetails?: MediaDetailsGenqlSelection
    /**
     * @deprecated Deprecated in favor of the databaseId field
     * The id field matches the WP_Post-&gt;ID field.
     */
    mediaItemId?: boolean | number
    /** Url of the mediaItem */
    mediaItemUrl?: boolean | number
    /** Type of resource */
    mediaType?: boolean | number
    /** The mime type of the mediaItem */
    mimeType?: boolean | number
    /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
    modified?: boolean | number
    /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
    modifiedGmt?: boolean | number
    /** The parent of the node. The parent object can be of various types */
    parent?: HierarchicalContentNodeToParentContentNodeConnectionEdgeGenqlSelection
    /** Database id of the parent node */
    parentDatabaseId?: boolean | number
    /** The globally unique identifier of the parent node. */
    parentId?: boolean | number
    /** The password for the attachment object. */
    password?: boolean | number
    /** The database id of the preview node */
    previewRevisionDatabaseId?: boolean | number
    /** Whether the object is a node in the preview state */
    previewRevisionId?: boolean | number
    /** The sizes attribute value for an image. */
    sizes?: { __args: {
    /** Size of the MediaItem to calculate sizes with */
    size?: (MediaItemSizeEnum | null)} } | boolean | number
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: boolean | number
    /** Url of the mediaItem */
    sourceUrl?: { __args: {
    /** Size of the MediaItem to return */
    size?: (MediaItemSizeEnum | null)} } | boolean | number
    /** The srcset attribute specifies the URL of the image to use in different situations. It is a comma separated string of urls and their widths. */
    srcSet?: { __args: {
    /** Size of the MediaItem to calculate srcSet with */
    size?: (MediaItemSizeEnum | null)} } | boolean | number
    /** The current status of the object */
    status?: boolean | number
    /** The template assigned to a node of content */
    template?: ContentTemplateGenqlSelection
    /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
    title?: { __args: {
    /** Format of the field output */
    format?: (PostObjectFieldFormatEnum | null)} } | boolean | number
    /** The unique resource identifier path */
    uri?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A node that can have a template associated with it */
export interface NodeWithTemplateGenqlSelection{
    /** The globally unique ID for the object */
    id?: boolean | number
    /** The template assigned to the node */
    template?: ContentTemplateGenqlSelection
    on_MediaItem?: MediaItemGenqlSelection
    on_Page?: PageGenqlSelection
    on_Post?: PostGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The template assigned to a node of content */
export interface ContentTemplateGenqlSelection{
    /** The name of the template */
    templateName?: boolean | number
    on_DefaultTemplate?: DefaultTemplateGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A node that NodeWith a title */
export interface NodeWithTitleGenqlSelection{
    /** The globally unique ID for the object */
    id?: boolean | number
    /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
    title?: { __args: {
    /** Format of the field output */
    format?: (PostObjectFieldFormatEnum | null)} } | boolean | number
    on_MediaItem?: MediaItemGenqlSelection
    on_Page?: PageGenqlSelection
    on_Post?: PostGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A node that can have an author assigned to it */
export interface NodeWithAuthorGenqlSelection{
    /** Connection between the NodeWithAuthor type and the User type */
    author?: NodeWithAuthorToUserConnectionEdgeGenqlSelection
    /** The database identifier of the author of the node */
    authorDatabaseId?: boolean | number
    /** The globally unique identifier of the author of the node */
    authorId?: boolean | number
    /** The globally unique ID for the object */
    id?: boolean | number
    on_MediaItem?: MediaItemGenqlSelection
    on_Page?: PageGenqlSelection
    on_Post?: PostGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection between the NodeWithAuthor type and the User type */
export interface NodeWithAuthorToUserConnectionEdgeGenqlSelection{
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: boolean | number
    /** The node of the connection, without the edges */
    node?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A node that can have comments associated with it */
export interface NodeWithCommentsGenqlSelection{
    /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
    commentCount?: boolean | number
    /** Whether the comments are open or closed for this particular post. */
    commentStatus?: boolean | number
    /** The globally unique ID for the object */
    id?: boolean | number
    on_MediaItem?: MediaItemGenqlSelection
    on_Page?: PageGenqlSelection
    on_Post?: PostGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Content node with hierarchical (parent/child) relationships */
export interface HierarchicalContentNodeGenqlSelection{
    /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
    ancestors?: (HierarchicalContentNodeToContentNodeAncestorsConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null), 
    /** Arguments for filtering the connection */
    where?: (HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs | null)} })
    /** Connection between the HierarchicalContentNode type and the ContentNode type */
    children?: (HierarchicalContentNodeToContentNodeChildrenConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null), 
    /** Arguments for filtering the connection */
    where?: (HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs | null)} })
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: ContentNodeToContentTypeConnectionEdgeGenqlSelection
    /** The name of the Content Type the node belongs to */
    contentTypeName?: boolean | number
    /** The unique identifier stored in the database */
    databaseId?: boolean | number
    /** Post publishing date. */
    date?: boolean | number
    /** The publishing date set in GMT. */
    dateGmt?: boolean | number
    /** The desired slug of the post */
    desiredSlug?: boolean | number
    /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
    editingLockedBy?: ContentNodeToEditLockConnectionEdgeGenqlSelection
    /** The RSS enclosure for the object */
    enclosure?: boolean | number
    /** Connection between the ContentNode type and the EnqueuedScript type */
    enqueuedScripts?: (ContentNodeToEnqueuedScriptConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null)} })
    /** Connection between the ContentNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: (ContentNodeToEnqueuedStylesheetConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null)} })
    /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
    guid?: boolean | number
    /** The globally unique ID for the object */
    id?: boolean | number
    /** Whether the node is a Comment */
    isComment?: boolean | number
    /** Whether the node is a Content Node */
    isContentNode?: boolean | number
    /** Whether the node represents the front page. */
    isFrontPage?: boolean | number
    /** Whether  the node represents the blog page. */
    isPostsPage?: boolean | number
    /** Whether the object is a node in the preview state */
    isPreview?: boolean | number
    /** Whether the object is restricted from the current viewer */
    isRestricted?: boolean | number
    /** Whether the node is a Term */
    isTermNode?: boolean | number
    /** The user that most recently edited the node */
    lastEditedBy?: ContentNodeToEditLastConnectionEdgeGenqlSelection
    /** The permalink of the post */
    link?: boolean | number
    /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
    modified?: boolean | number
    /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
    modifiedGmt?: boolean | number
    /** The parent of the node. The parent object can be of various types */
    parent?: HierarchicalContentNodeToParentContentNodeConnectionEdgeGenqlSelection
    /** Database id of the parent node */
    parentDatabaseId?: boolean | number
    /** The globally unique identifier of the parent node. */
    parentId?: boolean | number
    /** The database id of the preview node */
    previewRevisionDatabaseId?: boolean | number
    /** Whether the object is a node in the preview state */
    previewRevisionId?: boolean | number
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: boolean | number
    /** The current status of the object */
    status?: boolean | number
    /** The template assigned to a node of content */
    template?: ContentTemplateGenqlSelection
    /** The unique resource identifier path */
    uri?: boolean | number
    on_MediaItem?: MediaItemGenqlSelection
    on_Page?: PageGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Arguments for filtering the HierarchicalContentNodeToContentNodeAncestorsConnection connection */
export interface HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs {
/** The Types of content to filter */
contentTypes?: ((ContentTypeEnum | null)[] | null),
/** Filter the connection based on dates */
dateQuery?: (DateQueryInput | null),
/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
hasPassword?: (Scalars['Boolean'] | null),
/** Specific database ID of the object */
id?: (Scalars['Int'] | null),
/** Array of IDs for the objects to retrieve */
in?: ((Scalars['ID'] | null)[] | null),
/** Get objects with a specific mimeType property */
mimeType?: (MimeTypeEnum | null),
/** Slug / post_name of the object */
name?: (Scalars['String'] | null),
/** Specify objects to retrieve. Use slugs */
nameIn?: ((Scalars['String'] | null)[] | null),
/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
notIn?: ((Scalars['ID'] | null)[] | null),
/** What parameter to use to order the objects by. */
orderby?: ((PostObjectsConnectionOrderbyInput | null)[] | null),
/** Use ID to return only children. Use 0 to return only top-level items */
parent?: (Scalars['ID'] | null),
/** Specify objects whose parent is in an array */
parentIn?: ((Scalars['ID'] | null)[] | null),
/** Specify posts whose parent is not in an array */
parentNotIn?: ((Scalars['ID'] | null)[] | null),
/** Show posts with a specific password. */
password?: (Scalars['String'] | null),
/** Show Posts based on a keyword search */
search?: (Scalars['String'] | null),
/** Retrieve posts where post status is in an array. */
stati?: ((PostStatusEnum | null)[] | null),
/** Show posts with a specific status. */
status?: (PostStatusEnum | null),
/** Title of the object */
title?: (Scalars['String'] | null)}


/** Connection between the HierarchicalContentNode type and the ContentNode type */
export interface HierarchicalContentNodeToContentNodeAncestorsConnectionGenqlSelection{
    /** Edges for the HierarchicalContentNodeToContentNodeAncestorsConnection connection */
    edges?: HierarchicalContentNodeToContentNodeAncestorsConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: ContentNodeGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface HierarchicalContentNodeToContentNodeAncestorsConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: ContentNodeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;HierarchicalContentNodeToContentNodeAncestorsConnection&quot; */
export interface HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Arguments for filtering the HierarchicalContentNodeToContentNodeChildrenConnection connection */
export interface HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs {
/** The Types of content to filter */
contentTypes?: ((ContentTypeEnum | null)[] | null),
/** Filter the connection based on dates */
dateQuery?: (DateQueryInput | null),
/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
hasPassword?: (Scalars['Boolean'] | null),
/** Specific database ID of the object */
id?: (Scalars['Int'] | null),
/** Array of IDs for the objects to retrieve */
in?: ((Scalars['ID'] | null)[] | null),
/** Get objects with a specific mimeType property */
mimeType?: (MimeTypeEnum | null),
/** Slug / post_name of the object */
name?: (Scalars['String'] | null),
/** Specify objects to retrieve. Use slugs */
nameIn?: ((Scalars['String'] | null)[] | null),
/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
notIn?: ((Scalars['ID'] | null)[] | null),
/** What parameter to use to order the objects by. */
orderby?: ((PostObjectsConnectionOrderbyInput | null)[] | null),
/** Use ID to return only children. Use 0 to return only top-level items */
parent?: (Scalars['ID'] | null),
/** Specify objects whose parent is in an array */
parentIn?: ((Scalars['ID'] | null)[] | null),
/** Specify posts whose parent is not in an array */
parentNotIn?: ((Scalars['ID'] | null)[] | null),
/** Show posts with a specific password. */
password?: (Scalars['String'] | null),
/** Show Posts based on a keyword search */
search?: (Scalars['String'] | null),
/** Retrieve posts where post status is in an array. */
stati?: ((PostStatusEnum | null)[] | null),
/** Show posts with a specific status. */
status?: (PostStatusEnum | null),
/** Title of the object */
title?: (Scalars['String'] | null)}


/** Connection between the HierarchicalContentNode type and the ContentNode type */
export interface HierarchicalContentNodeToContentNodeChildrenConnectionGenqlSelection{
    /** Edges for the HierarchicalContentNodeToContentNodeChildrenConnection connection */
    edges?: HierarchicalContentNodeToContentNodeChildrenConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: ContentNodeGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: HierarchicalContentNodeToContentNodeChildrenConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface HierarchicalContentNodeToContentNodeChildrenConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: ContentNodeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;HierarchicalContentNodeToContentNodeChildrenConnection&quot; */
export interface HierarchicalContentNodeToContentNodeChildrenConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection between the ContentNode type and the EnqueuedScript type */
export interface ContentNodeToEnqueuedScriptConnectionGenqlSelection{
    /** Edges for the ContentNodeToEnqueuedScriptConnection connection */
    edges?: ContentNodeToEnqueuedScriptConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: EnqueuedScriptGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: ContentNodeToEnqueuedScriptConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface ContentNodeToEnqueuedScriptConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: EnqueuedScriptGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;ContentNodeToEnqueuedScriptConnection&quot; */
export interface ContentNodeToEnqueuedScriptConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection between the ContentNode type and the EnqueuedStylesheet type */
export interface ContentNodeToEnqueuedStylesheetConnectionGenqlSelection{
    /** Edges for the ContentNodeToEnqueuedStylesheetConnection connection */
    edges?: ContentNodeToEnqueuedStylesheetConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: EnqueuedStylesheetGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: ContentNodeToEnqueuedStylesheetConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface ContentNodeToEnqueuedStylesheetConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: EnqueuedStylesheetGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;ContentNodeToEnqueuedStylesheetConnection&quot; */
export interface ContentNodeToEnqueuedStylesheetConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection between the ContentNode type and the User type */
export interface ContentNodeToEditLastConnectionEdgeGenqlSelection{
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: boolean | number
    /** The node of the connection, without the edges */
    node?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection between the HierarchicalContentNode type and the ContentNode type */
export interface HierarchicalContentNodeToParentContentNodeConnectionEdgeGenqlSelection{
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: boolean | number
    /** The node of the connection, without the edges */
    node?: ContentNodeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Arguments for filtering the MediaItemToCommentConnection connection */
export interface MediaItemToCommentConnectionWhereArgs {
/** Comment author email address. */
authorEmail?: (Scalars['String'] | null),
/** Array of author IDs to include comments for. */
authorIn?: ((Scalars['ID'] | null)[] | null),
/** Array of author IDs to exclude comments for. */
authorNotIn?: ((Scalars['ID'] | null)[] | null),
/** Comment author URL. */
authorUrl?: (Scalars['String'] | null),
/** Array of comment IDs to include. */
commentIn?: ((Scalars['ID'] | null)[] | null),
/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
commentNotIn?: ((Scalars['ID'] | null)[] | null),
/** Include comments of a given type. */
commentType?: (Scalars['String'] | null),
/** Include comments from a given array of comment types. */
commentTypeIn?: ((Scalars['String'] | null)[] | null),
/** Exclude comments from a given array of comment types. */
commentTypeNotIn?: (Scalars['String'] | null),
/** Content object author ID to limit results by. */
contentAuthor?: ((Scalars['ID'] | null)[] | null),
/** Array of author IDs to retrieve comments for. */
contentAuthorIn?: ((Scalars['ID'] | null)[] | null),
/** Array of author IDs *not* to retrieve comments for. */
contentAuthorNotIn?: ((Scalars['ID'] | null)[] | null),
/** Limit results to those affiliated with a given content object ID. */
contentId?: (Scalars['ID'] | null),
/** Array of content object IDs to include affiliated comments for. */
contentIdIn?: ((Scalars['ID'] | null)[] | null),
/** Array of content object IDs to exclude affiliated comments for. */
contentIdNotIn?: ((Scalars['ID'] | null)[] | null),
/** Content object name (i.e. slug ) to retrieve affiliated comments for. */
contentName?: (Scalars['String'] | null),
/** Content Object parent ID to retrieve affiliated comments for. */
contentParent?: (Scalars['Int'] | null),
/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
contentStatus?: ((PostStatusEnum | null)[] | null),
/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
contentType?: ((ContentTypeEnum | null)[] | null),
/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
includeUnapproved?: ((Scalars['ID'] | null)[] | null),
/** Karma score to retrieve matching comments for. */
karma?: (Scalars['Int'] | null),
/** The cardinality of the order of the connection */
order?: (OrderEnum | null),
/** Field to order the comments by. */
orderby?: (CommentsConnectionOrderbyEnum | null),
/** Parent ID of comment to retrieve children of. */
parent?: (Scalars['Int'] | null),
/** Array of parent IDs of comments to retrieve children for. */
parentIn?: ((Scalars['ID'] | null)[] | null),
/** Array of parent IDs of comments *not* to retrieve children for. */
parentNotIn?: ((Scalars['ID'] | null)[] | null),
/** Search term(s) to retrieve matching comments for. */
search?: (Scalars['String'] | null),
/** Comment status to limit results by. */
status?: (Scalars['String'] | null),
/** Include comments for a specific user ID. */
userId?: (Scalars['ID'] | null)}


/** Connection between the MediaItem type and the Comment type */
export interface MediaItemToCommentConnectionGenqlSelection{
    /** Edges for the MediaItemToCommentConnection connection */
    edges?: MediaItemToCommentConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: CommentGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: MediaItemToCommentConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface MediaItemToCommentConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: CommentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;MediaItemToCommentConnection&quot; */
export interface MediaItemToCommentConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** File details for a Media Item */
export interface MediaDetailsGenqlSelection{
    /** The filename of the mediaItem */
    file?: boolean | number
    /** The height of the mediaItem */
    height?: boolean | number
    /** Meta information associated with the mediaItem */
    meta?: MediaItemMetaGenqlSelection
    /** The available sizes of the mediaItem */
    sizes?: (MediaSizeGenqlSelection & { __args?: {
    /** The sizes to exclude. Will take precedence over `include`. */
    exclude?: ((MediaItemSizeEnum | null)[] | null), 
    /** The sizes to include. Can be overridden by `exclude`. */
    include?: ((MediaItemSizeEnum | null)[] | null)} })
    /** The width of the mediaItem */
    width?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Meta connected to a MediaItem */
export interface MediaItemMetaGenqlSelection{
    /** Aperture measurement of the media item. */
    aperture?: boolean | number
    /** Information about the camera used to create the media item. */
    camera?: boolean | number
    /** The text string description associated with the media item. */
    caption?: boolean | number
    /** Copyright information associated with the media item. */
    copyright?: boolean | number
    /** The date/time when the media was created. */
    createdTimestamp?: boolean | number
    /** The original creator of the media item. */
    credit?: boolean | number
    /** The focal length value of the media item. */
    focalLength?: boolean | number
    /** The ISO (International Organization for Standardization) value of the media item. */
    iso?: boolean | number
    /** List of keywords used to describe or identfy the media item. */
    keywords?: boolean | number
    /** The vertical or horizontal aspect of the media item. */
    orientation?: boolean | number
    /** The shutter speed information of the media item. */
    shutterSpeed?: boolean | number
    /** A useful title for the media item. */
    title?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Details of an available size for a media item */
export interface MediaSizeGenqlSelection{
    /** The filename of the referenced size */
    file?: boolean | number
    /** The filesize of the resource */
    fileSize?: boolean | number
    /** The height of the referenced size */
    height?: boolean | number
    /** The mime type of the referenced size */
    mimeType?: boolean | number
    /** The referenced size name */
    name?: boolean | number
    /** The url of the referenced size */
    sourceUrl?: boolean | number
    /** The width of the referenced size */
    width?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the connected MediaItemConnectionEdge */
export interface MediaItemConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    on_UserToMediaItemConnectionPageInfo?: UserToMediaItemConnectionPageInfoGenqlSelection
    on_RootQueryToMediaItemConnectionPageInfo?: RootQueryToMediaItemConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface UserToMediaItemConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: MediaItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;UserToMediaItemConnection&quot; */
export interface UserToMediaItemConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Arguments for filtering the UserToPageConnection connection */
export interface UserToPageConnectionWhereArgs {
/** The user that's connected as the author of the object. Use the userId for the author object. */
author?: (Scalars['Int'] | null),
/** Find objects connected to author(s) in the array of author's userIds */
authorIn?: ((Scalars['ID'] | null)[] | null),
/** Find objects connected to the author by the author's nicename */
authorName?: (Scalars['String'] | null),
/** Find objects NOT connected to author(s) in the array of author's userIds */
authorNotIn?: ((Scalars['ID'] | null)[] | null),
/** Filter the connection based on dates */
dateQuery?: (DateQueryInput | null),
/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
hasPassword?: (Scalars['Boolean'] | null),
/** Specific database ID of the object */
id?: (Scalars['Int'] | null),
/** Array of IDs for the objects to retrieve */
in?: ((Scalars['ID'] | null)[] | null),
/** Get objects with a specific mimeType property */
mimeType?: (MimeTypeEnum | null),
/** Slug / post_name of the object */
name?: (Scalars['String'] | null),
/** Specify objects to retrieve. Use slugs */
nameIn?: ((Scalars['String'] | null)[] | null),
/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
notIn?: ((Scalars['ID'] | null)[] | null),
/** What parameter to use to order the objects by. */
orderby?: ((PostObjectsConnectionOrderbyInput | null)[] | null),
/** Use ID to return only children. Use 0 to return only top-level items */
parent?: (Scalars['ID'] | null),
/** Specify objects whose parent is in an array */
parentIn?: ((Scalars['ID'] | null)[] | null),
/** Specify posts whose parent is not in an array */
parentNotIn?: ((Scalars['ID'] | null)[] | null),
/** Show posts with a specific password. */
password?: (Scalars['String'] | null),
/** Show Posts based on a keyword search */
search?: (Scalars['String'] | null),
/** Retrieve posts where post status is in an array. */
stati?: ((PostStatusEnum | null)[] | null),
/** Show posts with a specific status. */
status?: (PostStatusEnum | null),
/** Title of the object */
title?: (Scalars['String'] | null)}


/** Connection between the User type and the page type */
export interface UserToPageConnectionGenqlSelection{
    /** Edges for the UserToPageConnection connection */
    edges?: UserToPageConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: PageGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: UserToPageConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection to page Nodes */
export interface PageConnectionGenqlSelection{
    /** A list of edges (relational context) between RootQuery and connected page Nodes */
    edges?: PageConnectionEdgeGenqlSelection
    /** A list of connected page Nodes */
    nodes?: PageGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: PageConnectionPageInfoGenqlSelection
    on_UserToPageConnection?: UserToPageConnectionGenqlSelection
    on_PageToRevisionConnection?: PageToRevisionConnectionGenqlSelection
    on_RootQueryToPageConnection?: RootQueryToPageConnectionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Edge between a Node and a connected page */
export interface PageConnectionEdgeGenqlSelection{
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: boolean | number
    /** The connected page Node */
    node?: PageGenqlSelection
    on_PageToPreviewConnectionEdge?: PageToPreviewConnectionEdgeGenqlSelection
    on_PageToRevisionConnectionEdge?: PageToRevisionConnectionEdgeGenqlSelection
    on_UserToPageConnectionEdge?: UserToPageConnectionEdgeGenqlSelection
    on_RootQueryToPageConnectionEdge?: RootQueryToPageConnectionEdgeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The page type */
export interface PageGenqlSelection{
    /** Returns ancestors of the node. Default ordered as lowest (closest to the child) to highest (closest to the root). */
    ancestors?: (HierarchicalContentNodeToContentNodeAncestorsConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null), 
    /** Arguments for filtering the connection */
    where?: (HierarchicalContentNodeToContentNodeAncestorsConnectionWhereArgs | null)} })
    /** Connection between the NodeWithAuthor type and the User type */
    author?: NodeWithAuthorToUserConnectionEdgeGenqlSelection
    /** The database identifier of the author of the node */
    authorDatabaseId?: boolean | number
    /** The globally unique identifier of the author of the node */
    authorId?: boolean | number
    /** Connection between the HierarchicalContentNode type and the ContentNode type */
    children?: (HierarchicalContentNodeToContentNodeChildrenConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null), 
    /** Arguments for filtering the connection */
    where?: (HierarchicalContentNodeToContentNodeChildrenConnectionWhereArgs | null)} })
    /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
    commentCount?: boolean | number
    /** Whether the comments are open or closed for this particular post. */
    commentStatus?: boolean | number
    /** Connection between the Page type and the Comment type */
    comments?: (PageToCommentConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null), 
    /** Arguments for filtering the connection */
    where?: (PageToCommentConnectionWhereArgs | null)} })
    /** The content of the post. */
    content?: { __args: {
    /** Format of the field output */
    format?: (PostObjectFieldFormatEnum | null)} } | boolean | number
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: ContentNodeToContentTypeConnectionEdgeGenqlSelection
    /** The name of the Content Type the node belongs to */
    contentTypeName?: boolean | number
    /** The unique identifier stored in the database */
    databaseId?: boolean | number
    /** Post publishing date. */
    date?: boolean | number
    /** The publishing date set in GMT. */
    dateGmt?: boolean | number
    /** The desired slug of the post */
    desiredSlug?: boolean | number
    /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
    editingLockedBy?: ContentNodeToEditLockConnectionEdgeGenqlSelection
    /** The RSS enclosure for the object */
    enclosure?: boolean | number
    /** Connection between the ContentNode type and the EnqueuedScript type */
    enqueuedScripts?: (ContentNodeToEnqueuedScriptConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null)} })
    /** Connection between the ContentNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: (ContentNodeToEnqueuedStylesheetConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null)} })
    /** The excerpt of the post. */
    excerpt?: { __args: {
    /** Format of the field output */
    format?: (PostObjectFieldFormatEnum | null)} } | boolean | number
    /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
    featuredImage?: NodeWithFeaturedImageToMediaItemConnectionEdgeGenqlSelection
    /** The database identifier for the featured image node assigned to the content node */
    featuredImageDatabaseId?: boolean | number
    /** Globally unique ID of the featured image assigned to the node */
    featuredImageId?: boolean | number
    /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
    guid?: boolean | number
    /** Whether the page object is password protected. */
    hasPassword?: boolean | number
    /** The globally unique identifier of the page object. */
    id?: boolean | number
    /** Whether the node is a Comment */
    isComment?: boolean | number
    /** Whether the node is a Content Node */
    isContentNode?: boolean | number
    /** Whether this page is set to the static front page. */
    isFrontPage?: boolean | number
    /** Whether this page is set to the blog posts page. */
    isPostsPage?: boolean | number
    /** Whether the object is a node in the preview state */
    isPreview?: boolean | number
    /** Whether this page is set to the privacy page. */
    isPrivacyPage?: boolean | number
    /** Whether the object is restricted from the current viewer */
    isRestricted?: boolean | number
    /** True if the node is a revision of another node */
    isRevision?: boolean | number
    /** Whether the node is a Term */
    isTermNode?: boolean | number
    /** The user that most recently edited the node */
    lastEditedBy?: ContentNodeToEditLastConnectionEdgeGenqlSelection
    /** The permalink of the post */
    link?: boolean | number
    /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
    menuOrder?: boolean | number
    /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
    modified?: boolean | number
    /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
    modifiedGmt?: boolean | number
    /**
     * @deprecated Deprecated in favor of the databaseId field
     * The id field matches the WP_Post-&gt;ID field.
     */
    pageId?: boolean | number
    /** The parent of the node. The parent object can be of various types */
    parent?: HierarchicalContentNodeToParentContentNodeConnectionEdgeGenqlSelection
    /** Database id of the parent node */
    parentDatabaseId?: boolean | number
    /** The globally unique identifier of the parent node. */
    parentId?: boolean | number
    /** The password for the page object. */
    password?: boolean | number
    /** Connection between the Page type and the page type */
    preview?: PageToPreviewConnectionEdgeGenqlSelection
    /** The database id of the preview node */
    previewRevisionDatabaseId?: boolean | number
    /** Whether the object is a node in the preview state */
    previewRevisionId?: boolean | number
    /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
    revisionOf?: NodeWithRevisionsToContentNodeConnectionEdgeGenqlSelection
    /** Connection between the Page type and the page type */
    revisions?: (PageToRevisionConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null), 
    /** Arguments for filtering the connection */
    where?: (PageToRevisionConnectionWhereArgs | null)} })
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: boolean | number
    /** The current status of the object */
    status?: boolean | number
    /** The template assigned to a node of content */
    template?: ContentTemplateGenqlSelection
    /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
    title?: { __args: {
    /** Format of the field output */
    format?: (PostObjectFieldFormatEnum | null)} } | boolean | number
    /** The unique resource identifier path */
    uri?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Nodes that can be seen in a preview (unpublished) state. */
export interface PreviewableGenqlSelection{
    /** Whether the object is a node in the preview state */
    isPreview?: boolean | number
    /** The database id of the preview node */
    previewRevisionDatabaseId?: boolean | number
    /** Whether the object is a node in the preview state */
    previewRevisionId?: boolean | number
    on_Page?: PageGenqlSelection
    on_Post?: PostGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A node that supports the content editor */
export interface NodeWithContentEditorGenqlSelection{
    /** The content of the post. */
    content?: { __args: {
    /** Format of the field output */
    format?: (PostObjectFieldFormatEnum | null)} } | boolean | number
    /** The globally unique ID for the object */
    id?: boolean | number
    on_Page?: PageGenqlSelection
    on_Post?: PostGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A node that can have a featured image set */
export interface NodeWithFeaturedImageGenqlSelection{
    /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
    featuredImage?: NodeWithFeaturedImageToMediaItemConnectionEdgeGenqlSelection
    /** The database identifier for the featured image node assigned to the content node */
    featuredImageDatabaseId?: boolean | number
    /** Globally unique ID of the featured image assigned to the node */
    featuredImageId?: boolean | number
    /** The globally unique ID for the object */
    id?: boolean | number
    on_Page?: PageGenqlSelection
    on_Post?: PostGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection between the NodeWithFeaturedImage type and the MediaItem type */
export interface NodeWithFeaturedImageToMediaItemConnectionEdgeGenqlSelection{
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: boolean | number
    /** The node of the connection, without the edges */
    node?: MediaItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A node that can have an excerpt */
export interface NodeWithExcerptGenqlSelection{
    /** The excerpt of the post. */
    excerpt?: { __args: {
    /** Format of the field output */
    format?: (PostObjectFieldFormatEnum | null)} } | boolean | number
    /** The globally unique ID for the object */
    id?: boolean | number
    on_Page?: PageGenqlSelection
    on_Post?: PostGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A node that can have revisions */
export interface NodeWithRevisionsGenqlSelection{
    /** The globally unique ID for the object */
    id?: boolean | number
    /** True if the node is a revision of another node */
    isRevision?: boolean | number
    /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
    revisionOf?: NodeWithRevisionsToContentNodeConnectionEdgeGenqlSelection
    on_Page?: PageGenqlSelection
    on_Post?: PostGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection between the NodeWithRevisions type and the ContentNode type */
export interface NodeWithRevisionsToContentNodeConnectionEdgeGenqlSelection{
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: boolean | number
    /** The node of the connection, without the edges */
    node?: ContentNodeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A node that can have page attributes */
export interface NodeWithPageAttributesGenqlSelection{
    /** The globally unique ID for the object */
    id?: boolean | number
    /** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
    menuOrder?: boolean | number
    on_Page?: PageGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Arguments for filtering the PageToCommentConnection connection */
export interface PageToCommentConnectionWhereArgs {
/** Comment author email address. */
authorEmail?: (Scalars['String'] | null),
/** Array of author IDs to include comments for. */
authorIn?: ((Scalars['ID'] | null)[] | null),
/** Array of author IDs to exclude comments for. */
authorNotIn?: ((Scalars['ID'] | null)[] | null),
/** Comment author URL. */
authorUrl?: (Scalars['String'] | null),
/** Array of comment IDs to include. */
commentIn?: ((Scalars['ID'] | null)[] | null),
/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
commentNotIn?: ((Scalars['ID'] | null)[] | null),
/** Include comments of a given type. */
commentType?: (Scalars['String'] | null),
/** Include comments from a given array of comment types. */
commentTypeIn?: ((Scalars['String'] | null)[] | null),
/** Exclude comments from a given array of comment types. */
commentTypeNotIn?: (Scalars['String'] | null),
/** Content object author ID to limit results by. */
contentAuthor?: ((Scalars['ID'] | null)[] | null),
/** Array of author IDs to retrieve comments for. */
contentAuthorIn?: ((Scalars['ID'] | null)[] | null),
/** Array of author IDs *not* to retrieve comments for. */
contentAuthorNotIn?: ((Scalars['ID'] | null)[] | null),
/** Limit results to those affiliated with a given content object ID. */
contentId?: (Scalars['ID'] | null),
/** Array of content object IDs to include affiliated comments for. */
contentIdIn?: ((Scalars['ID'] | null)[] | null),
/** Array of content object IDs to exclude affiliated comments for. */
contentIdNotIn?: ((Scalars['ID'] | null)[] | null),
/** Content object name (i.e. slug ) to retrieve affiliated comments for. */
contentName?: (Scalars['String'] | null),
/** Content Object parent ID to retrieve affiliated comments for. */
contentParent?: (Scalars['Int'] | null),
/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
contentStatus?: ((PostStatusEnum | null)[] | null),
/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
contentType?: ((ContentTypeEnum | null)[] | null),
/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
includeUnapproved?: ((Scalars['ID'] | null)[] | null),
/** Karma score to retrieve matching comments for. */
karma?: (Scalars['Int'] | null),
/** The cardinality of the order of the connection */
order?: (OrderEnum | null),
/** Field to order the comments by. */
orderby?: (CommentsConnectionOrderbyEnum | null),
/** Parent ID of comment to retrieve children of. */
parent?: (Scalars['Int'] | null),
/** Array of parent IDs of comments to retrieve children for. */
parentIn?: ((Scalars['ID'] | null)[] | null),
/** Array of parent IDs of comments *not* to retrieve children for. */
parentNotIn?: ((Scalars['ID'] | null)[] | null),
/** Search term(s) to retrieve matching comments for. */
search?: (Scalars['String'] | null),
/** Comment status to limit results by. */
status?: (Scalars['String'] | null),
/** Include comments for a specific user ID. */
userId?: (Scalars['ID'] | null)}


/** Connection between the Page type and the Comment type */
export interface PageToCommentConnectionGenqlSelection{
    /** Edges for the PageToCommentConnection connection */
    edges?: PageToCommentConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: CommentGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: PageToCommentConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface PageToCommentConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: CommentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;PageToCommentConnection&quot; */
export interface PageToCommentConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection between the Page type and the page type */
export interface PageToPreviewConnectionEdgeGenqlSelection{
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: boolean | number
    /** The node of the connection, without the edges */
    node?: PageGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Arguments for filtering the PageToRevisionConnection connection */
export interface PageToRevisionConnectionWhereArgs {
/** The user that's connected as the author of the object. Use the userId for the author object. */
author?: (Scalars['Int'] | null),
/** Find objects connected to author(s) in the array of author's userIds */
authorIn?: ((Scalars['ID'] | null)[] | null),
/** Find objects connected to the author by the author's nicename */
authorName?: (Scalars['String'] | null),
/** Find objects NOT connected to author(s) in the array of author's userIds */
authorNotIn?: ((Scalars['ID'] | null)[] | null),
/** Filter the connection based on dates */
dateQuery?: (DateQueryInput | null),
/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
hasPassword?: (Scalars['Boolean'] | null),
/** Specific database ID of the object */
id?: (Scalars['Int'] | null),
/** Array of IDs for the objects to retrieve */
in?: ((Scalars['ID'] | null)[] | null),
/** Get objects with a specific mimeType property */
mimeType?: (MimeTypeEnum | null),
/** Slug / post_name of the object */
name?: (Scalars['String'] | null),
/** Specify objects to retrieve. Use slugs */
nameIn?: ((Scalars['String'] | null)[] | null),
/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
notIn?: ((Scalars['ID'] | null)[] | null),
/** What parameter to use to order the objects by. */
orderby?: ((PostObjectsConnectionOrderbyInput | null)[] | null),
/** Use ID to return only children. Use 0 to return only top-level items */
parent?: (Scalars['ID'] | null),
/** Specify objects whose parent is in an array */
parentIn?: ((Scalars['ID'] | null)[] | null),
/** Specify posts whose parent is not in an array */
parentNotIn?: ((Scalars['ID'] | null)[] | null),
/** Show posts with a specific password. */
password?: (Scalars['String'] | null),
/** Show Posts based on a keyword search */
search?: (Scalars['String'] | null),
/** Retrieve posts where post status is in an array. */
stati?: ((PostStatusEnum | null)[] | null),
/** Show posts with a specific status. */
status?: (PostStatusEnum | null),
/** Title of the object */
title?: (Scalars['String'] | null)}


/** Connection between the Page type and the page type */
export interface PageToRevisionConnectionGenqlSelection{
    /** Edges for the PageToRevisionConnection connection */
    edges?: PageToRevisionConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: PageGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: PageToRevisionConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface PageToRevisionConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: PageGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;PageToRevisionConnection&quot; */
export interface PageToRevisionConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the connected PageConnectionEdge */
export interface PageConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    on_PageToRevisionConnectionPageInfo?: PageToRevisionConnectionPageInfoGenqlSelection
    on_UserToPageConnectionPageInfo?: UserToPageConnectionPageInfoGenqlSelection
    on_RootQueryToPageConnectionPageInfo?: RootQueryToPageConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface UserToPageConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: PageGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;UserToPageConnection&quot; */
export interface UserToPageConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Arguments for filtering the UserToPostConnection connection */
export interface UserToPostConnectionWhereArgs {
/** The user that's connected as the author of the object. Use the userId for the author object. */
author?: (Scalars['Int'] | null),
/** Find objects connected to author(s) in the array of author's userIds */
authorIn?: ((Scalars['ID'] | null)[] | null),
/** Find objects connected to the author by the author's nicename */
authorName?: (Scalars['String'] | null),
/** Find objects NOT connected to author(s) in the array of author's userIds */
authorNotIn?: ((Scalars['ID'] | null)[] | null),
/** Category ID */
categoryId?: (Scalars['Int'] | null),
/** Array of category IDs, used to display objects from one category OR another */
categoryIn?: ((Scalars['ID'] | null)[] | null),
/** Use Category Slug */
categoryName?: (Scalars['String'] | null),
/** Array of category IDs, used to display objects from one category OR another */
categoryNotIn?: ((Scalars['ID'] | null)[] | null),
/** Filter the connection based on dates */
dateQuery?: (DateQueryInput | null),
/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
hasPassword?: (Scalars['Boolean'] | null),
/** Specific database ID of the object */
id?: (Scalars['Int'] | null),
/** Array of IDs for the objects to retrieve */
in?: ((Scalars['ID'] | null)[] | null),
/** Get objects with a specific mimeType property */
mimeType?: (MimeTypeEnum | null),
/** Slug / post_name of the object */
name?: (Scalars['String'] | null),
/** Specify objects to retrieve. Use slugs */
nameIn?: ((Scalars['String'] | null)[] | null),
/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
notIn?: ((Scalars['ID'] | null)[] | null),
/** What parameter to use to order the objects by. */
orderby?: ((PostObjectsConnectionOrderbyInput | null)[] | null),
/** Use ID to return only children. Use 0 to return only top-level items */
parent?: (Scalars['ID'] | null),
/** Specify objects whose parent is in an array */
parentIn?: ((Scalars['ID'] | null)[] | null),
/** Specify posts whose parent is not in an array */
parentNotIn?: ((Scalars['ID'] | null)[] | null),
/** Show posts with a specific password. */
password?: (Scalars['String'] | null),
/** Show Posts based on a keyword search */
search?: (Scalars['String'] | null),
/** Retrieve posts where post status is in an array. */
stati?: ((PostStatusEnum | null)[] | null),
/** Show posts with a specific status. */
status?: (PostStatusEnum | null),
/** Tag Slug */
tag?: (Scalars['String'] | null),
/** Use Tag ID */
tagId?: (Scalars['String'] | null),
/** Array of tag IDs, used to display objects from one tag OR another */
tagIn?: ((Scalars['ID'] | null)[] | null),
/** Array of tag IDs, used to display objects from one tag OR another */
tagNotIn?: ((Scalars['ID'] | null)[] | null),
/** Array of tag slugs, used to display objects from one tag AND another */
tagSlugAnd?: ((Scalars['String'] | null)[] | null),
/** Array of tag slugs, used to include objects in ANY specified tags */
tagSlugIn?: ((Scalars['String'] | null)[] | null),
/** Title of the object */
title?: (Scalars['String'] | null)}


/** Connection between the User type and the post type */
export interface UserToPostConnectionGenqlSelection{
    /** Edges for the UserToPostConnection connection */
    edges?: UserToPostConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: PostGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: UserToPostConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection to post Nodes */
export interface PostConnectionGenqlSelection{
    /** A list of edges (relational context) between RootQuery and connected post Nodes */
    edges?: PostConnectionEdgeGenqlSelection
    /** A list of connected post Nodes */
    nodes?: PostGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: PostConnectionPageInfoGenqlSelection
    on_UserToPostConnection?: UserToPostConnectionGenqlSelection
    on_PostToPostConnection?: PostToPostConnectionGenqlSelection
    on_PostFormatToPostConnection?: PostFormatToPostConnectionGenqlSelection
    on_PostToRevisionConnection?: PostToRevisionConnectionGenqlSelection
    on_TagToPostConnection?: TagToPostConnectionGenqlSelection
    on_CategoryToPostConnection?: CategoryToPostConnectionGenqlSelection
    on_RootQueryToPostConnection?: RootQueryToPostConnectionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Edge between a Node and a connected post */
export interface PostConnectionEdgeGenqlSelection{
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: boolean | number
    /** The connected post Node */
    node?: PostGenqlSelection
    on_PostToPostConnectionEdge?: PostToPostConnectionEdgeGenqlSelection
    on_PostToParentConnectionEdge?: PostToParentConnectionEdgeGenqlSelection
    on_PostFormatToPostConnectionEdge?: PostFormatToPostConnectionEdgeGenqlSelection
    on_PostToPreviewConnectionEdge?: PostToPreviewConnectionEdgeGenqlSelection
    on_PostToRevisionConnectionEdge?: PostToRevisionConnectionEdgeGenqlSelection
    on_TagToPostConnectionEdge?: TagToPostConnectionEdgeGenqlSelection
    on_UserToPostConnectionEdge?: UserToPostConnectionEdgeGenqlSelection
    on_CategoryToPostConnectionEdge?: CategoryToPostConnectionEdgeGenqlSelection
    on_RootQueryToPostConnectionEdge?: RootQueryToPostConnectionEdgeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The post type */
export interface PostGenqlSelection{
    /**
     * @deprecated This content type is not hierarchical and typically will not have ancestors
     * The ancestors of the content node.
     */
    ancestors?: (PostToPostConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null)} })
    /** Connection between the NodeWithAuthor type and the User type */
    author?: NodeWithAuthorToUserConnectionEdgeGenqlSelection
    /** The database identifier of the author of the node */
    authorDatabaseId?: boolean | number
    /** The globally unique identifier of the author of the node */
    authorId?: boolean | number
    /** Connection between the Post type and the category type */
    categories?: (PostToCategoryConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null), 
    /** Arguments for filtering the connection */
    where?: (PostToCategoryConnectionWhereArgs | null)} })
    /** The number of comments. Even though WPGraphQL denotes this field as an integer, in WordPress this field should be saved as a numeric string for compatibility. */
    commentCount?: boolean | number
    /** Whether the comments are open or closed for this particular post. */
    commentStatus?: boolean | number
    /** Connection between the Post type and the Comment type */
    comments?: (PostToCommentConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null), 
    /** Arguments for filtering the connection */
    where?: (PostToCommentConnectionWhereArgs | null)} })
    /** The content of the post. */
    content?: { __args: {
    /** Format of the field output */
    format?: (PostObjectFieldFormatEnum | null)} } | boolean | number
    /** Connection between the ContentNode type and the ContentType type */
    contentType?: ContentNodeToContentTypeConnectionEdgeGenqlSelection
    /** The name of the Content Type the node belongs to */
    contentTypeName?: boolean | number
    /** The unique identifier stored in the database */
    databaseId?: boolean | number
    /** Post publishing date. */
    date?: boolean | number
    /** The publishing date set in GMT. */
    dateGmt?: boolean | number
    /** The desired slug of the post */
    desiredSlug?: boolean | number
    /** If a user has edited the node within the past 15 seconds, this will return the user that last edited. Null if the edit lock doesn&#039;t exist or is greater than 15 seconds */
    editingLockedBy?: ContentNodeToEditLockConnectionEdgeGenqlSelection
    /** The RSS enclosure for the object */
    enclosure?: boolean | number
    /** Connection between the ContentNode type and the EnqueuedScript type */
    enqueuedScripts?: (ContentNodeToEnqueuedScriptConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null)} })
    /** Connection between the ContentNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: (ContentNodeToEnqueuedStylesheetConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null)} })
    /** The excerpt of the post. */
    excerpt?: { __args: {
    /** Format of the field output */
    format?: (PostObjectFieldFormatEnum | null)} } | boolean | number
    /** Connection between the NodeWithFeaturedImage type and the MediaItem type */
    featuredImage?: NodeWithFeaturedImageToMediaItemConnectionEdgeGenqlSelection
    /** The database identifier for the featured image node assigned to the content node */
    featuredImageDatabaseId?: boolean | number
    /** Globally unique ID of the featured image assigned to the node */
    featuredImageId?: boolean | number
    /** The global unique identifier for this post. This currently matches the value stored in WP_Post-&gt;guid and the guid column in the &quot;post_objects&quot; database table. */
    guid?: boolean | number
    /** Whether the post object is password protected. */
    hasPassword?: boolean | number
    /** The globally unique identifier of the post object. */
    id?: boolean | number
    /** Whether the node is a Comment */
    isComment?: boolean | number
    /** Whether the node is a Content Node */
    isContentNode?: boolean | number
    /** Whether the node represents the front page. */
    isFrontPage?: boolean | number
    /** Whether  the node represents the blog page. */
    isPostsPage?: boolean | number
    /** Whether the object is a node in the preview state */
    isPreview?: boolean | number
    /** Whether the object is restricted from the current viewer */
    isRestricted?: boolean | number
    /** True if the node is a revision of another node */
    isRevision?: boolean | number
    /** Whether this page is sticky */
    isSticky?: boolean | number
    /** Whether the node is a Term */
    isTermNode?: boolean | number
    /** The user that most recently edited the node */
    lastEditedBy?: ContentNodeToEditLastConnectionEdgeGenqlSelection
    /** The permalink of the post */
    link?: boolean | number
    /** The local modified time for a post. If a post was recently updated the modified field will change to match the corresponding time. */
    modified?: boolean | number
    /** The GMT modified time for a post. If a post was recently updated the modified field will change to match the corresponding time in GMT. */
    modifiedGmt?: boolean | number
    /**
     * @deprecated This content type is not hierarchical and typically will not have a parent
     * The parent of the content node.
     */
    parent?: PostToParentConnectionEdgeGenqlSelection
    /** The password for the post object. */
    password?: boolean | number
    /** Whether the pings are open or closed for this particular post. */
    pingStatus?: boolean | number
    /** URLs that have been pinged. */
    pinged?: boolean | number
    /** Connection between the Post type and the postFormat type */
    postFormats?: (PostToPostFormatConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null), 
    /** Arguments for filtering the connection */
    where?: (PostToPostFormatConnectionWhereArgs | null)} })
    /**
     * @deprecated Deprecated in favor of the databaseId field
     * The id field matches the WP_Post-&gt;ID field.
     */
    postId?: boolean | number
    /** Connection between the Post type and the post type */
    preview?: PostToPreviewConnectionEdgeGenqlSelection
    /** The database id of the preview node */
    previewRevisionDatabaseId?: boolean | number
    /** Whether the object is a node in the preview state */
    previewRevisionId?: boolean | number
    /** If the current node is a revision, this field exposes the node this is a revision of. Returns null if the node is not a revision of another node. */
    revisionOf?: NodeWithRevisionsToContentNodeConnectionEdgeGenqlSelection
    /** Connection between the Post type and the post type */
    revisions?: (PostToRevisionConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null), 
    /** Arguments for filtering the connection */
    where?: (PostToRevisionConnectionWhereArgs | null)} })
    /** The uri slug for the post. This is equivalent to the WP_Post-&gt;post_name field and the post_name column in the database for the &quot;post_objects&quot; table. */
    slug?: boolean | number
    /** The current status of the object */
    status?: boolean | number
    /** Connection between the Post type and the tag type */
    tags?: (PostToTagConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null), 
    /** Arguments for filtering the connection */
    where?: (PostToTagConnectionWhereArgs | null)} })
    /** The template assigned to the node */
    template?: ContentTemplateGenqlSelection
    /** Connection between the Post type and the TermNode type */
    terms?: (PostToTermNodeConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null), 
    /** Arguments for filtering the connection */
    where?: (PostToTermNodeConnectionWhereArgs | null)} })
    /** The title of the post. This is currently just the raw title. An amendment to support rendered title needs to be made. */
    title?: { __args: {
    /** Format of the field output */
    format?: (PostObjectFieldFormatEnum | null)} } | boolean | number
    /** URLs queued to be pinged. */
    toPing?: boolean | number
    /** The unique resource identifier path */
    uri?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A node that can have trackbacks and pingbacks */
export interface NodeWithTrackbacksGenqlSelection{
    /** The globally unique ID for the object */
    id?: boolean | number
    /** Whether the pings are open or closed for this particular post. */
    pingStatus?: boolean | number
    /** URLs that have been pinged. */
    pinged?: boolean | number
    /** URLs queued to be pinged. */
    toPing?: boolean | number
    on_Post?: PostGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection between the Post type and the post type */
export interface PostToPostConnectionGenqlSelection{
    /** Edges for the PostToPostConnection connection */
    edges?: PostToPostConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: PostGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: PostToPostConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface PostToPostConnectionEdgeGenqlSelection{
    /**
     * @deprecated This content type is not hierarchical and typically will not have ancestors
     * A cursor for use in pagination
     */
    cursor?: boolean | number
    /**
     * @deprecated This content type is not hierarchical and typically will not have ancestors
     * The item at the end of the edge
     */
    node?: PostGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;PostToPostConnection&quot; */
export interface PostToPostConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the connected PostConnectionEdge */
export interface PostConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    on_PostToPostConnectionPageInfo?: PostToPostConnectionPageInfoGenqlSelection
    on_PostFormatToPostConnectionPageInfo?: PostFormatToPostConnectionPageInfoGenqlSelection
    on_PostToRevisionConnectionPageInfo?: PostToRevisionConnectionPageInfoGenqlSelection
    on_TagToPostConnectionPageInfo?: TagToPostConnectionPageInfoGenqlSelection
    on_UserToPostConnectionPageInfo?: UserToPostConnectionPageInfoGenqlSelection
    on_CategoryToPostConnectionPageInfo?: CategoryToPostConnectionPageInfoGenqlSelection
    on_RootQueryToPostConnectionPageInfo?: RootQueryToPostConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Arguments for filtering the PostToCategoryConnection connection */
export interface PostToCategoryConnectionWhereArgs {
/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
cacheDomain?: (Scalars['String'] | null),
/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
childOf?: (Scalars['Int'] | null),
/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
childless?: (Scalars['Boolean'] | null),
/** Retrieve terms where the description is LIKE the input value. Default empty. */
descriptionLike?: (Scalars['String'] | null),
/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
exclude?: ((Scalars['ID'] | null)[] | null),
/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
excludeTree?: ((Scalars['ID'] | null)[] | null),
/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
hideEmpty?: (Scalars['Boolean'] | null),
/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
hierarchical?: (Scalars['Boolean'] | null),
/** Array of term ids to include. Default empty array. */
include?: ((Scalars['ID'] | null)[] | null),
/** Array of names to return term(s) for. Default empty. */
name?: ((Scalars['String'] | null)[] | null),
/** Retrieve terms where the name is LIKE the input value. Default empty. */
nameLike?: (Scalars['String'] | null),
/** Array of object IDs. Results will be limited to terms associated with these objects. */
objectIds?: ((Scalars['ID'] | null)[] | null),
/** Direction the connection should be ordered in */
order?: (OrderEnum | null),
/** Field(s) to order terms by. Defaults to 'name'. */
orderby?: (TermObjectsConnectionOrderbyEnum | null),
/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
padCounts?: (Scalars['Boolean'] | null),
/** Parent term ID to retrieve direct-child terms of. Default empty. */
parent?: (Scalars['Int'] | null),
/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
search?: (Scalars['String'] | null),
/** Array of slugs to return term(s) for. Default empty. */
slug?: ((Scalars['String'] | null)[] | null),
/** Array of term taxonomy IDs, to match when querying terms. */
termTaxonomId?: ((Scalars['ID'] | null)[] | null),
/** Array of term taxonomy IDs, to match when querying terms. */
termTaxonomyId?: ((Scalars['ID'] | null)[] | null),
/** Whether to prime meta caches for matched terms. Default true. */
updateTermMetaCache?: (Scalars['Boolean'] | null)}


/** Connection between the Post type and the category type */
export interface PostToCategoryConnectionGenqlSelection{
    /** Edges for the PostToCategoryConnection connection */
    edges?: PostToCategoryConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: CategoryGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: PostToCategoryConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface PostToCategoryConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: CategoryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;PostToCategoryConnection&quot; */
export interface PostToCategoryConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Arguments for filtering the PostToCommentConnection connection */
export interface PostToCommentConnectionWhereArgs {
/** Comment author email address. */
authorEmail?: (Scalars['String'] | null),
/** Array of author IDs to include comments for. */
authorIn?: ((Scalars['ID'] | null)[] | null),
/** Array of author IDs to exclude comments for. */
authorNotIn?: ((Scalars['ID'] | null)[] | null),
/** Comment author URL. */
authorUrl?: (Scalars['String'] | null),
/** Array of comment IDs to include. */
commentIn?: ((Scalars['ID'] | null)[] | null),
/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
commentNotIn?: ((Scalars['ID'] | null)[] | null),
/** Include comments of a given type. */
commentType?: (Scalars['String'] | null),
/** Include comments from a given array of comment types. */
commentTypeIn?: ((Scalars['String'] | null)[] | null),
/** Exclude comments from a given array of comment types. */
commentTypeNotIn?: (Scalars['String'] | null),
/** Content object author ID to limit results by. */
contentAuthor?: ((Scalars['ID'] | null)[] | null),
/** Array of author IDs to retrieve comments for. */
contentAuthorIn?: ((Scalars['ID'] | null)[] | null),
/** Array of author IDs *not* to retrieve comments for. */
contentAuthorNotIn?: ((Scalars['ID'] | null)[] | null),
/** Limit results to those affiliated with a given content object ID. */
contentId?: (Scalars['ID'] | null),
/** Array of content object IDs to include affiliated comments for. */
contentIdIn?: ((Scalars['ID'] | null)[] | null),
/** Array of content object IDs to exclude affiliated comments for. */
contentIdNotIn?: ((Scalars['ID'] | null)[] | null),
/** Content object name (i.e. slug ) to retrieve affiliated comments for. */
contentName?: (Scalars['String'] | null),
/** Content Object parent ID to retrieve affiliated comments for. */
contentParent?: (Scalars['Int'] | null),
/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
contentStatus?: ((PostStatusEnum | null)[] | null),
/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
contentType?: ((ContentTypeEnum | null)[] | null),
/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
includeUnapproved?: ((Scalars['ID'] | null)[] | null),
/** Karma score to retrieve matching comments for. */
karma?: (Scalars['Int'] | null),
/** The cardinality of the order of the connection */
order?: (OrderEnum | null),
/** Field to order the comments by. */
orderby?: (CommentsConnectionOrderbyEnum | null),
/** Parent ID of comment to retrieve children of. */
parent?: (Scalars['Int'] | null),
/** Array of parent IDs of comments to retrieve children for. */
parentIn?: ((Scalars['ID'] | null)[] | null),
/** Array of parent IDs of comments *not* to retrieve children for. */
parentNotIn?: ((Scalars['ID'] | null)[] | null),
/** Search term(s) to retrieve matching comments for. */
search?: (Scalars['String'] | null),
/** Comment status to limit results by. */
status?: (Scalars['String'] | null),
/** Include comments for a specific user ID. */
userId?: (Scalars['ID'] | null)}


/** Connection between the Post type and the Comment type */
export interface PostToCommentConnectionGenqlSelection{
    /** Edges for the PostToCommentConnection connection */
    edges?: PostToCommentConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: CommentGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: PostToCommentConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface PostToCommentConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: CommentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;PostToCommentConnection&quot; */
export interface PostToCommentConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection between the Post type and the post type */
export interface PostToParentConnectionEdgeGenqlSelection{
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: boolean | number
    /**
     * @deprecated This content type is not hierarchical and typically will not have a parent
     * The node of the connection, without the edges
     */
    node?: PostGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Arguments for filtering the PostToPostFormatConnection connection */
export interface PostToPostFormatConnectionWhereArgs {
/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
cacheDomain?: (Scalars['String'] | null),
/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
childOf?: (Scalars['Int'] | null),
/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
childless?: (Scalars['Boolean'] | null),
/** Retrieve terms where the description is LIKE the input value. Default empty. */
descriptionLike?: (Scalars['String'] | null),
/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
exclude?: ((Scalars['ID'] | null)[] | null),
/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
excludeTree?: ((Scalars['ID'] | null)[] | null),
/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
hideEmpty?: (Scalars['Boolean'] | null),
/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
hierarchical?: (Scalars['Boolean'] | null),
/** Array of term ids to include. Default empty array. */
include?: ((Scalars['ID'] | null)[] | null),
/** Array of names to return term(s) for. Default empty. */
name?: ((Scalars['String'] | null)[] | null),
/** Retrieve terms where the name is LIKE the input value. Default empty. */
nameLike?: (Scalars['String'] | null),
/** Array of object IDs. Results will be limited to terms associated with these objects. */
objectIds?: ((Scalars['ID'] | null)[] | null),
/** Direction the connection should be ordered in */
order?: (OrderEnum | null),
/** Field(s) to order terms by. Defaults to 'name'. */
orderby?: (TermObjectsConnectionOrderbyEnum | null),
/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
padCounts?: (Scalars['Boolean'] | null),
/** Parent term ID to retrieve direct-child terms of. Default empty. */
parent?: (Scalars['Int'] | null),
/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
search?: (Scalars['String'] | null),
/** Array of slugs to return term(s) for. Default empty. */
slug?: ((Scalars['String'] | null)[] | null),
/** Array of term taxonomy IDs, to match when querying terms. */
termTaxonomId?: ((Scalars['ID'] | null)[] | null),
/** Array of term taxonomy IDs, to match when querying terms. */
termTaxonomyId?: ((Scalars['ID'] | null)[] | null),
/** Whether to prime meta caches for matched terms. Default true. */
updateTermMetaCache?: (Scalars['Boolean'] | null)}


/** Connection between the Post type and the postFormat type */
export interface PostToPostFormatConnectionGenqlSelection{
    /** Edges for the PostToPostFormatConnection connection */
    edges?: PostToPostFormatConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: PostFormatGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: PostToPostFormatConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection to postFormat Nodes */
export interface PostFormatConnectionGenqlSelection{
    /** A list of edges (relational context) between RootQuery and connected postFormat Nodes */
    edges?: PostFormatConnectionEdgeGenqlSelection
    /** A list of connected postFormat Nodes */
    nodes?: PostFormatGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: PostFormatConnectionPageInfoGenqlSelection
    on_PostToPostFormatConnection?: PostToPostFormatConnectionGenqlSelection
    on_RootQueryToPostFormatConnection?: RootQueryToPostFormatConnectionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Edge between a Node and a connected postFormat */
export interface PostFormatConnectionEdgeGenqlSelection{
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: boolean | number
    /** The connected postFormat Node */
    node?: PostFormatGenqlSelection
    on_PostToPostFormatConnectionEdge?: PostToPostFormatConnectionEdgeGenqlSelection
    on_RootQueryToPostFormatConnectionEdge?: RootQueryToPostFormatConnectionEdgeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The postFormat type */
export interface PostFormatGenqlSelection{
    /** Connection between the PostFormat type and the ContentNode type */
    contentNodes?: (PostFormatToContentNodeConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null), 
    /** Arguments for filtering the connection */
    where?: (PostFormatToContentNodeConnectionWhereArgs | null)} })
    /** The number of objects connected to the object */
    count?: boolean | number
    /** The unique identifier stored in the database */
    databaseId?: boolean | number
    /** The description of the object */
    description?: boolean | number
    /** Connection between the TermNode type and the EnqueuedScript type */
    enqueuedScripts?: (TermNodeToEnqueuedScriptConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null)} })
    /** Connection between the TermNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: (TermNodeToEnqueuedStylesheetConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null)} })
    /** The globally unique ID for the object */
    id?: boolean | number
    /** Whether the node is a Comment */
    isComment?: boolean | number
    /** Whether the node is a Content Node */
    isContentNode?: boolean | number
    /** Whether the node represents the front page. */
    isFrontPage?: boolean | number
    /** Whether  the node represents the blog page. */
    isPostsPage?: boolean | number
    /** Whether the object is restricted from the current viewer */
    isRestricted?: boolean | number
    /** Whether the node is a Term */
    isTermNode?: boolean | number
    /** The link to the term */
    link?: boolean | number
    /** The human friendly name of the object. */
    name?: boolean | number
    /**
     * @deprecated Deprecated in favor of databaseId
     * The id field matches the WP_Post-&gt;ID field.
     */
    postFormatId?: boolean | number
    /** Connection between the PostFormat type and the post type */
    posts?: (PostFormatToPostConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null), 
    /** Arguments for filtering the connection */
    where?: (PostFormatToPostConnectionWhereArgs | null)} })
    /** An alphanumeric identifier for the object unique to its type. */
    slug?: boolean | number
    /** Connection between the PostFormat type and the Taxonomy type */
    taxonomy?: PostFormatToTaxonomyConnectionEdgeGenqlSelection
    /** The name of the taxonomy that the object is associated with */
    taxonomyName?: boolean | number
    /** The ID of the term group that this term object belongs to */
    termGroupId?: boolean | number
    /** The taxonomy ID that the object is associated with */
    termTaxonomyId?: boolean | number
    /** The unique resource identifier path */
    uri?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Arguments for filtering the PostFormatToContentNodeConnection connection */
export interface PostFormatToContentNodeConnectionWhereArgs {
/** The Types of content to filter */
contentTypes?: ((ContentTypesOfPostFormatEnum | null)[] | null),
/** Filter the connection based on dates */
dateQuery?: (DateQueryInput | null),
/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
hasPassword?: (Scalars['Boolean'] | null),
/** Specific database ID of the object */
id?: (Scalars['Int'] | null),
/** Array of IDs for the objects to retrieve */
in?: ((Scalars['ID'] | null)[] | null),
/** Get objects with a specific mimeType property */
mimeType?: (MimeTypeEnum | null),
/** Slug / post_name of the object */
name?: (Scalars['String'] | null),
/** Specify objects to retrieve. Use slugs */
nameIn?: ((Scalars['String'] | null)[] | null),
/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
notIn?: ((Scalars['ID'] | null)[] | null),
/** What parameter to use to order the objects by. */
orderby?: ((PostObjectsConnectionOrderbyInput | null)[] | null),
/** Use ID to return only children. Use 0 to return only top-level items */
parent?: (Scalars['ID'] | null),
/** Specify objects whose parent is in an array */
parentIn?: ((Scalars['ID'] | null)[] | null),
/** Specify posts whose parent is not in an array */
parentNotIn?: ((Scalars['ID'] | null)[] | null),
/** Show posts with a specific password. */
password?: (Scalars['String'] | null),
/** Show Posts based on a keyword search */
search?: (Scalars['String'] | null),
/** Retrieve posts where post status is in an array. */
stati?: ((PostStatusEnum | null)[] | null),
/** Show posts with a specific status. */
status?: (PostStatusEnum | null),
/** Title of the object */
title?: (Scalars['String'] | null)}


/** Connection between the PostFormat type and the ContentNode type */
export interface PostFormatToContentNodeConnectionGenqlSelection{
    /** Edges for the PostFormatToContentNodeConnection connection */
    edges?: PostFormatToContentNodeConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: ContentNodeGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: PostFormatToContentNodeConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface PostFormatToContentNodeConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: ContentNodeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;PostFormatToContentNodeConnection&quot; */
export interface PostFormatToContentNodeConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Arguments for filtering the PostFormatToPostConnection connection */
export interface PostFormatToPostConnectionWhereArgs {
/** The user that's connected as the author of the object. Use the userId for the author object. */
author?: (Scalars['Int'] | null),
/** Find objects connected to author(s) in the array of author's userIds */
authorIn?: ((Scalars['ID'] | null)[] | null),
/** Find objects connected to the author by the author's nicename */
authorName?: (Scalars['String'] | null),
/** Find objects NOT connected to author(s) in the array of author's userIds */
authorNotIn?: ((Scalars['ID'] | null)[] | null),
/** Category ID */
categoryId?: (Scalars['Int'] | null),
/** Array of category IDs, used to display objects from one category OR another */
categoryIn?: ((Scalars['ID'] | null)[] | null),
/** Use Category Slug */
categoryName?: (Scalars['String'] | null),
/** Array of category IDs, used to display objects from one category OR another */
categoryNotIn?: ((Scalars['ID'] | null)[] | null),
/** Filter the connection based on dates */
dateQuery?: (DateQueryInput | null),
/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
hasPassword?: (Scalars['Boolean'] | null),
/** Specific database ID of the object */
id?: (Scalars['Int'] | null),
/** Array of IDs for the objects to retrieve */
in?: ((Scalars['ID'] | null)[] | null),
/** Get objects with a specific mimeType property */
mimeType?: (MimeTypeEnum | null),
/** Slug / post_name of the object */
name?: (Scalars['String'] | null),
/** Specify objects to retrieve. Use slugs */
nameIn?: ((Scalars['String'] | null)[] | null),
/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
notIn?: ((Scalars['ID'] | null)[] | null),
/** What parameter to use to order the objects by. */
orderby?: ((PostObjectsConnectionOrderbyInput | null)[] | null),
/** Use ID to return only children. Use 0 to return only top-level items */
parent?: (Scalars['ID'] | null),
/** Specify objects whose parent is in an array */
parentIn?: ((Scalars['ID'] | null)[] | null),
/** Specify posts whose parent is not in an array */
parentNotIn?: ((Scalars['ID'] | null)[] | null),
/** Show posts with a specific password. */
password?: (Scalars['String'] | null),
/** Show Posts based on a keyword search */
search?: (Scalars['String'] | null),
/** Retrieve posts where post status is in an array. */
stati?: ((PostStatusEnum | null)[] | null),
/** Show posts with a specific status. */
status?: (PostStatusEnum | null),
/** Tag Slug */
tag?: (Scalars['String'] | null),
/** Use Tag ID */
tagId?: (Scalars['String'] | null),
/** Array of tag IDs, used to display objects from one tag OR another */
tagIn?: ((Scalars['ID'] | null)[] | null),
/** Array of tag IDs, used to display objects from one tag OR another */
tagNotIn?: ((Scalars['ID'] | null)[] | null),
/** Array of tag slugs, used to display objects from one tag AND another */
tagSlugAnd?: ((Scalars['String'] | null)[] | null),
/** Array of tag slugs, used to include objects in ANY specified tags */
tagSlugIn?: ((Scalars['String'] | null)[] | null),
/** Title of the object */
title?: (Scalars['String'] | null)}


/** Connection between the PostFormat type and the post type */
export interface PostFormatToPostConnectionGenqlSelection{
    /** Edges for the PostFormatToPostConnection connection */
    edges?: PostFormatToPostConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: PostGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: PostFormatToPostConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface PostFormatToPostConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: PostGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;PostFormatToPostConnection&quot; */
export interface PostFormatToPostConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection between the PostFormat type and the Taxonomy type */
export interface PostFormatToTaxonomyConnectionEdgeGenqlSelection{
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: boolean | number
    /** The node of the connection, without the edges */
    node?: TaxonomyGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the connected PostFormatConnectionEdge */
export interface PostFormatConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    on_PostToPostFormatConnectionPageInfo?: PostToPostFormatConnectionPageInfoGenqlSelection
    on_RootQueryToPostFormatConnectionPageInfo?: RootQueryToPostFormatConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface PostToPostFormatConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: PostFormatGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;PostToPostFormatConnection&quot; */
export interface PostToPostFormatConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection between the Post type and the post type */
export interface PostToPreviewConnectionEdgeGenqlSelection{
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: boolean | number
    /** The node of the connection, without the edges */
    node?: PostGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Arguments for filtering the PostToRevisionConnection connection */
export interface PostToRevisionConnectionWhereArgs {
/** The user that's connected as the author of the object. Use the userId for the author object. */
author?: (Scalars['Int'] | null),
/** Find objects connected to author(s) in the array of author's userIds */
authorIn?: ((Scalars['ID'] | null)[] | null),
/** Find objects connected to the author by the author's nicename */
authorName?: (Scalars['String'] | null),
/** Find objects NOT connected to author(s) in the array of author's userIds */
authorNotIn?: ((Scalars['ID'] | null)[] | null),
/** Category ID */
categoryId?: (Scalars['Int'] | null),
/** Array of category IDs, used to display objects from one category OR another */
categoryIn?: ((Scalars['ID'] | null)[] | null),
/** Use Category Slug */
categoryName?: (Scalars['String'] | null),
/** Array of category IDs, used to display objects from one category OR another */
categoryNotIn?: ((Scalars['ID'] | null)[] | null),
/** Filter the connection based on dates */
dateQuery?: (DateQueryInput | null),
/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
hasPassword?: (Scalars['Boolean'] | null),
/** Specific database ID of the object */
id?: (Scalars['Int'] | null),
/** Array of IDs for the objects to retrieve */
in?: ((Scalars['ID'] | null)[] | null),
/** Get objects with a specific mimeType property */
mimeType?: (MimeTypeEnum | null),
/** Slug / post_name of the object */
name?: (Scalars['String'] | null),
/** Specify objects to retrieve. Use slugs */
nameIn?: ((Scalars['String'] | null)[] | null),
/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
notIn?: ((Scalars['ID'] | null)[] | null),
/** What parameter to use to order the objects by. */
orderby?: ((PostObjectsConnectionOrderbyInput | null)[] | null),
/** Use ID to return only children. Use 0 to return only top-level items */
parent?: (Scalars['ID'] | null),
/** Specify objects whose parent is in an array */
parentIn?: ((Scalars['ID'] | null)[] | null),
/** Specify posts whose parent is not in an array */
parentNotIn?: ((Scalars['ID'] | null)[] | null),
/** Show posts with a specific password. */
password?: (Scalars['String'] | null),
/** Show Posts based on a keyword search */
search?: (Scalars['String'] | null),
/** Retrieve posts where post status is in an array. */
stati?: ((PostStatusEnum | null)[] | null),
/** Show posts with a specific status. */
status?: (PostStatusEnum | null),
/** Tag Slug */
tag?: (Scalars['String'] | null),
/** Use Tag ID */
tagId?: (Scalars['String'] | null),
/** Array of tag IDs, used to display objects from one tag OR another */
tagIn?: ((Scalars['ID'] | null)[] | null),
/** Array of tag IDs, used to display objects from one tag OR another */
tagNotIn?: ((Scalars['ID'] | null)[] | null),
/** Array of tag slugs, used to display objects from one tag AND another */
tagSlugAnd?: ((Scalars['String'] | null)[] | null),
/** Array of tag slugs, used to include objects in ANY specified tags */
tagSlugIn?: ((Scalars['String'] | null)[] | null),
/** Title of the object */
title?: (Scalars['String'] | null)}


/** Connection between the Post type and the post type */
export interface PostToRevisionConnectionGenqlSelection{
    /** Edges for the PostToRevisionConnection connection */
    edges?: PostToRevisionConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: PostGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: PostToRevisionConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface PostToRevisionConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: PostGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;PostToRevisionConnection&quot; */
export interface PostToRevisionConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Arguments for filtering the PostToTagConnection connection */
export interface PostToTagConnectionWhereArgs {
/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
cacheDomain?: (Scalars['String'] | null),
/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
childOf?: (Scalars['Int'] | null),
/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
childless?: (Scalars['Boolean'] | null),
/** Retrieve terms where the description is LIKE the input value. Default empty. */
descriptionLike?: (Scalars['String'] | null),
/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
exclude?: ((Scalars['ID'] | null)[] | null),
/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
excludeTree?: ((Scalars['ID'] | null)[] | null),
/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
hideEmpty?: (Scalars['Boolean'] | null),
/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
hierarchical?: (Scalars['Boolean'] | null),
/** Array of term ids to include. Default empty array. */
include?: ((Scalars['ID'] | null)[] | null),
/** Array of names to return term(s) for. Default empty. */
name?: ((Scalars['String'] | null)[] | null),
/** Retrieve terms where the name is LIKE the input value. Default empty. */
nameLike?: (Scalars['String'] | null),
/** Array of object IDs. Results will be limited to terms associated with these objects. */
objectIds?: ((Scalars['ID'] | null)[] | null),
/** Direction the connection should be ordered in */
order?: (OrderEnum | null),
/** Field(s) to order terms by. Defaults to 'name'. */
orderby?: (TermObjectsConnectionOrderbyEnum | null),
/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
padCounts?: (Scalars['Boolean'] | null),
/** Parent term ID to retrieve direct-child terms of. Default empty. */
parent?: (Scalars['Int'] | null),
/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
search?: (Scalars['String'] | null),
/** Array of slugs to return term(s) for. Default empty. */
slug?: ((Scalars['String'] | null)[] | null),
/** Array of term taxonomy IDs, to match when querying terms. */
termTaxonomId?: ((Scalars['ID'] | null)[] | null),
/** Array of term taxonomy IDs, to match when querying terms. */
termTaxonomyId?: ((Scalars['ID'] | null)[] | null),
/** Whether to prime meta caches for matched terms. Default true. */
updateTermMetaCache?: (Scalars['Boolean'] | null)}


/** Connection between the Post type and the tag type */
export interface PostToTagConnectionGenqlSelection{
    /** Edges for the PostToTagConnection connection */
    edges?: PostToTagConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: TagGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: PostToTagConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection to tag Nodes */
export interface TagConnectionGenqlSelection{
    /** A list of edges (relational context) between RootQuery and connected tag Nodes */
    edges?: TagConnectionEdgeGenqlSelection
    /** A list of connected tag Nodes */
    nodes?: TagGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: TagConnectionPageInfoGenqlSelection
    on_PostToTagConnection?: PostToTagConnectionGenqlSelection
    on_RootQueryToTagConnection?: RootQueryToTagConnectionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Edge between a Node and a connected tag */
export interface TagConnectionEdgeGenqlSelection{
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: boolean | number
    /** The connected tag Node */
    node?: TagGenqlSelection
    on_PostToTagConnectionEdge?: PostToTagConnectionEdgeGenqlSelection
    on_RootQueryToTagConnectionEdge?: RootQueryToTagConnectionEdgeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The tag type */
export interface TagGenqlSelection{
    /** Connection between the Tag type and the ContentNode type */
    contentNodes?: (TagToContentNodeConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null), 
    /** Arguments for filtering the connection */
    where?: (TagToContentNodeConnectionWhereArgs | null)} })
    /** The number of objects connected to the object */
    count?: boolean | number
    /** The unique identifier stored in the database */
    databaseId?: boolean | number
    /** The description of the object */
    description?: boolean | number
    /** Connection between the TermNode type and the EnqueuedScript type */
    enqueuedScripts?: (TermNodeToEnqueuedScriptConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null)} })
    /** Connection between the TermNode type and the EnqueuedStylesheet type */
    enqueuedStylesheets?: (TermNodeToEnqueuedStylesheetConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null)} })
    /** The globally unique ID for the object */
    id?: boolean | number
    /** Whether the node is a Comment */
    isComment?: boolean | number
    /** Whether the node is a Content Node */
    isContentNode?: boolean | number
    /** Whether the node represents the front page. */
    isFrontPage?: boolean | number
    /** Whether  the node represents the blog page. */
    isPostsPage?: boolean | number
    /** Whether the object is restricted from the current viewer */
    isRestricted?: boolean | number
    /** Whether the node is a Term */
    isTermNode?: boolean | number
    /** The link to the term */
    link?: boolean | number
    /** The human friendly name of the object. */
    name?: boolean | number
    /** Connection between the Tag type and the post type */
    posts?: (TagToPostConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null), 
    /** Arguments for filtering the connection */
    where?: (TagToPostConnectionWhereArgs | null)} })
    /** An alphanumeric identifier for the object unique to its type. */
    slug?: boolean | number
    /**
     * @deprecated Deprecated in favor of databaseId
     * The id field matches the WP_Post-&gt;ID field.
     */
    tagId?: boolean | number
    /** Connection between the Tag type and the Taxonomy type */
    taxonomy?: TagToTaxonomyConnectionEdgeGenqlSelection
    /** The name of the taxonomy that the object is associated with */
    taxonomyName?: boolean | number
    /** The ID of the term group that this term object belongs to */
    termGroupId?: boolean | number
    /** The taxonomy ID that the object is associated with */
    termTaxonomyId?: boolean | number
    /** The unique resource identifier path */
    uri?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Arguments for filtering the TagToContentNodeConnection connection */
export interface TagToContentNodeConnectionWhereArgs {
/** The Types of content to filter */
contentTypes?: ((ContentTypesOfTagEnum | null)[] | null),
/** Filter the connection based on dates */
dateQuery?: (DateQueryInput | null),
/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
hasPassword?: (Scalars['Boolean'] | null),
/** Specific database ID of the object */
id?: (Scalars['Int'] | null),
/** Array of IDs for the objects to retrieve */
in?: ((Scalars['ID'] | null)[] | null),
/** Get objects with a specific mimeType property */
mimeType?: (MimeTypeEnum | null),
/** Slug / post_name of the object */
name?: (Scalars['String'] | null),
/** Specify objects to retrieve. Use slugs */
nameIn?: ((Scalars['String'] | null)[] | null),
/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
notIn?: ((Scalars['ID'] | null)[] | null),
/** What parameter to use to order the objects by. */
orderby?: ((PostObjectsConnectionOrderbyInput | null)[] | null),
/** Use ID to return only children. Use 0 to return only top-level items */
parent?: (Scalars['ID'] | null),
/** Specify objects whose parent is in an array */
parentIn?: ((Scalars['ID'] | null)[] | null),
/** Specify posts whose parent is not in an array */
parentNotIn?: ((Scalars['ID'] | null)[] | null),
/** Show posts with a specific password. */
password?: (Scalars['String'] | null),
/** Show Posts based on a keyword search */
search?: (Scalars['String'] | null),
/** Retrieve posts where post status is in an array. */
stati?: ((PostStatusEnum | null)[] | null),
/** Show posts with a specific status. */
status?: (PostStatusEnum | null),
/** Title of the object */
title?: (Scalars['String'] | null)}


/** Connection between the Tag type and the ContentNode type */
export interface TagToContentNodeConnectionGenqlSelection{
    /** Edges for the TagToContentNodeConnection connection */
    edges?: TagToContentNodeConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: ContentNodeGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: TagToContentNodeConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface TagToContentNodeConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: ContentNodeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;TagToContentNodeConnection&quot; */
export interface TagToContentNodeConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Arguments for filtering the TagToPostConnection connection */
export interface TagToPostConnectionWhereArgs {
/** The user that's connected as the author of the object. Use the userId for the author object. */
author?: (Scalars['Int'] | null),
/** Find objects connected to author(s) in the array of author's userIds */
authorIn?: ((Scalars['ID'] | null)[] | null),
/** Find objects connected to the author by the author's nicename */
authorName?: (Scalars['String'] | null),
/** Find objects NOT connected to author(s) in the array of author's userIds */
authorNotIn?: ((Scalars['ID'] | null)[] | null),
/** Category ID */
categoryId?: (Scalars['Int'] | null),
/** Array of category IDs, used to display objects from one category OR another */
categoryIn?: ((Scalars['ID'] | null)[] | null),
/** Use Category Slug */
categoryName?: (Scalars['String'] | null),
/** Array of category IDs, used to display objects from one category OR another */
categoryNotIn?: ((Scalars['ID'] | null)[] | null),
/** Filter the connection based on dates */
dateQuery?: (DateQueryInput | null),
/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
hasPassword?: (Scalars['Boolean'] | null),
/** Specific database ID of the object */
id?: (Scalars['Int'] | null),
/** Array of IDs for the objects to retrieve */
in?: ((Scalars['ID'] | null)[] | null),
/** Get objects with a specific mimeType property */
mimeType?: (MimeTypeEnum | null),
/** Slug / post_name of the object */
name?: (Scalars['String'] | null),
/** Specify objects to retrieve. Use slugs */
nameIn?: ((Scalars['String'] | null)[] | null),
/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
notIn?: ((Scalars['ID'] | null)[] | null),
/** What parameter to use to order the objects by. */
orderby?: ((PostObjectsConnectionOrderbyInput | null)[] | null),
/** Use ID to return only children. Use 0 to return only top-level items */
parent?: (Scalars['ID'] | null),
/** Specify objects whose parent is in an array */
parentIn?: ((Scalars['ID'] | null)[] | null),
/** Specify posts whose parent is not in an array */
parentNotIn?: ((Scalars['ID'] | null)[] | null),
/** Show posts with a specific password. */
password?: (Scalars['String'] | null),
/** Show Posts based on a keyword search */
search?: (Scalars['String'] | null),
/** Retrieve posts where post status is in an array. */
stati?: ((PostStatusEnum | null)[] | null),
/** Show posts with a specific status. */
status?: (PostStatusEnum | null),
/** Tag Slug */
tag?: (Scalars['String'] | null),
/** Use Tag ID */
tagId?: (Scalars['String'] | null),
/** Array of tag IDs, used to display objects from one tag OR another */
tagIn?: ((Scalars['ID'] | null)[] | null),
/** Array of tag IDs, used to display objects from one tag OR another */
tagNotIn?: ((Scalars['ID'] | null)[] | null),
/** Array of tag slugs, used to display objects from one tag AND another */
tagSlugAnd?: ((Scalars['String'] | null)[] | null),
/** Array of tag slugs, used to include objects in ANY specified tags */
tagSlugIn?: ((Scalars['String'] | null)[] | null),
/** Title of the object */
title?: (Scalars['String'] | null)}


/** Connection between the Tag type and the post type */
export interface TagToPostConnectionGenqlSelection{
    /** Edges for the TagToPostConnection connection */
    edges?: TagToPostConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: PostGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: TagToPostConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface TagToPostConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: PostGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;TagToPostConnection&quot; */
export interface TagToPostConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection between the Tag type and the Taxonomy type */
export interface TagToTaxonomyConnectionEdgeGenqlSelection{
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: boolean | number
    /** The node of the connection, without the edges */
    node?: TaxonomyGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the connected TagConnectionEdge */
export interface TagConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    on_PostToTagConnectionPageInfo?: PostToTagConnectionPageInfoGenqlSelection
    on_RootQueryToTagConnectionPageInfo?: RootQueryToTagConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface PostToTagConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: TagGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;PostToTagConnection&quot; */
export interface PostToTagConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Arguments for filtering the PostToTermNodeConnection connection */
export interface PostToTermNodeConnectionWhereArgs {
/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
cacheDomain?: (Scalars['String'] | null),
/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
childOf?: (Scalars['Int'] | null),
/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
childless?: (Scalars['Boolean'] | null),
/** Retrieve terms where the description is LIKE the input value. Default empty. */
descriptionLike?: (Scalars['String'] | null),
/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
exclude?: ((Scalars['ID'] | null)[] | null),
/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
excludeTree?: ((Scalars['ID'] | null)[] | null),
/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
hideEmpty?: (Scalars['Boolean'] | null),
/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
hierarchical?: (Scalars['Boolean'] | null),
/** Array of term ids to include. Default empty array. */
include?: ((Scalars['ID'] | null)[] | null),
/** Array of names to return term(s) for. Default empty. */
name?: ((Scalars['String'] | null)[] | null),
/** Retrieve terms where the name is LIKE the input value. Default empty. */
nameLike?: (Scalars['String'] | null),
/** Array of object IDs. Results will be limited to terms associated with these objects. */
objectIds?: ((Scalars['ID'] | null)[] | null),
/** Direction the connection should be ordered in */
order?: (OrderEnum | null),
/** Field(s) to order terms by. Defaults to 'name'. */
orderby?: (TermObjectsConnectionOrderbyEnum | null),
/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
padCounts?: (Scalars['Boolean'] | null),
/** Parent term ID to retrieve direct-child terms of. Default empty. */
parent?: (Scalars['Int'] | null),
/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
search?: (Scalars['String'] | null),
/** Array of slugs to return term(s) for. Default empty. */
slug?: ((Scalars['String'] | null)[] | null),
/** The Taxonomy to filter terms by */
taxonomies?: ((TaxonomyEnum | null)[] | null),
/** Array of term taxonomy IDs, to match when querying terms. */
termTaxonomId?: ((Scalars['ID'] | null)[] | null),
/** Array of term taxonomy IDs, to match when querying terms. */
termTaxonomyId?: ((Scalars['ID'] | null)[] | null),
/** Whether to prime meta caches for matched terms. Default true. */
updateTermMetaCache?: (Scalars['Boolean'] | null)}


/** Connection between the Post type and the TermNode type */
export interface PostToTermNodeConnectionGenqlSelection{
    /** Edges for the PostToTermNodeConnection connection */
    edges?: PostToTermNodeConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: TermNodeGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: PostToTermNodeConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface PostToTermNodeConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: TermNodeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;PostToTermNodeConnection&quot; */
export interface PostToTermNodeConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface UserToPostConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: PostGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;UserToPostConnection&quot; */
export interface UserToPostConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Arguments for filtering the UserToRevisionsConnection connection */
export interface UserToRevisionsConnectionWhereArgs {
/** The Types of content to filter */
contentTypes?: ((ContentTypeEnum | null)[] | null),
/** Filter the connection based on dates */
dateQuery?: (DateQueryInput | null),
/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
hasPassword?: (Scalars['Boolean'] | null),
/** Specific database ID of the object */
id?: (Scalars['Int'] | null),
/** Array of IDs for the objects to retrieve */
in?: ((Scalars['ID'] | null)[] | null),
/** Get objects with a specific mimeType property */
mimeType?: (MimeTypeEnum | null),
/** Slug / post_name of the object */
name?: (Scalars['String'] | null),
/** Specify objects to retrieve. Use slugs */
nameIn?: ((Scalars['String'] | null)[] | null),
/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
notIn?: ((Scalars['ID'] | null)[] | null),
/** What parameter to use to order the objects by. */
orderby?: ((PostObjectsConnectionOrderbyInput | null)[] | null),
/** Use ID to return only children. Use 0 to return only top-level items */
parent?: (Scalars['ID'] | null),
/** Specify objects whose parent is in an array */
parentIn?: ((Scalars['ID'] | null)[] | null),
/** Specify posts whose parent is not in an array */
parentNotIn?: ((Scalars['ID'] | null)[] | null),
/** Show posts with a specific password. */
password?: (Scalars['String'] | null),
/** Show Posts based on a keyword search */
search?: (Scalars['String'] | null),
/** Retrieve posts where post status is in an array. */
stati?: ((PostStatusEnum | null)[] | null),
/** Show posts with a specific status. */
status?: (PostStatusEnum | null),
/** Title of the object */
title?: (Scalars['String'] | null)}


/** Connection between the User type and the ContentNode type */
export interface UserToRevisionsConnectionGenqlSelection{
    /** Edges for the UserToRevisionsConnection connection */
    edges?: UserToRevisionsConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: ContentNodeGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: UserToRevisionsConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface UserToRevisionsConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: ContentNodeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;UserToRevisionsConnection&quot; */
export interface UserToRevisionsConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection between the User type and the UserRole type */
export interface UserToUserRoleConnectionGenqlSelection{
    /** Edges for the UserToUserRoleConnection connection */
    edges?: UserToUserRoleConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: UserRoleGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: UserToUserRoleConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection to UserRole Nodes */
export interface UserRoleConnectionGenqlSelection{
    /** A list of edges (relational context) between RootQuery and connected UserRole Nodes */
    edges?: UserRoleConnectionEdgeGenqlSelection
    /** A list of connected UserRole Nodes */
    nodes?: UserRoleGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: UserRoleConnectionPageInfoGenqlSelection
    on_UserToUserRoleConnection?: UserToUserRoleConnectionGenqlSelection
    on_RootQueryToUserRoleConnection?: RootQueryToUserRoleConnectionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Edge between a Node and a connected UserRole */
export interface UserRoleConnectionEdgeGenqlSelection{
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: boolean | number
    /** The connected UserRole Node */
    node?: UserRoleGenqlSelection
    on_UserToUserRoleConnectionEdge?: UserToUserRoleConnectionEdgeGenqlSelection
    on_RootQueryToUserRoleConnectionEdge?: RootQueryToUserRoleConnectionEdgeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A user role object */
export interface UserRoleGenqlSelection{
    /** The capabilities that belong to this role */
    capabilities?: boolean | number
    /** The display name of the role */
    displayName?: boolean | number
    /** The globally unique identifier for the user role object. */
    id?: boolean | number
    /** Whether the object is restricted from the current viewer */
    isRestricted?: boolean | number
    /** The registered name of the role */
    name?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the connected UserRoleConnectionEdge */
export interface UserRoleConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    on_UserToUserRoleConnectionPageInfo?: UserToUserRoleConnectionPageInfoGenqlSelection
    on_RootQueryToUserRoleConnectionPageInfo?: RootQueryToUserRoleConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface UserToUserRoleConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: UserRoleGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;UserToUserRoleConnection&quot; */
export interface UserToUserRoleConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface CategoryToContentNodeConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: ContentNodeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;CategoryToContentNodeConnection&quot; */
export interface CategoryToContentNodeConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection between the Category type and the category type */
export interface CategoryToParentCategoryConnectionEdgeGenqlSelection{
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: boolean | number
    /** The node of the connection, without the edges */
    node?: CategoryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Arguments for filtering the CategoryToPostConnection connection */
export interface CategoryToPostConnectionWhereArgs {
/** The user that's connected as the author of the object. Use the userId for the author object. */
author?: (Scalars['Int'] | null),
/** Find objects connected to author(s) in the array of author's userIds */
authorIn?: ((Scalars['ID'] | null)[] | null),
/** Find objects connected to the author by the author's nicename */
authorName?: (Scalars['String'] | null),
/** Find objects NOT connected to author(s) in the array of author's userIds */
authorNotIn?: ((Scalars['ID'] | null)[] | null),
/** Category ID */
categoryId?: (Scalars['Int'] | null),
/** Array of category IDs, used to display objects from one category OR another */
categoryIn?: ((Scalars['ID'] | null)[] | null),
/** Use Category Slug */
categoryName?: (Scalars['String'] | null),
/** Array of category IDs, used to display objects from one category OR another */
categoryNotIn?: ((Scalars['ID'] | null)[] | null),
/** Filter the connection based on dates */
dateQuery?: (DateQueryInput | null),
/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
hasPassword?: (Scalars['Boolean'] | null),
/** Specific database ID of the object */
id?: (Scalars['Int'] | null),
/** Array of IDs for the objects to retrieve */
in?: ((Scalars['ID'] | null)[] | null),
/** Get objects with a specific mimeType property */
mimeType?: (MimeTypeEnum | null),
/** Slug / post_name of the object */
name?: (Scalars['String'] | null),
/** Specify objects to retrieve. Use slugs */
nameIn?: ((Scalars['String'] | null)[] | null),
/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
notIn?: ((Scalars['ID'] | null)[] | null),
/** What parameter to use to order the objects by. */
orderby?: ((PostObjectsConnectionOrderbyInput | null)[] | null),
/** Use ID to return only children. Use 0 to return only top-level items */
parent?: (Scalars['ID'] | null),
/** Specify objects whose parent is in an array */
parentIn?: ((Scalars['ID'] | null)[] | null),
/** Specify posts whose parent is not in an array */
parentNotIn?: ((Scalars['ID'] | null)[] | null),
/** Show posts with a specific password. */
password?: (Scalars['String'] | null),
/** Show Posts based on a keyword search */
search?: (Scalars['String'] | null),
/** Retrieve posts where post status is in an array. */
stati?: ((PostStatusEnum | null)[] | null),
/** Show posts with a specific status. */
status?: (PostStatusEnum | null),
/** Tag Slug */
tag?: (Scalars['String'] | null),
/** Use Tag ID */
tagId?: (Scalars['String'] | null),
/** Array of tag IDs, used to display objects from one tag OR another */
tagIn?: ((Scalars['ID'] | null)[] | null),
/** Array of tag IDs, used to display objects from one tag OR another */
tagNotIn?: ((Scalars['ID'] | null)[] | null),
/** Array of tag slugs, used to display objects from one tag AND another */
tagSlugAnd?: ((Scalars['String'] | null)[] | null),
/** Array of tag slugs, used to include objects in ANY specified tags */
tagSlugIn?: ((Scalars['String'] | null)[] | null),
/** Title of the object */
title?: (Scalars['String'] | null)}


/** Connection between the Category type and the post type */
export interface CategoryToPostConnectionGenqlSelection{
    /** Edges for the CategoryToPostConnection connection */
    edges?: CategoryToPostConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: PostGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: CategoryToPostConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface CategoryToPostConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: PostGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;CategoryToPostConnection&quot; */
export interface CategoryToPostConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection between the Category type and the Taxonomy type */
export interface CategoryToTaxonomyConnectionEdgeGenqlSelection{
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: boolean | number
    /** The node of the connection, without the edges */
    node?: TaxonomyGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface RootQueryToCategoryConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: CategoryGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;RootQueryToCategoryConnection&quot; */
export interface RootQueryToCategoryConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Arguments for filtering the RootQueryToCommentConnection connection */
export interface RootQueryToCommentConnectionWhereArgs {
/** Comment author email address. */
authorEmail?: (Scalars['String'] | null),
/** Array of author IDs to include comments for. */
authorIn?: ((Scalars['ID'] | null)[] | null),
/** Array of author IDs to exclude comments for. */
authorNotIn?: ((Scalars['ID'] | null)[] | null),
/** Comment author URL. */
authorUrl?: (Scalars['String'] | null),
/** Array of comment IDs to include. */
commentIn?: ((Scalars['ID'] | null)[] | null),
/** Array of IDs of users whose unapproved comments will be returned by the query regardless of status. */
commentNotIn?: ((Scalars['ID'] | null)[] | null),
/** Include comments of a given type. */
commentType?: (Scalars['String'] | null),
/** Include comments from a given array of comment types. */
commentTypeIn?: ((Scalars['String'] | null)[] | null),
/** Exclude comments from a given array of comment types. */
commentTypeNotIn?: (Scalars['String'] | null),
/** Content object author ID to limit results by. */
contentAuthor?: ((Scalars['ID'] | null)[] | null),
/** Array of author IDs to retrieve comments for. */
contentAuthorIn?: ((Scalars['ID'] | null)[] | null),
/** Array of author IDs *not* to retrieve comments for. */
contentAuthorNotIn?: ((Scalars['ID'] | null)[] | null),
/** Limit results to those affiliated with a given content object ID. */
contentId?: (Scalars['ID'] | null),
/** Array of content object IDs to include affiliated comments for. */
contentIdIn?: ((Scalars['ID'] | null)[] | null),
/** Array of content object IDs to exclude affiliated comments for. */
contentIdNotIn?: ((Scalars['ID'] | null)[] | null),
/** Content object name (i.e. slug ) to retrieve affiliated comments for. */
contentName?: (Scalars['String'] | null),
/** Content Object parent ID to retrieve affiliated comments for. */
contentParent?: (Scalars['Int'] | null),
/** Array of content object statuses to retrieve affiliated comments for. Pass 'any' to match any value. */
contentStatus?: ((PostStatusEnum | null)[] | null),
/** Content object type or array of types to retrieve affiliated comments for. Pass 'any' to match any value. */
contentType?: ((ContentTypeEnum | null)[] | null),
/** Array of IDs or email addresses of users whose unapproved comments will be returned by the query regardless of $status. Default empty */
includeUnapproved?: ((Scalars['ID'] | null)[] | null),
/** Karma score to retrieve matching comments for. */
karma?: (Scalars['Int'] | null),
/** The cardinality of the order of the connection */
order?: (OrderEnum | null),
/** Field to order the comments by. */
orderby?: (CommentsConnectionOrderbyEnum | null),
/** Parent ID of comment to retrieve children of. */
parent?: (Scalars['Int'] | null),
/** Array of parent IDs of comments to retrieve children for. */
parentIn?: ((Scalars['ID'] | null)[] | null),
/** Array of parent IDs of comments *not* to retrieve children for. */
parentNotIn?: ((Scalars['ID'] | null)[] | null),
/** Search term(s) to retrieve matching comments for. */
search?: (Scalars['String'] | null),
/** Comment status to limit results by. */
status?: (Scalars['String'] | null),
/** Include comments for a specific user ID. */
userId?: (Scalars['ID'] | null)}


/** Connection between the RootQuery type and the Comment type */
export interface RootQueryToCommentConnectionGenqlSelection{
    /** Edges for the RootQueryToCommentConnection connection */
    edges?: RootQueryToCommentConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: CommentGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: RootQueryToCommentConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface RootQueryToCommentConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: CommentGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;RootQueryToCommentConnection&quot; */
export interface RootQueryToCommentConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Arguments for filtering the RootQueryToContentNodeConnection connection */
export interface RootQueryToContentNodeConnectionWhereArgs {
/** The Types of content to filter */
contentTypes?: ((ContentTypeEnum | null)[] | null),
/** Filter the connection based on dates */
dateQuery?: (DateQueryInput | null),
/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
hasPassword?: (Scalars['Boolean'] | null),
/** Specific database ID of the object */
id?: (Scalars['Int'] | null),
/** Array of IDs for the objects to retrieve */
in?: ((Scalars['ID'] | null)[] | null),
/** Get objects with a specific mimeType property */
mimeType?: (MimeTypeEnum | null),
/** Slug / post_name of the object */
name?: (Scalars['String'] | null),
/** Specify objects to retrieve. Use slugs */
nameIn?: ((Scalars['String'] | null)[] | null),
/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
notIn?: ((Scalars['ID'] | null)[] | null),
/** What parameter to use to order the objects by. */
orderby?: ((PostObjectsConnectionOrderbyInput | null)[] | null),
/** Use ID to return only children. Use 0 to return only top-level items */
parent?: (Scalars['ID'] | null),
/** Specify objects whose parent is in an array */
parentIn?: ((Scalars['ID'] | null)[] | null),
/** Specify posts whose parent is not in an array */
parentNotIn?: ((Scalars['ID'] | null)[] | null),
/** Show posts with a specific password. */
password?: (Scalars['String'] | null),
/** Show Posts based on a keyword search */
search?: (Scalars['String'] | null),
/** Retrieve posts where post status is in an array. */
stati?: ((PostStatusEnum | null)[] | null),
/** Show posts with a specific status. */
status?: (PostStatusEnum | null),
/** Title of the object */
title?: (Scalars['String'] | null)}


/** Connection between the RootQuery type and the ContentNode type */
export interface RootQueryToContentNodeConnectionGenqlSelection{
    /** Edges for the RootQueryToContentNodeConnection connection */
    edges?: RootQueryToContentNodeConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: ContentNodeGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: RootQueryToContentNodeConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface RootQueryToContentNodeConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: ContentNodeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;RootQueryToContentNodeConnection&quot; */
export interface RootQueryToContentNodeConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection between the RootQuery type and the ContentType type */
export interface RootQueryToContentTypeConnectionGenqlSelection{
    /** Edges for the RootQueryToContentTypeConnection connection */
    edges?: RootQueryToContentTypeConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: ContentTypeGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: RootQueryToContentTypeConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface RootQueryToContentTypeConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: ContentTypeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;RootQueryToContentTypeConnection&quot; */
export interface RootQueryToContentTypeConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The discussion setting type */
export interface DiscussionSettingsGenqlSelection{
    /** Permitir que pessoas enviem comentários em novos posts. */
    defaultCommentStatus?: boolean | number
    /** Permitir avisos de links de outros blogs (pingbacks ou trackbacks) em novos artigos. */
    defaultPingStatus?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The general setting type */
export interface GeneralSettingsGenqlSelection{
    /** Um formato de data para todos os textos. */
    dateFormat?: boolean | number
    /** Slogan do site. */
    description?: boolean | number
    /** Código de localização do WordPress. */
    language?: boolean | number
    /** Número do dia da semana em que a semana deve iniciar. */
    startOfWeek?: boolean | number
    /** Um formato de hora para todos os textos. */
    timeFormat?: boolean | number
    /** Uma cidade no mesmo fuso horário que você. */
    timezone?: boolean | number
    /** Título do site. */
    title?: boolean | number
    /** Site URL. */
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Arguments for filtering the RootQueryToMediaItemConnection connection */
export interface RootQueryToMediaItemConnectionWhereArgs {
/** The user that's connected as the author of the object. Use the userId for the author object. */
author?: (Scalars['Int'] | null),
/** Find objects connected to author(s) in the array of author's userIds */
authorIn?: ((Scalars['ID'] | null)[] | null),
/** Find objects connected to the author by the author's nicename */
authorName?: (Scalars['String'] | null),
/** Find objects NOT connected to author(s) in the array of author's userIds */
authorNotIn?: ((Scalars['ID'] | null)[] | null),
/** Filter the connection based on dates */
dateQuery?: (DateQueryInput | null),
/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
hasPassword?: (Scalars['Boolean'] | null),
/** Specific database ID of the object */
id?: (Scalars['Int'] | null),
/** Array of IDs for the objects to retrieve */
in?: ((Scalars['ID'] | null)[] | null),
/** Get objects with a specific mimeType property */
mimeType?: (MimeTypeEnum | null),
/** Slug / post_name of the object */
name?: (Scalars['String'] | null),
/** Specify objects to retrieve. Use slugs */
nameIn?: ((Scalars['String'] | null)[] | null),
/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
notIn?: ((Scalars['ID'] | null)[] | null),
/** What parameter to use to order the objects by. */
orderby?: ((PostObjectsConnectionOrderbyInput | null)[] | null),
/** Use ID to return only children. Use 0 to return only top-level items */
parent?: (Scalars['ID'] | null),
/** Specify objects whose parent is in an array */
parentIn?: ((Scalars['ID'] | null)[] | null),
/** Specify posts whose parent is not in an array */
parentNotIn?: ((Scalars['ID'] | null)[] | null),
/** Show posts with a specific password. */
password?: (Scalars['String'] | null),
/** Show Posts based on a keyword search */
search?: (Scalars['String'] | null),
/** Retrieve posts where post status is in an array. */
stati?: ((PostStatusEnum | null)[] | null),
/** Show posts with a specific status. */
status?: (PostStatusEnum | null),
/** Title of the object */
title?: (Scalars['String'] | null)}


/** Connection between the RootQuery type and the mediaItem type */
export interface RootQueryToMediaItemConnectionGenqlSelection{
    /** Edges for the RootQueryToMediaItemConnection connection */
    edges?: RootQueryToMediaItemConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: MediaItemGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: RootQueryToMediaItemConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface RootQueryToMediaItemConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: MediaItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;RootQueryToMediaItemConnection&quot; */
export interface RootQueryToMediaItemConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Menus are the containers for navigation items. Menus can be assigned to menu locations, which are typically registered by the active theme. */
export interface MenuGenqlSelection{
    /** The number of items in the menu */
    count?: boolean | number
    /** The unique identifier stored in the database */
    databaseId?: boolean | number
    /** The globally unique identifier of the nav menu object. */
    id?: boolean | number
    /** Whether the object is restricted from the current viewer */
    isRestricted?: boolean | number
    /** The locations a menu is assigned to */
    locations?: boolean | number
    /**
     * @deprecated Deprecated in favor of the databaseId field
     * WP ID of the nav menu.
     */
    menuId?: boolean | number
    /** Connection between the Menu type and the MenuItem type */
    menuItems?: (MenuToMenuItemConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null), 
    /** Arguments for filtering the connection */
    where?: (MenuToMenuItemConnectionWhereArgs | null)} })
    /** Display name of the menu. Equivalent to WP_Term-&gt;name. */
    name?: boolean | number
    /** The url friendly name of the menu. Equivalent to WP_Term-&gt;slug */
    slug?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Arguments for filtering the MenuToMenuItemConnection connection */
export interface MenuToMenuItemConnectionWhereArgs {
/** The database ID of the object */
id?: (Scalars['Int'] | null),
/** The menu location for the menu being queried */
location?: (MenuLocationEnum | null),
/** The database ID of the parent menu object */
parentDatabaseId?: (Scalars['Int'] | null),
/** The ID of the parent menu object */
parentId?: (Scalars['ID'] | null)}


/** Connection between the Menu type and the MenuItem type */
export interface MenuToMenuItemConnectionGenqlSelection{
    /** Edges for the MenuToMenuItemConnection connection */
    edges?: MenuToMenuItemConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: MenuItemGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: MenuToMenuItemConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection to MenuItem Nodes */
export interface MenuItemConnectionGenqlSelection{
    /** A list of edges (relational context) between RootQuery and connected MenuItem Nodes */
    edges?: MenuItemConnectionEdgeGenqlSelection
    /** A list of connected MenuItem Nodes */
    nodes?: MenuItemGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: MenuItemConnectionPageInfoGenqlSelection
    on_MenuToMenuItemConnection?: MenuToMenuItemConnectionGenqlSelection
    on_MenuItemToMenuItemConnection?: MenuItemToMenuItemConnectionGenqlSelection
    on_RootQueryToMenuItemConnection?: RootQueryToMenuItemConnectionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Edge between a Node and a connected MenuItem */
export interface MenuItemConnectionEdgeGenqlSelection{
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: boolean | number
    /** The connected MenuItem Node */
    node?: MenuItemGenqlSelection
    on_MenuItemToMenuItemConnectionEdge?: MenuItemToMenuItemConnectionEdgeGenqlSelection
    on_MenuToMenuItemConnectionEdge?: MenuToMenuItemConnectionEdgeGenqlSelection
    on_RootQueryToMenuItemConnectionEdge?: RootQueryToMenuItemConnectionEdgeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Navigation menu items are the individual items assigned to a menu. These are rendered as the links in a navigation menu. */
export interface MenuItemGenqlSelection{
    /** Connection between the MenuItem type and the MenuItem type */
    childItems?: (MenuItemToMenuItemConnectionGenqlSelection & { __args?: {
    /** The number of items to return after the referenced "after" cursor */
    first?: (Scalars['Int'] | null), 
    /** The number of items to return before the referenced "before" cursor */
    last?: (Scalars['Int'] | null), 
    /** Cursor used along with the "first" argument to reference where in the dataset to get data */
    after?: (Scalars['String'] | null), 
    /** Cursor used along with the "last" argument to reference where in the dataset to get data */
    before?: (Scalars['String'] | null), 
    /** Arguments for filtering the connection */
    where?: (MenuItemToMenuItemConnectionWhereArgs | null)} })
    /** Connection from MenuItem to it&#039;s connected node */
    connectedNode?: MenuItemToMenuItemLinkableConnectionEdgeGenqlSelection
    /**
     * @deprecated Deprecated in favor of the connectedNode field
     * The object connected to this menu item.
     */
    connectedObject?: MenuItemObjectUnionGenqlSelection
    /** Class attribute for the menu item link */
    cssClasses?: boolean | number
    /** The unique identifier stored in the database */
    databaseId?: boolean | number
    /** Description of the menu item. */
    description?: boolean | number
    /** The globally unique identifier of the nav menu item object. */
    id?: boolean | number
    /** Whether the object is restricted from the current viewer */
    isRestricted?: boolean | number
    /** Label or title of the menu item. */
    label?: boolean | number
    /** Link relationship (XFN) of the menu item. */
    linkRelationship?: boolean | number
    /** The locations the menu item&#039;s Menu is assigned to */
    locations?: boolean | number
    /** The Menu a MenuItem is part of */
    menu?: MenuItemToMenuConnectionEdgeGenqlSelection
    /**
     * @deprecated Deprecated in favor of the databaseId field
     * WP ID of the menu item.
     */
    menuItemId?: boolean | number
    /** Menu item order */
    order?: boolean | number
    /** The database id of the parent menu item or null if it is the root */
    parentDatabaseId?: boolean | number
    /** The globally unique identifier of the parent nav menu item object. */
    parentId?: boolean | number
    /** Path for the resource. Relative path for internal resources. Absolute path for external resources. */
    path?: boolean | number
    /** Target attribute for the menu item link. */
    target?: boolean | number
    /** Title attribute for the menu item link */
    title?: boolean | number
    /** The uri of the resource the menu item links to */
    uri?: boolean | number
    /** URL or destination of the menu item. */
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Arguments for filtering the MenuItemToMenuItemConnection connection */
export interface MenuItemToMenuItemConnectionWhereArgs {
/** The database ID of the object */
id?: (Scalars['Int'] | null),
/** The menu location for the menu being queried */
location?: (MenuLocationEnum | null),
/** The database ID of the parent menu object */
parentDatabaseId?: (Scalars['Int'] | null),
/** The ID of the parent menu object */
parentId?: (Scalars['ID'] | null)}


/** Connection between the MenuItem type and the MenuItem type */
export interface MenuItemToMenuItemConnectionGenqlSelection{
    /** Edges for the MenuItemToMenuItemConnection connection */
    edges?: MenuItemToMenuItemConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: MenuItemGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: MenuItemToMenuItemConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface MenuItemToMenuItemConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: MenuItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;MenuItemToMenuItemConnection&quot; */
export interface MenuItemToMenuItemConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the connected MenuItemConnectionEdge */
export interface MenuItemConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    on_MenuItemToMenuItemConnectionPageInfo?: MenuItemToMenuItemConnectionPageInfoGenqlSelection
    on_MenuToMenuItemConnectionPageInfo?: MenuToMenuItemConnectionPageInfoGenqlSelection
    on_RootQueryToMenuItemConnectionPageInfo?: RootQueryToMenuItemConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection between the MenuItem type and the MenuItemLinkable type */
export interface MenuItemToMenuItemLinkableConnectionEdgeGenqlSelection{
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: boolean | number
    /** The node of the connection, without the edges */
    node?: MenuItemLinkableGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Edge between a Node and a connected MenuItemLinkable */
export interface MenuItemLinkableConnectionEdgeGenqlSelection{
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: boolean | number
    /** The connected MenuItemLinkable Node */
    node?: MenuItemLinkableGenqlSelection
    on_MenuItemToMenuItemLinkableConnectionEdge?: MenuItemToMenuItemLinkableConnectionEdgeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Deprecated in favor of MenuItemLinkeable Interface */
export interface MenuItemObjectUnionGenqlSelection{
    on_Post?:PostGenqlSelection,
    on_Page?:PageGenqlSelection,
    on_Category?:CategoryGenqlSelection,
    on_Tag?:TagGenqlSelection,
    on_PostFormat?:PostFormatGenqlSelection,
    on_Node?: NodeGenqlSelection,
    on_ContentNode?: ContentNodeGenqlSelection,
    on_UniformResourceIdentifiable?: UniformResourceIdentifiableGenqlSelection,
    on_DatabaseIdentifier?: DatabaseIdentifierGenqlSelection,
    on_NodeWithTemplate?: NodeWithTemplateGenqlSelection,
    on_Previewable?: PreviewableGenqlSelection,
    on_NodeWithTitle?: NodeWithTitleGenqlSelection,
    on_NodeWithContentEditor?: NodeWithContentEditorGenqlSelection,
    on_NodeWithAuthor?: NodeWithAuthorGenqlSelection,
    on_NodeWithFeaturedImage?: NodeWithFeaturedImageGenqlSelection,
    on_NodeWithExcerpt?: NodeWithExcerptGenqlSelection,
    on_NodeWithComments?: NodeWithCommentsGenqlSelection,
    on_NodeWithTrackbacks?: NodeWithTrackbacksGenqlSelection,
    on_NodeWithRevisions?: NodeWithRevisionsGenqlSelection,
    on_MenuItemLinkable?: MenuItemLinkableGenqlSelection,
    on_NodeWithPageAttributes?: NodeWithPageAttributesGenqlSelection,
    on_HierarchicalContentNode?: HierarchicalContentNodeGenqlSelection,
    on_HierarchicalNode?: HierarchicalNodeGenqlSelection,
    on_TermNode?: TermNodeGenqlSelection,
    on_HierarchicalTermNode?: HierarchicalTermNodeGenqlSelection,
    __typename?: boolean | number
}


/** Connection between the MenuItem type and the Menu type */
export interface MenuItemToMenuConnectionEdgeGenqlSelection{
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: boolean | number
    /** The node of the connection, without the edges */
    node?: MenuGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Edge between a Node and a connected Menu */
export interface MenuConnectionEdgeGenqlSelection{
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: boolean | number
    /** The connected Menu Node */
    node?: MenuGenqlSelection
    on_MenuItemToMenuConnectionEdge?: MenuItemToMenuConnectionEdgeGenqlSelection
    on_RootQueryToMenuConnectionEdge?: RootQueryToMenuConnectionEdgeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface MenuToMenuItemConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: MenuItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;MenuToMenuItemConnection&quot; */
export interface MenuToMenuItemConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Arguments for filtering the RootQueryToMenuItemConnection connection */
export interface RootQueryToMenuItemConnectionWhereArgs {
/** The database ID of the object */
id?: (Scalars['Int'] | null),
/** The menu location for the menu being queried */
location?: (MenuLocationEnum | null),
/** The database ID of the parent menu object */
parentDatabaseId?: (Scalars['Int'] | null),
/** The ID of the parent menu object */
parentId?: (Scalars['ID'] | null)}


/** Connection between the RootQuery type and the MenuItem type */
export interface RootQueryToMenuItemConnectionGenqlSelection{
    /** Edges for the RootQueryToMenuItemConnection connection */
    edges?: RootQueryToMenuItemConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: MenuItemGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: RootQueryToMenuItemConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface RootQueryToMenuItemConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: MenuItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;RootQueryToMenuItemConnection&quot; */
export interface RootQueryToMenuItemConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Arguments for filtering the RootQueryToMenuConnection connection */
export interface RootQueryToMenuConnectionWhereArgs {
/** The database ID of the object */
id?: (Scalars['Int'] | null),
/** The menu location for the menu being queried */
location?: (MenuLocationEnum | null),
/** The slug of the menu to query items for */
slug?: (Scalars['String'] | null)}


/** Connection between the RootQuery type and the Menu type */
export interface RootQueryToMenuConnectionGenqlSelection{
    /** Edges for the RootQueryToMenuConnection connection */
    edges?: RootQueryToMenuConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: MenuGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: RootQueryToMenuConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection to Menu Nodes */
export interface MenuConnectionGenqlSelection{
    /** A list of edges (relational context) between RootQuery and connected Menu Nodes */
    edges?: MenuConnectionEdgeGenqlSelection
    /** A list of connected Menu Nodes */
    nodes?: MenuGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: MenuConnectionPageInfoGenqlSelection
    on_RootQueryToMenuConnection?: RootQueryToMenuConnectionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the connected MenuConnectionEdge */
export interface MenuConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    on_RootQueryToMenuConnectionPageInfo?: RootQueryToMenuConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface RootQueryToMenuConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: MenuGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;RootQueryToMenuConnection&quot; */
export interface RootQueryToMenuConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Arguments for filtering the RootQueryToPageConnection connection */
export interface RootQueryToPageConnectionWhereArgs {
/** The user that's connected as the author of the object. Use the userId for the author object. */
author?: (Scalars['Int'] | null),
/** Find objects connected to author(s) in the array of author's userIds */
authorIn?: ((Scalars['ID'] | null)[] | null),
/** Find objects connected to the author by the author's nicename */
authorName?: (Scalars['String'] | null),
/** Find objects NOT connected to author(s) in the array of author's userIds */
authorNotIn?: ((Scalars['ID'] | null)[] | null),
/** Filter the connection based on dates */
dateQuery?: (DateQueryInput | null),
/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
hasPassword?: (Scalars['Boolean'] | null),
/** Specific database ID of the object */
id?: (Scalars['Int'] | null),
/** Array of IDs for the objects to retrieve */
in?: ((Scalars['ID'] | null)[] | null),
/** Get objects with a specific mimeType property */
mimeType?: (MimeTypeEnum | null),
/** Slug / post_name of the object */
name?: (Scalars['String'] | null),
/** Specify objects to retrieve. Use slugs */
nameIn?: ((Scalars['String'] | null)[] | null),
/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
notIn?: ((Scalars['ID'] | null)[] | null),
/** What parameter to use to order the objects by. */
orderby?: ((PostObjectsConnectionOrderbyInput | null)[] | null),
/** Use ID to return only children. Use 0 to return only top-level items */
parent?: (Scalars['ID'] | null),
/** Specify objects whose parent is in an array */
parentIn?: ((Scalars['ID'] | null)[] | null),
/** Specify posts whose parent is not in an array */
parentNotIn?: ((Scalars['ID'] | null)[] | null),
/** Show posts with a specific password. */
password?: (Scalars['String'] | null),
/** Show Posts based on a keyword search */
search?: (Scalars['String'] | null),
/** Retrieve posts where post status is in an array. */
stati?: ((PostStatusEnum | null)[] | null),
/** Show posts with a specific status. */
status?: (PostStatusEnum | null),
/** Title of the object */
title?: (Scalars['String'] | null)}


/** Connection between the RootQuery type and the page type */
export interface RootQueryToPageConnectionGenqlSelection{
    /** Edges for the RootQueryToPageConnection connection */
    edges?: RootQueryToPageConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: PageGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: RootQueryToPageConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface RootQueryToPageConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: PageGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;RootQueryToPageConnection&quot; */
export interface RootQueryToPageConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An plugin object */
export interface PluginGenqlSelection{
    /** Name of the plugin author(s), may also be a company name. */
    author?: boolean | number
    /** URI for the related author(s)/company website. */
    authorUri?: boolean | number
    /** Description of the plugin. */
    description?: boolean | number
    /** The globally unique identifier of the plugin object. */
    id?: boolean | number
    /** Whether the object is restricted from the current viewer */
    isRestricted?: boolean | number
    /** Display name of the plugin. */
    name?: boolean | number
    /** Plugin path. */
    path?: boolean | number
    /** URI for the plugin website. This is useful for directing users for support requests etc. */
    pluginUri?: boolean | number
    /** Current version of the plugin. */
    version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Arguments for filtering the RootQueryToPluginConnection connection */
export interface RootQueryToPluginConnectionWhereArgs {
/** Show plugin based on a keyword search. */
search?: (Scalars['String'] | null),
/** Retrieve plugins where plugin status is in an array. */
stati?: ((PluginStatusEnum | null)[] | null),
/** Show plugins with a specific status. */
status?: (PluginStatusEnum | null)}


/** Connection between the RootQuery type and the Plugin type */
export interface RootQueryToPluginConnectionGenqlSelection{
    /** Edges for the RootQueryToPluginConnection connection */
    edges?: RootQueryToPluginConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: PluginGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: RootQueryToPluginConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection to Plugin Nodes */
export interface PluginConnectionGenqlSelection{
    /** A list of edges (relational context) between RootQuery and connected Plugin Nodes */
    edges?: PluginConnectionEdgeGenqlSelection
    /** A list of connected Plugin Nodes */
    nodes?: PluginGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: PluginConnectionPageInfoGenqlSelection
    on_RootQueryToPluginConnection?: RootQueryToPluginConnectionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Edge between a Node and a connected Plugin */
export interface PluginConnectionEdgeGenqlSelection{
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: boolean | number
    /** The connected Plugin Node */
    node?: PluginGenqlSelection
    on_RootQueryToPluginConnectionEdge?: RootQueryToPluginConnectionEdgeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the connected PluginConnectionEdge */
export interface PluginConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    on_RootQueryToPluginConnectionPageInfo?: RootQueryToPluginConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface RootQueryToPluginConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: PluginGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;RootQueryToPluginConnection&quot; */
export interface RootQueryToPluginConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Arguments for filtering the RootQueryToPostFormatConnection connection */
export interface RootQueryToPostFormatConnectionWhereArgs {
/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
cacheDomain?: (Scalars['String'] | null),
/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
childOf?: (Scalars['Int'] | null),
/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
childless?: (Scalars['Boolean'] | null),
/** Retrieve terms where the description is LIKE the input value. Default empty. */
descriptionLike?: (Scalars['String'] | null),
/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
exclude?: ((Scalars['ID'] | null)[] | null),
/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
excludeTree?: ((Scalars['ID'] | null)[] | null),
/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
hideEmpty?: (Scalars['Boolean'] | null),
/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
hierarchical?: (Scalars['Boolean'] | null),
/** Array of term ids to include. Default empty array. */
include?: ((Scalars['ID'] | null)[] | null),
/** Array of names to return term(s) for. Default empty. */
name?: ((Scalars['String'] | null)[] | null),
/** Retrieve terms where the name is LIKE the input value. Default empty. */
nameLike?: (Scalars['String'] | null),
/** Array of object IDs. Results will be limited to terms associated with these objects. */
objectIds?: ((Scalars['ID'] | null)[] | null),
/** Direction the connection should be ordered in */
order?: (OrderEnum | null),
/** Field(s) to order terms by. Defaults to 'name'. */
orderby?: (TermObjectsConnectionOrderbyEnum | null),
/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
padCounts?: (Scalars['Boolean'] | null),
/** Parent term ID to retrieve direct-child terms of. Default empty. */
parent?: (Scalars['Int'] | null),
/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
search?: (Scalars['String'] | null),
/** Array of slugs to return term(s) for. Default empty. */
slug?: ((Scalars['String'] | null)[] | null),
/** Array of term taxonomy IDs, to match when querying terms. */
termTaxonomId?: ((Scalars['ID'] | null)[] | null),
/** Array of term taxonomy IDs, to match when querying terms. */
termTaxonomyId?: ((Scalars['ID'] | null)[] | null),
/** Whether to prime meta caches for matched terms. Default true. */
updateTermMetaCache?: (Scalars['Boolean'] | null)}


/** Connection between the RootQuery type and the postFormat type */
export interface RootQueryToPostFormatConnectionGenqlSelection{
    /** Edges for the RootQueryToPostFormatConnection connection */
    edges?: RootQueryToPostFormatConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: PostFormatGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: RootQueryToPostFormatConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface RootQueryToPostFormatConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: PostFormatGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;RootQueryToPostFormatConnection&quot; */
export interface RootQueryToPostFormatConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Arguments for filtering the RootQueryToPostConnection connection */
export interface RootQueryToPostConnectionWhereArgs {
/** The user that's connected as the author of the object. Use the userId for the author object. */
author?: (Scalars['Int'] | null),
/** Find objects connected to author(s) in the array of author's userIds */
authorIn?: ((Scalars['ID'] | null)[] | null),
/** Find objects connected to the author by the author's nicename */
authorName?: (Scalars['String'] | null),
/** Find objects NOT connected to author(s) in the array of author's userIds */
authorNotIn?: ((Scalars['ID'] | null)[] | null),
/** Category ID */
categoryId?: (Scalars['Int'] | null),
/** Array of category IDs, used to display objects from one category OR another */
categoryIn?: ((Scalars['ID'] | null)[] | null),
/** Use Category Slug */
categoryName?: (Scalars['String'] | null),
/** Array of category IDs, used to display objects from one category OR another */
categoryNotIn?: ((Scalars['ID'] | null)[] | null),
/** Filter the connection based on dates */
dateQuery?: (DateQueryInput | null),
/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
hasPassword?: (Scalars['Boolean'] | null),
/** Specific database ID of the object */
id?: (Scalars['Int'] | null),
/** Array of IDs for the objects to retrieve */
in?: ((Scalars['ID'] | null)[] | null),
/** Get objects with a specific mimeType property */
mimeType?: (MimeTypeEnum | null),
/** Slug / post_name of the object */
name?: (Scalars['String'] | null),
/** Specify objects to retrieve. Use slugs */
nameIn?: ((Scalars['String'] | null)[] | null),
/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
notIn?: ((Scalars['ID'] | null)[] | null),
/** What parameter to use to order the objects by. */
orderby?: ((PostObjectsConnectionOrderbyInput | null)[] | null),
/** Use ID to return only children. Use 0 to return only top-level items */
parent?: (Scalars['ID'] | null),
/** Specify objects whose parent is in an array */
parentIn?: ((Scalars['ID'] | null)[] | null),
/** Specify posts whose parent is not in an array */
parentNotIn?: ((Scalars['ID'] | null)[] | null),
/** Show posts with a specific password. */
password?: (Scalars['String'] | null),
/** Show Posts based on a keyword search */
search?: (Scalars['String'] | null),
/** Retrieve posts where post status is in an array. */
stati?: ((PostStatusEnum | null)[] | null),
/** Show posts with a specific status. */
status?: (PostStatusEnum | null),
/** Tag Slug */
tag?: (Scalars['String'] | null),
/** Use Tag ID */
tagId?: (Scalars['String'] | null),
/** Array of tag IDs, used to display objects from one tag OR another */
tagIn?: ((Scalars['ID'] | null)[] | null),
/** Array of tag IDs, used to display objects from one tag OR another */
tagNotIn?: ((Scalars['ID'] | null)[] | null),
/** Array of tag slugs, used to display objects from one tag AND another */
tagSlugAnd?: ((Scalars['String'] | null)[] | null),
/** Array of tag slugs, used to include objects in ANY specified tags */
tagSlugIn?: ((Scalars['String'] | null)[] | null),
/** Title of the object */
title?: (Scalars['String'] | null)}


/** Connection between the RootQuery type and the post type */
export interface RootQueryToPostConnectionGenqlSelection{
    /** Edges for the RootQueryToPostConnection connection */
    edges?: RootQueryToPostConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: PostGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: RootQueryToPostConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface RootQueryToPostConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: PostGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;RootQueryToPostConnection&quot; */
export interface RootQueryToPostConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The reading setting type */
export interface ReadingSettingsGenqlSelection{
    /** O ID da página que deve exibir os posts mais recentes */
    pageForPosts?: boolean | number
    /** O ID da página que deve ser exibida na página inicial */
    pageOnFront?: boolean | number
    /** As páginas do blog mostram no máximo. */
    postsPerPage?: boolean | number
    /** O que exibir na página inicial */
    showOnFront?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection between the RootQuery type and the EnqueuedScript type */
export interface RootQueryToEnqueuedScriptConnectionGenqlSelection{
    /** Edges for the RootQueryToEnqueuedScriptConnection connection */
    edges?: RootQueryToEnqueuedScriptConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: EnqueuedScriptGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: RootQueryToEnqueuedScriptConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface RootQueryToEnqueuedScriptConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: EnqueuedScriptGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;RootQueryToEnqueuedScriptConnection&quot; */
export interface RootQueryToEnqueuedScriptConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection between the RootQuery type and the EnqueuedStylesheet type */
export interface RootQueryToEnqueuedStylesheetConnectionGenqlSelection{
    /** Edges for the RootQueryToEnqueuedStylesheetConnection connection */
    edges?: RootQueryToEnqueuedStylesheetConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: EnqueuedStylesheetGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: RootQueryToEnqueuedStylesheetConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface RootQueryToEnqueuedStylesheetConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: EnqueuedStylesheetGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;RootQueryToEnqueuedStylesheetConnection&quot; */
export interface RootQueryToEnqueuedStylesheetConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Arguments for filtering the RootQueryToRevisionsConnection connection */
export interface RootQueryToRevisionsConnectionWhereArgs {
/** The Types of content to filter */
contentTypes?: ((ContentTypeEnum | null)[] | null),
/** Filter the connection based on dates */
dateQuery?: (DateQueryInput | null),
/** True for objects with passwords; False for objects without passwords; null for all objects with or without passwords */
hasPassword?: (Scalars['Boolean'] | null),
/** Specific database ID of the object */
id?: (Scalars['Int'] | null),
/** Array of IDs for the objects to retrieve */
in?: ((Scalars['ID'] | null)[] | null),
/** Get objects with a specific mimeType property */
mimeType?: (MimeTypeEnum | null),
/** Slug / post_name of the object */
name?: (Scalars['String'] | null),
/** Specify objects to retrieve. Use slugs */
nameIn?: ((Scalars['String'] | null)[] | null),
/** Specify IDs NOT to retrieve. If this is used in the same query as "in", it will be ignored */
notIn?: ((Scalars['ID'] | null)[] | null),
/** What parameter to use to order the objects by. */
orderby?: ((PostObjectsConnectionOrderbyInput | null)[] | null),
/** Use ID to return only children. Use 0 to return only top-level items */
parent?: (Scalars['ID'] | null),
/** Specify objects whose parent is in an array */
parentIn?: ((Scalars['ID'] | null)[] | null),
/** Specify posts whose parent is not in an array */
parentNotIn?: ((Scalars['ID'] | null)[] | null),
/** Show posts with a specific password. */
password?: (Scalars['String'] | null),
/** Show Posts based on a keyword search */
search?: (Scalars['String'] | null),
/** Retrieve posts where post status is in an array. */
stati?: ((PostStatusEnum | null)[] | null),
/** Show posts with a specific status. */
status?: (PostStatusEnum | null),
/** Title of the object */
title?: (Scalars['String'] | null)}


/** Connection between the RootQuery type and the ContentNode type */
export interface RootQueryToRevisionsConnectionGenqlSelection{
    /** Edges for the RootQueryToRevisionsConnection connection */
    edges?: RootQueryToRevisionsConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: ContentNodeGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: RootQueryToRevisionsConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface RootQueryToRevisionsConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: ContentNodeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;RootQueryToRevisionsConnection&quot; */
export interface RootQueryToRevisionsConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Arguments for filtering the RootQueryToTagConnection connection */
export interface RootQueryToTagConnectionWhereArgs {
/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
cacheDomain?: (Scalars['String'] | null),
/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
childOf?: (Scalars['Int'] | null),
/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
childless?: (Scalars['Boolean'] | null),
/** Retrieve terms where the description is LIKE the input value. Default empty. */
descriptionLike?: (Scalars['String'] | null),
/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
exclude?: ((Scalars['ID'] | null)[] | null),
/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
excludeTree?: ((Scalars['ID'] | null)[] | null),
/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
hideEmpty?: (Scalars['Boolean'] | null),
/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
hierarchical?: (Scalars['Boolean'] | null),
/** Array of term ids to include. Default empty array. */
include?: ((Scalars['ID'] | null)[] | null),
/** Array of names to return term(s) for. Default empty. */
name?: ((Scalars['String'] | null)[] | null),
/** Retrieve terms where the name is LIKE the input value. Default empty. */
nameLike?: (Scalars['String'] | null),
/** Array of object IDs. Results will be limited to terms associated with these objects. */
objectIds?: ((Scalars['ID'] | null)[] | null),
/** Direction the connection should be ordered in */
order?: (OrderEnum | null),
/** Field(s) to order terms by. Defaults to 'name'. */
orderby?: (TermObjectsConnectionOrderbyEnum | null),
/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
padCounts?: (Scalars['Boolean'] | null),
/** Parent term ID to retrieve direct-child terms of. Default empty. */
parent?: (Scalars['Int'] | null),
/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
search?: (Scalars['String'] | null),
/** Array of slugs to return term(s) for. Default empty. */
slug?: ((Scalars['String'] | null)[] | null),
/** Array of term taxonomy IDs, to match when querying terms. */
termTaxonomId?: ((Scalars['ID'] | null)[] | null),
/** Array of term taxonomy IDs, to match when querying terms. */
termTaxonomyId?: ((Scalars['ID'] | null)[] | null),
/** Whether to prime meta caches for matched terms. Default true. */
updateTermMetaCache?: (Scalars['Boolean'] | null)}


/** Connection between the RootQuery type and the tag type */
export interface RootQueryToTagConnectionGenqlSelection{
    /** Edges for the RootQueryToTagConnection connection */
    edges?: RootQueryToTagConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: TagGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: RootQueryToTagConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface RootQueryToTagConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: TagGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;RootQueryToTagConnection&quot; */
export interface RootQueryToTagConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection between the RootQuery type and the Taxonomy type */
export interface RootQueryToTaxonomyConnectionGenqlSelection{
    /** Edges for the RootQueryToTaxonomyConnection connection */
    edges?: RootQueryToTaxonomyConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: TaxonomyGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: RootQueryToTaxonomyConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface RootQueryToTaxonomyConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: TaxonomyGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;RootQueryToTaxonomyConnection&quot; */
export interface RootQueryToTaxonomyConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Arguments for filtering the RootQueryToTermNodeConnection connection */
export interface RootQueryToTermNodeConnectionWhereArgs {
/** Unique cache key to be produced when this query is stored in an object cache. Default is 'core'. */
cacheDomain?: (Scalars['String'] | null),
/** Term ID to retrieve child terms of. If multiple taxonomies are passed, $child_of is ignored. Default 0. */
childOf?: (Scalars['Int'] | null),
/** True to limit results to terms that have no children. This parameter has no effect on non-hierarchical taxonomies. Default false. */
childless?: (Scalars['Boolean'] | null),
/** Retrieve terms where the description is LIKE the input value. Default empty. */
descriptionLike?: (Scalars['String'] | null),
/** Array of term ids to exclude. If $include is non-empty, $exclude is ignored. Default empty array. */
exclude?: ((Scalars['ID'] | null)[] | null),
/** Array of term ids to exclude along with all of their descendant terms. If $include is non-empty, $exclude_tree is ignored. Default empty array. */
excludeTree?: ((Scalars['ID'] | null)[] | null),
/** Whether to hide terms not assigned to any posts. Accepts true or false. Default false */
hideEmpty?: (Scalars['Boolean'] | null),
/** Whether to include terms that have non-empty descendants (even if $hide_empty is set to true). Default true. */
hierarchical?: (Scalars['Boolean'] | null),
/** Array of term ids to include. Default empty array. */
include?: ((Scalars['ID'] | null)[] | null),
/** Array of names to return term(s) for. Default empty. */
name?: ((Scalars['String'] | null)[] | null),
/** Retrieve terms where the name is LIKE the input value. Default empty. */
nameLike?: (Scalars['String'] | null),
/** Array of object IDs. Results will be limited to terms associated with these objects. */
objectIds?: ((Scalars['ID'] | null)[] | null),
/** Direction the connection should be ordered in */
order?: (OrderEnum | null),
/** Field(s) to order terms by. Defaults to 'name'. */
orderby?: (TermObjectsConnectionOrderbyEnum | null),
/** Whether to pad the quantity of a term's children in the quantity of each term's "count" object variable. Default false. */
padCounts?: (Scalars['Boolean'] | null),
/** Parent term ID to retrieve direct-child terms of. Default empty. */
parent?: (Scalars['Int'] | null),
/** Search criteria to match terms. Will be SQL-formatted with wildcards before and after. Default empty. */
search?: (Scalars['String'] | null),
/** Array of slugs to return term(s) for. Default empty. */
slug?: ((Scalars['String'] | null)[] | null),
/** The Taxonomy to filter terms by */
taxonomies?: ((TaxonomyEnum | null)[] | null),
/** Array of term taxonomy IDs, to match when querying terms. */
termTaxonomId?: ((Scalars['ID'] | null)[] | null),
/** Array of term taxonomy IDs, to match when querying terms. */
termTaxonomyId?: ((Scalars['ID'] | null)[] | null),
/** Whether to prime meta caches for matched terms. Default true. */
updateTermMetaCache?: (Scalars['Boolean'] | null)}


/** Connection between the RootQuery type and the TermNode type */
export interface RootQueryToTermNodeConnectionGenqlSelection{
    /** Edges for the RootQueryToTermNodeConnection connection */
    edges?: RootQueryToTermNodeConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: TermNodeGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: RootQueryToTermNodeConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface RootQueryToTermNodeConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: TermNodeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;RootQueryToTermNodeConnection&quot; */
export interface RootQueryToTermNodeConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A theme object */
export interface ThemeGenqlSelection{
    /** Name of the theme author(s), could also be a company name. This field is equivalent to WP_Theme-&gt;get( &quot;Author&quot; ). */
    author?: boolean | number
    /** URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;AuthorURI&quot; ). */
    authorUri?: boolean | number
    /** The description of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Description&quot; ). */
    description?: boolean | number
    /** The globally unique identifier of the theme object. */
    id?: boolean | number
    /** Whether the object is restricted from the current viewer */
    isRestricted?: boolean | number
    /** Display name of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Name&quot; ). */
    name?: boolean | number
    /** The URL of the screenshot for the theme. The screenshot is intended to give an overview of what the theme looks like. This field is equivalent to WP_Theme-&gt;get_screenshot(). */
    screenshot?: boolean | number
    /** The theme slug is used to internally match themes. Theme slugs can have subdirectories like: my-theme/sub-theme. This field is equivalent to WP_Theme-&gt;get_stylesheet(). */
    slug?: boolean | number
    /** URI for the author/company website. This field is equivalent to WP_Theme-&gt;get( &quot;Tags&quot; ). */
    tags?: boolean | number
    /** A URI if the theme has a website associated with it. The Theme URI is handy for directing users to a theme site for support etc. This field is equivalent to WP_Theme-&gt;get( &quot;ThemeURI&quot; ). */
    themeUri?: boolean | number
    /** The current version of the theme. This field is equivalent to WP_Theme-&gt;get( &quot;Version&quot; ). */
    version?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection between the RootQuery type and the Theme type */
export interface RootQueryToThemeConnectionGenqlSelection{
    /** Edges for the RootQueryToThemeConnection connection */
    edges?: RootQueryToThemeConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: ThemeGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: RootQueryToThemeConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection to Theme Nodes */
export interface ThemeConnectionGenqlSelection{
    /** A list of edges (relational context) between RootQuery and connected Theme Nodes */
    edges?: ThemeConnectionEdgeGenqlSelection
    /** A list of connected Theme Nodes */
    nodes?: ThemeGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: ThemeConnectionPageInfoGenqlSelection
    on_RootQueryToThemeConnection?: RootQueryToThemeConnectionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Edge between a Node and a connected Theme */
export interface ThemeConnectionEdgeGenqlSelection{
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: boolean | number
    /** The connected Theme Node */
    node?: ThemeGenqlSelection
    on_RootQueryToThemeConnectionEdge?: RootQueryToThemeConnectionEdgeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the connected ThemeConnectionEdge */
export interface ThemeConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    on_RootQueryToThemeConnectionPageInfo?: RootQueryToThemeConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface RootQueryToThemeConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: ThemeGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;RootQueryToThemeConnection&quot; */
export interface RootQueryToThemeConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection between the RootQuery type and the UserRole type */
export interface RootQueryToUserRoleConnectionGenqlSelection{
    /** Edges for the RootQueryToUserRoleConnection connection */
    edges?: RootQueryToUserRoleConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: UserRoleGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: RootQueryToUserRoleConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface RootQueryToUserRoleConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: UserRoleGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;RootQueryToUserRoleConnection&quot; */
export interface RootQueryToUserRoleConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Arguments for filtering the RootQueryToUserConnection connection */
export interface RootQueryToUserConnectionWhereArgs {
/** Array of userIds to exclude. */
exclude?: ((Scalars['Int'] | null)[] | null),
/** Pass an array of post types to filter results to users who have published posts in those post types. */
hasPublishedPosts?: ((ContentTypeEnum | null)[] | null),
/** Array of userIds to include. */
include?: ((Scalars['Int'] | null)[] | null),
/** The user login. */
login?: (Scalars['String'] | null),
/** An array of logins to include. Users matching one of these logins will be included in results. */
loginIn?: ((Scalars['String'] | null)[] | null),
/** An array of logins to exclude. Users matching one of these logins will not be included in results. */
loginNotIn?: ((Scalars['String'] | null)[] | null),
/** The user nicename. */
nicename?: (Scalars['String'] | null),
/** An array of nicenames to include. Users matching one of these nicenames will be included in results. */
nicenameIn?: ((Scalars['String'] | null)[] | null),
/** An array of nicenames to exclude. Users matching one of these nicenames will not be included in results. */
nicenameNotIn?: ((Scalars['String'] | null)[] | null),
/** What parameter to use to order the objects by. */
orderby?: ((UsersConnectionOrderbyInput | null)[] | null),
/** An array of role names that users must match to be included in results. Note that this is an inclusive list: users must match *each* role. */
role?: (UserRoleEnum | null),
/** An array of role names. Matched users must have at least one of these roles. */
roleIn?: ((UserRoleEnum | null)[] | null),
/** An array of role names to exclude. Users matching one or more of these roles will not be included in results. */
roleNotIn?: ((UserRoleEnum | null)[] | null),
/** Search keyword. Searches for possible string matches on columns. When "searchColumns" is left empty, it tries to determine which column to search in based on search string. */
search?: (Scalars['String'] | null),
/** Array of column names to be searched. Accepts 'ID', 'login', 'nicename', 'email', 'url'. */
searchColumns?: ((UsersConnectionSearchColumnEnum | null)[] | null)}


/** Options for ordering the connection */
export interface UsersConnectionOrderbyInput {
/** The field name used to sort the results. */
field: UsersConnectionOrderbyEnum,
/** The cardinality of the order of the connection */
order?: (OrderEnum | null)}


/** Connection between the RootQuery type and the User type */
export interface RootQueryToUserConnectionGenqlSelection{
    /** Edges for the RootQueryToUserConnection connection */
    edges?: RootQueryToUserConnectionEdgeGenqlSelection
    /** The nodes of the connection, without the edges */
    nodes?: UserGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: RootQueryToUserConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection to User Nodes */
export interface UserConnectionGenqlSelection{
    /** A list of edges (relational context) between RootQuery and connected User Nodes */
    edges?: UserConnectionEdgeGenqlSelection
    /** A list of connected User Nodes */
    nodes?: UserGenqlSelection
    /** Information about pagination in a connection. */
    pageInfo?: UserConnectionPageInfoGenqlSelection
    on_RootQueryToUserConnection?: RootQueryToUserConnectionGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the connected UserConnectionEdge */
export interface UserConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    on_RootQueryToUserConnectionPageInfo?: RootQueryToUserConnectionPageInfoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** An edge in a connection */
export interface RootQueryToUserConnectionEdgeGenqlSelection{
    /** A cursor for use in pagination */
    cursor?: boolean | number
    /** The item at the end of the edge */
    node?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Page Info on the &quot;RootQueryToUserConnection&quot; */
export interface RootQueryToUserConnectionPageInfoGenqlSelection{
    /** When paginating forwards, the cursor to continue. */
    endCursor?: boolean | number
    /** When paginating forwards, are there more items? */
    hasNextPage?: boolean | number
    /** When paginating backwards, are there more items? */
    hasPreviousPage?: boolean | number
    /** When paginating backwards, the cursor to continue. */
    startCursor?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The writing setting type */
export interface WritingSettingsGenqlSelection{
    /** Categoria padrão para post. */
    defaultCategory?: boolean | number
    /** Formato de post padrão. */
    defaultPostFormat?: boolean | number
    /** Converter emoticons como :-) e :-P em gráficos ao exibí-los. */
    useSmilies?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The root mutation */
export interface RootMutationGenqlSelection{
    /** The createCategory mutation */
    createCategory?: (CreateCategoryPayloadGenqlSelection & { __args: {
    /** Input for the createCategory mutation */
    input: CreateCategoryInput} })
    /** The createComment mutation */
    createComment?: (CreateCommentPayloadGenqlSelection & { __args: {
    /** Input for the createComment mutation */
    input: CreateCommentInput} })
    /** The createMediaItem mutation */
    createMediaItem?: (CreateMediaItemPayloadGenqlSelection & { __args: {
    /** Input for the createMediaItem mutation */
    input: CreateMediaItemInput} })
    /** The createPage mutation */
    createPage?: (CreatePagePayloadGenqlSelection & { __args: {
    /** Input for the createPage mutation */
    input: CreatePageInput} })
    /** The createPost mutation */
    createPost?: (CreatePostPayloadGenqlSelection & { __args: {
    /** Input for the createPost mutation */
    input: CreatePostInput} })
    /** The createPostFormat mutation */
    createPostFormat?: (CreatePostFormatPayloadGenqlSelection & { __args: {
    /** Input for the createPostFormat mutation */
    input: CreatePostFormatInput} })
    /** The createTag mutation */
    createTag?: (CreateTagPayloadGenqlSelection & { __args: {
    /** Input for the createTag mutation */
    input: CreateTagInput} })
    /** The createUser mutation */
    createUser?: (CreateUserPayloadGenqlSelection & { __args: {
    /** Input for the createUser mutation */
    input: CreateUserInput} })
    /** The deleteCategory mutation */
    deleteCategory?: (DeleteCategoryPayloadGenqlSelection & { __args: {
    /** Input for the deleteCategory mutation */
    input: DeleteCategoryInput} })
    /** The deleteComment mutation */
    deleteComment?: (DeleteCommentPayloadGenqlSelection & { __args: {
    /** Input for the deleteComment mutation */
    input: DeleteCommentInput} })
    /** The deleteMediaItem mutation */
    deleteMediaItem?: (DeleteMediaItemPayloadGenqlSelection & { __args: {
    /** Input for the deleteMediaItem mutation */
    input: DeleteMediaItemInput} })
    /** The deletePage mutation */
    deletePage?: (DeletePagePayloadGenqlSelection & { __args: {
    /** Input for the deletePage mutation */
    input: DeletePageInput} })
    /** The deletePost mutation */
    deletePost?: (DeletePostPayloadGenqlSelection & { __args: {
    /** Input for the deletePost mutation */
    input: DeletePostInput} })
    /** The deletePostFormat mutation */
    deletePostFormat?: (DeletePostFormatPayloadGenqlSelection & { __args: {
    /** Input for the deletePostFormat mutation */
    input: DeletePostFormatInput} })
    /** The deleteTag mutation */
    deleteTag?: (DeleteTagPayloadGenqlSelection & { __args: {
    /** Input for the deleteTag mutation */
    input: DeleteTagInput} })
    /** The deleteUser mutation */
    deleteUser?: (DeleteUserPayloadGenqlSelection & { __args: {
    /** Input for the deleteUser mutation */
    input: DeleteUserInput} })
    /** Increase the count. */
    increaseCount?: { __args: {
    /** The count to increase */
    count?: (Scalars['Int'] | null)} } | boolean | number
    /** The registerUser mutation */
    registerUser?: (RegisterUserPayloadGenqlSelection & { __args: {
    /** Input for the registerUser mutation */
    input: RegisterUserInput} })
    /** The resetUserPassword mutation */
    resetUserPassword?: (ResetUserPasswordPayloadGenqlSelection & { __args: {
    /** Input for the resetUserPassword mutation */
    input: ResetUserPasswordInput} })
    /** The restoreComment mutation */
    restoreComment?: (RestoreCommentPayloadGenqlSelection & { __args: {
    /** Input for the restoreComment mutation */
    input: RestoreCommentInput} })
    /** Send password reset email to user */
    sendPasswordResetEmail?: (SendPasswordResetEmailPayloadGenqlSelection & { __args: {
    /** Input for the sendPasswordResetEmail mutation */
    input: SendPasswordResetEmailInput} })
    /** The updateCategory mutation */
    updateCategory?: (UpdateCategoryPayloadGenqlSelection & { __args: {
    /** Input for the updateCategory mutation */
    input: UpdateCategoryInput} })
    /** The updateComment mutation */
    updateComment?: (UpdateCommentPayloadGenqlSelection & { __args: {
    /** Input for the updateComment mutation */
    input: UpdateCommentInput} })
    /** The updateMediaItem mutation */
    updateMediaItem?: (UpdateMediaItemPayloadGenqlSelection & { __args: {
    /** Input for the updateMediaItem mutation */
    input: UpdateMediaItemInput} })
    /** The updatePage mutation */
    updatePage?: (UpdatePagePayloadGenqlSelection & { __args: {
    /** Input for the updatePage mutation */
    input: UpdatePageInput} })
    /** The updatePost mutation */
    updatePost?: (UpdatePostPayloadGenqlSelection & { __args: {
    /** Input for the updatePost mutation */
    input: UpdatePostInput} })
    /** The updatePostFormat mutation */
    updatePostFormat?: (UpdatePostFormatPayloadGenqlSelection & { __args: {
    /** Input for the updatePostFormat mutation */
    input: UpdatePostFormatInput} })
    /** The updateSettings mutation */
    updateSettings?: (UpdateSettingsPayloadGenqlSelection & { __args: {
    /** Input for the updateSettings mutation */
    input: UpdateSettingsInput} })
    /** The updateTag mutation */
    updateTag?: (UpdateTagPayloadGenqlSelection & { __args: {
    /** Input for the updateTag mutation */
    input: UpdateTagInput} })
    /** The updateUser mutation */
    updateUser?: (UpdateUserPayloadGenqlSelection & { __args: {
    /** Input for the updateUser mutation */
    input: UpdateUserInput} })
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for the createCategory mutation. */
export interface CreateCategoryInput {
/** The slug that the category will be an alias of */
aliasOf?: (Scalars['String'] | null),
/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
clientMutationId?: (Scalars['String'] | null),
/** The description of the category object */
description?: (Scalars['String'] | null),
/** The name of the category object to mutate */
name: Scalars['String'],
/** The ID of the category that should be set as the parent */
parentId?: (Scalars['ID'] | null),
/** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
slug?: (Scalars['String'] | null)}


/** The payload for the createCategory mutation. */
export interface CreateCategoryPayloadGenqlSelection{
    /** The created category */
    category?: CategoryGenqlSelection
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for the createComment mutation. */
export interface CreateCommentInput {
/** The approval status of the comment. */
approved?: (Scalars['String'] | null),
/** The name of the comment's author. */
author?: (Scalars['String'] | null),
/** The email of the comment's author. */
authorEmail?: (Scalars['String'] | null),
/** The url of the comment's author. */
authorUrl?: (Scalars['String'] | null),
/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
clientMutationId?: (Scalars['String'] | null),
/** The database ID of the post object the comment belongs to. */
commentOn?: (Scalars['Int'] | null),
/** Content of the comment. */
content?: (Scalars['String'] | null),
/** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
date?: (Scalars['String'] | null),
/** Parent comment ID of current comment. */
parent?: (Scalars['ID'] | null),
/** The approval status of the comment */
status?: (CommentStatusEnum | null),
/** Type of comment. */
type?: (Scalars['String'] | null)}


/** The payload for the createComment mutation. */
export interface CreateCommentPayloadGenqlSelection{
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId?: boolean | number
    /** The comment that was created */
    comment?: CommentGenqlSelection
    /** Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache */
    success?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for the createMediaItem mutation. */
export interface CreateMediaItemInput {
/** Alternative text to display when mediaItem is not displayed */
altText?: (Scalars['String'] | null),
/** The userId to assign as the author of the mediaItem */
authorId?: (Scalars['ID'] | null),
/** The caption for the mediaItem */
caption?: (Scalars['String'] | null),
/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
clientMutationId?: (Scalars['String'] | null),
/** The comment status for the mediaItem */
commentStatus?: (Scalars['String'] | null),
/** The date of the mediaItem */
date?: (Scalars['String'] | null),
/** The date (in GMT zone) of the mediaItem */
dateGmt?: (Scalars['String'] | null),
/** Description of the mediaItem */
description?: (Scalars['String'] | null),
/** The file name of the mediaItem */
filePath?: (Scalars['String'] | null),
/** The file type of the mediaItem */
fileType?: (MimeTypeEnum | null),
/** The ID of the parent object */
parentId?: (Scalars['ID'] | null),
/** The ping status for the mediaItem */
pingStatus?: (Scalars['String'] | null),
/** The slug of the mediaItem */
slug?: (Scalars['String'] | null),
/** The status of the mediaItem */
status?: (MediaItemStatusEnum | null),
/** The title of the mediaItem */
title?: (Scalars['String'] | null)}


/** The payload for the createMediaItem mutation. */
export interface CreateMediaItemPayloadGenqlSelection{
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId?: boolean | number
    /** The MediaItem object mutation type. */
    mediaItem?: MediaItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for the createPage mutation. */
export interface CreatePageInput {
/** The userId to assign as the author of the object */
authorId?: (Scalars['ID'] | null),
/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
clientMutationId?: (Scalars['String'] | null),
/** The comment status for the object */
commentStatus?: (Scalars['String'] | null),
/** The content of the object */
content?: (Scalars['String'] | null),
/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
date?: (Scalars['String'] | null),
/** The excerpt of the object */
excerpt?: (Scalars['String'] | null),
/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
menuOrder?: (Scalars['Int'] | null),
/** The ID of the parent object */
parentId?: (Scalars['ID'] | null),
/** The password used to protect the content of the object */
password?: (Scalars['String'] | null),
/** The slug of the object */
slug?: (Scalars['String'] | null),
/** The status of the object */
status?: (PostStatusEnum | null),
/** The title of the object */
title?: (Scalars['String'] | null)}


/** The payload for the createPage mutation. */
export interface CreatePagePayloadGenqlSelection{
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId?: boolean | number
    /** The Post object mutation type. */
    page?: PageGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for the createPost mutation. */
export interface CreatePostInput {
/** The userId to assign as the author of the object */
authorId?: (Scalars['ID'] | null),
/** Set connections between the post and categories */
categories?: (PostCategoriesInput | null),
/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
clientMutationId?: (Scalars['String'] | null),
/** The comment status for the object */
commentStatus?: (Scalars['String'] | null),
/** The content of the object */
content?: (Scalars['String'] | null),
/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
date?: (Scalars['String'] | null),
/** The excerpt of the object */
excerpt?: (Scalars['String'] | null),
/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
menuOrder?: (Scalars['Int'] | null),
/** The password used to protect the content of the object */
password?: (Scalars['String'] | null),
/** The ping status for the object */
pingStatus?: (Scalars['String'] | null),
/** URLs that have been pinged. */
pinged?: ((Scalars['String'] | null)[] | null),
/** Set connections between the post and postFormats */
postFormats?: (PostPostFormatsInput | null),
/** The slug of the object */
slug?: (Scalars['String'] | null),
/** The status of the object */
status?: (PostStatusEnum | null),
/** Set connections between the post and tags */
tags?: (PostTagsInput | null),
/** The title of the object */
title?: (Scalars['String'] | null),
/** URLs queued to be pinged. */
toPing?: ((Scalars['String'] | null)[] | null)}


/** Set relationships between the post to categories */
export interface PostCategoriesInput {
/** If true, this will append the category to existing related categories. If false, this will replace existing relationships. Default true. */
append?: (Scalars['Boolean'] | null),
/** The input list of items to set. */
nodes?: ((PostCategoriesNodeInput | null)[] | null)}


/** List of categories to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export interface PostCategoriesNodeInput {
/** The description of the category. This field is used to set a description of the category if a new one is created during the mutation. */
description?: (Scalars['String'] | null),
/** The ID of the category. If present, this will be used to connect to the post. If no existing category exists with this ID, no connection will be made. */
id?: (Scalars['ID'] | null),
/** The name of the category. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
name?: (Scalars['String'] | null),
/** The slug of the category. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
slug?: (Scalars['String'] | null)}


/** Set relationships between the post to postFormats */
export interface PostPostFormatsInput {
/** If true, this will append the postFormat to existing related postFormats. If false, this will replace existing relationships. Default true. */
append?: (Scalars['Boolean'] | null),
/** The input list of items to set. */
nodes?: ((PostPostFormatsNodeInput | null)[] | null)}


/** List of postFormats to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export interface PostPostFormatsNodeInput {
/** The description of the postFormat. This field is used to set a description of the postFormat if a new one is created during the mutation. */
description?: (Scalars['String'] | null),
/** The ID of the postFormat. If present, this will be used to connect to the post. If no existing postFormat exists with this ID, no connection will be made. */
id?: (Scalars['ID'] | null),
/** The name of the postFormat. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
name?: (Scalars['String'] | null),
/** The slug of the postFormat. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
slug?: (Scalars['String'] | null)}


/** Set relationships between the post to tags */
export interface PostTagsInput {
/** If true, this will append the tag to existing related tags. If false, this will replace existing relationships. Default true. */
append?: (Scalars['Boolean'] | null),
/** The input list of items to set. */
nodes?: ((PostTagsNodeInput | null)[] | null)}


/** List of tags to connect the post to. If an ID is set, it will be used to create the connection. If not, it will look for a slug. If neither are valid existing terms, and the site is configured to allow terms to be created during post mutations, a term will be created using the Name if it exists in the input, then fallback to the slug if it exists. */
export interface PostTagsNodeInput {
/** The description of the tag. This field is used to set a description of the tag if a new one is created during the mutation. */
description?: (Scalars['String'] | null),
/** The ID of the tag. If present, this will be used to connect to the post. If no existing tag exists with this ID, no connection will be made. */
id?: (Scalars['ID'] | null),
/** The name of the tag. This field is used to create a new term, if term creation is enabled in nested mutations, and if one does not already exist with the provided slug or ID or if a slug or ID is not provided. If no name is included and a term is created, the creation will fallback to the slug field. */
name?: (Scalars['String'] | null),
/** The slug of the tag. If no ID is present, this field will be used to make a connection. If no existing term exists with this slug, this field will be used as a fallback to the Name field when creating a new term to connect to, if term creation is enabled as a nested mutation. */
slug?: (Scalars['String'] | null)}


/** The payload for the createPost mutation. */
export interface CreatePostPayloadGenqlSelection{
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId?: boolean | number
    /** The Post object mutation type. */
    post?: PostGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for the createPostFormat mutation. */
export interface CreatePostFormatInput {
/** The slug that the post_format will be an alias of */
aliasOf?: (Scalars['String'] | null),
/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
clientMutationId?: (Scalars['String'] | null),
/** The description of the post_format object */
description?: (Scalars['String'] | null),
/** The name of the post_format object to mutate */
name: Scalars['String'],
/** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
slug?: (Scalars['String'] | null)}


/** The payload for the createPostFormat mutation. */
export interface CreatePostFormatPayloadGenqlSelection{
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId?: boolean | number
    /** The created post_format */
    postFormat?: PostFormatGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for the createTag mutation. */
export interface CreateTagInput {
/** The slug that the post_tag will be an alias of */
aliasOf?: (Scalars['String'] | null),
/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
clientMutationId?: (Scalars['String'] | null),
/** The description of the post_tag object */
description?: (Scalars['String'] | null),
/** The name of the post_tag object to mutate */
name: Scalars['String'],
/** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
slug?: (Scalars['String'] | null)}


/** The payload for the createTag mutation. */
export interface CreateTagPayloadGenqlSelection{
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId?: boolean | number
    /** The created post_tag */
    tag?: TagGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for the createUser mutation. */
export interface CreateUserInput {
/** User's AOL IM account. */
aim?: (Scalars['String'] | null),
/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
clientMutationId?: (Scalars['String'] | null),
/** A string containing content about the user. */
description?: (Scalars['String'] | null),
/** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
displayName?: (Scalars['String'] | null),
/** A string containing the user's email address. */
email?: (Scalars['String'] | null),
/** 	The user's first name. */
firstName?: (Scalars['String'] | null),
/** User's Jabber account. */
jabber?: (Scalars['String'] | null),
/** The user's last name. */
lastName?: (Scalars['String'] | null),
/** User's locale. */
locale?: (Scalars['String'] | null),
/** A string that contains a URL-friendly name for the user. The default is the user's username. */
nicename?: (Scalars['String'] | null),
/** The user's nickname, defaults to the user's username. */
nickname?: (Scalars['String'] | null),
/** A string that contains the plain text password for the user. */
password?: (Scalars['String'] | null),
/** The date the user registered. Format is Y-m-d H:i:s. */
registered?: (Scalars['String'] | null),
/** A string for whether to enable the rich editor or not. False if not empty. */
richEditing?: (Scalars['String'] | null),
/** An array of roles to be assigned to the user. */
roles?: ((Scalars['String'] | null)[] | null),
/** A string that contains the user's username for logging in. */
username: Scalars['String'],
/** A string containing the user's URL for the user's web site. */
websiteUrl?: (Scalars['String'] | null),
/** User's Yahoo IM account. */
yim?: (Scalars['String'] | null)}


/** The payload for the createUser mutation. */
export interface CreateUserPayloadGenqlSelection{
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId?: boolean | number
    /** The User object mutation type. */
    user?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for the deleteCategory mutation. */
export interface DeleteCategoryInput {
/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
clientMutationId?: (Scalars['String'] | null),
/** The ID of the category to delete */
id: Scalars['ID']}


/** The payload for the deleteCategory mutation. */
export interface DeleteCategoryPayloadGenqlSelection{
    /** The deleted term object */
    category?: CategoryGenqlSelection
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId?: boolean | number
    /** The ID of the deleted object */
    deletedId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for the deleteComment mutation. */
export interface DeleteCommentInput {
/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
clientMutationId?: (Scalars['String'] | null),
/** Whether the comment should be force deleted instead of being moved to the trash */
forceDelete?: (Scalars['Boolean'] | null),
/** The deleted comment ID */
id: Scalars['ID']}


/** The payload for the deleteComment mutation. */
export interface DeleteCommentPayloadGenqlSelection{
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId?: boolean | number
    /** The deleted comment object */
    comment?: CommentGenqlSelection
    /** The deleted comment ID */
    deletedId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for the deleteMediaItem mutation. */
export interface DeleteMediaItemInput {
/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
clientMutationId?: (Scalars['String'] | null),
/** Whether the mediaItem should be force deleted instead of being moved to the trash */
forceDelete?: (Scalars['Boolean'] | null),
/** The ID of the mediaItem to delete */
id: Scalars['ID']}


/** The payload for the deleteMediaItem mutation. */
export interface DeleteMediaItemPayloadGenqlSelection{
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId?: boolean | number
    /** The ID of the deleted mediaItem */
    deletedId?: boolean | number
    /** The mediaItem before it was deleted */
    mediaItem?: MediaItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for the deletePage mutation. */
export interface DeletePageInput {
/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
clientMutationId?: (Scalars['String'] | null),
/** Whether the object should be force deleted instead of being moved to the trash */
forceDelete?: (Scalars['Boolean'] | null),
/** The ID of the page to delete */
id: Scalars['ID'],
/** Override the edit lock when another user is editing the post */
ignoreEditLock?: (Scalars['Boolean'] | null)}


/** The payload for the deletePage mutation. */
export interface DeletePagePayloadGenqlSelection{
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId?: boolean | number
    /** The ID of the deleted object */
    deletedId?: boolean | number
    /** The object before it was deleted */
    page?: PageGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for the deletePost mutation. */
export interface DeletePostInput {
/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
clientMutationId?: (Scalars['String'] | null),
/** Whether the object should be force deleted instead of being moved to the trash */
forceDelete?: (Scalars['Boolean'] | null),
/** The ID of the post to delete */
id: Scalars['ID'],
/** Override the edit lock when another user is editing the post */
ignoreEditLock?: (Scalars['Boolean'] | null)}


/** The payload for the deletePost mutation. */
export interface DeletePostPayloadGenqlSelection{
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId?: boolean | number
    /** The ID of the deleted object */
    deletedId?: boolean | number
    /** The object before it was deleted */
    post?: PostGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for the deletePostFormat mutation. */
export interface DeletePostFormatInput {
/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
clientMutationId?: (Scalars['String'] | null),
/** The ID of the postFormat to delete */
id: Scalars['ID']}


/** The payload for the deletePostFormat mutation. */
export interface DeletePostFormatPayloadGenqlSelection{
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId?: boolean | number
    /** The ID of the deleted object */
    deletedId?: boolean | number
    /** The deleted term object */
    postFormat?: PostFormatGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for the deleteTag mutation. */
export interface DeleteTagInput {
/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
clientMutationId?: (Scalars['String'] | null),
/** The ID of the tag to delete */
id: Scalars['ID']}


/** The payload for the deleteTag mutation. */
export interface DeleteTagPayloadGenqlSelection{
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId?: boolean | number
    /** The ID of the deleted object */
    deletedId?: boolean | number
    /** The deleted term object */
    tag?: TagGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for the deleteUser mutation. */
export interface DeleteUserInput {
/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
clientMutationId?: (Scalars['String'] | null),
/** The ID of the user you want to delete */
id: Scalars['ID'],
/** Reassign posts and links to new User ID. */
reassignId?: (Scalars['ID'] | null)}


/** The payload for the deleteUser mutation. */
export interface DeleteUserPayloadGenqlSelection{
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId?: boolean | number
    /** The ID of the user that you just deleted */
    deletedId?: boolean | number
    /** The deleted user object */
    user?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for the registerUser mutation. */
export interface RegisterUserInput {
/** User's AOL IM account. */
aim?: (Scalars['String'] | null),
/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
clientMutationId?: (Scalars['String'] | null),
/** A string containing content about the user. */
description?: (Scalars['String'] | null),
/** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
displayName?: (Scalars['String'] | null),
/** A string containing the user's email address. */
email?: (Scalars['String'] | null),
/** 	The user's first name. */
firstName?: (Scalars['String'] | null),
/** User's Jabber account. */
jabber?: (Scalars['String'] | null),
/** The user's last name. */
lastName?: (Scalars['String'] | null),
/** User's locale. */
locale?: (Scalars['String'] | null),
/** A string that contains a URL-friendly name for the user. The default is the user's username. */
nicename?: (Scalars['String'] | null),
/** The user's nickname, defaults to the user's username. */
nickname?: (Scalars['String'] | null),
/** A string that contains the plain text password for the user. */
password?: (Scalars['String'] | null),
/** The date the user registered. Format is Y-m-d H:i:s. */
registered?: (Scalars['String'] | null),
/** A string for whether to enable the rich editor or not. False if not empty. */
richEditing?: (Scalars['String'] | null),
/** A string that contains the user's username. */
username: Scalars['String'],
/** A string containing the user's URL for the user's web site. */
websiteUrl?: (Scalars['String'] | null),
/** User's Yahoo IM account. */
yim?: (Scalars['String'] | null)}


/** The payload for the registerUser mutation. */
export interface RegisterUserPayloadGenqlSelection{
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId?: boolean | number
    /** The User object mutation type. */
    user?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for the resetUserPassword mutation. */
export interface ResetUserPasswordInput {
/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
clientMutationId?: (Scalars['String'] | null),
/** Password reset key */
key?: (Scalars['String'] | null),
/** The user's login (username). */
login?: (Scalars['String'] | null),
/** The new password. */
password?: (Scalars['String'] | null)}


/** The payload for the resetUserPassword mutation. */
export interface ResetUserPasswordPayloadGenqlSelection{
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId?: boolean | number
    /** The User object mutation type. */
    user?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for the restoreComment mutation. */
export interface RestoreCommentInput {
/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
clientMutationId?: (Scalars['String'] | null),
/** The ID of the comment to be restored */
id: Scalars['ID']}


/** The payload for the restoreComment mutation. */
export interface RestoreCommentPayloadGenqlSelection{
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId?: boolean | number
    /** The restored comment object */
    comment?: CommentGenqlSelection
    /** The ID of the restored comment */
    restoredId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for the sendPasswordResetEmail mutation. */
export interface SendPasswordResetEmailInput {
/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
clientMutationId?: (Scalars['String'] | null),
/** A string that contains the user's username or email address. */
username: Scalars['String']}


/** The payload for the sendPasswordResetEmail mutation. */
export interface SendPasswordResetEmailPayloadGenqlSelection{
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId?: boolean | number
    /** Whether the mutation completed successfully. This does NOT necessarily mean that an email was sent. */
    success?: boolean | number
    /**
     * @deprecated This field will be removed in a future version of WPGraphQL
     * The user that the password reset email was sent to
     */
    user?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for the updateCategory mutation. */
export interface UpdateCategoryInput {
/** The slug that the category will be an alias of */
aliasOf?: (Scalars['String'] | null),
/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
clientMutationId?: (Scalars['String'] | null),
/** The description of the category object */
description?: (Scalars['String'] | null),
/** The ID of the category object to update */
id: Scalars['ID'],
/** The name of the category object to mutate */
name?: (Scalars['String'] | null),
/** The ID of the category that should be set as the parent */
parentId?: (Scalars['ID'] | null),
/** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
slug?: (Scalars['String'] | null)}


/** The payload for the updateCategory mutation. */
export interface UpdateCategoryPayloadGenqlSelection{
    /** The created category */
    category?: CategoryGenqlSelection
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for the updateComment mutation. */
export interface UpdateCommentInput {
/** The approval status of the comment. */
approved?: (Scalars['String'] | null),
/** The name of the comment's author. */
author?: (Scalars['String'] | null),
/** The email of the comment's author. */
authorEmail?: (Scalars['String'] | null),
/** The url of the comment's author. */
authorUrl?: (Scalars['String'] | null),
/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
clientMutationId?: (Scalars['String'] | null),
/** The database ID of the post object the comment belongs to. */
commentOn?: (Scalars['Int'] | null),
/** Content of the comment. */
content?: (Scalars['String'] | null),
/** The date of the object. Preferable to enter as year/month/day ( e.g. 01/31/2017 ) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
date?: (Scalars['String'] | null),
/** The ID of the comment being updated. */
id: Scalars['ID'],
/** Parent comment ID of current comment. */
parent?: (Scalars['ID'] | null),
/** The approval status of the comment */
status?: (CommentStatusEnum | null),
/** Type of comment. */
type?: (Scalars['String'] | null)}


/** The payload for the updateComment mutation. */
export interface UpdateCommentPayloadGenqlSelection{
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId?: boolean | number
    /** The comment that was created */
    comment?: CommentGenqlSelection
    /** Whether the mutation succeeded. If the comment is not approved, the server will not return the comment to a non authenticated user, but a success message can be returned if the create succeeded, and the client can optimistically add the comment to the client cache */
    success?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for the updateMediaItem mutation. */
export interface UpdateMediaItemInput {
/** Alternative text to display when mediaItem is not displayed */
altText?: (Scalars['String'] | null),
/** The userId to assign as the author of the mediaItem */
authorId?: (Scalars['ID'] | null),
/** The caption for the mediaItem */
caption?: (Scalars['String'] | null),
/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
clientMutationId?: (Scalars['String'] | null),
/** The comment status for the mediaItem */
commentStatus?: (Scalars['String'] | null),
/** The date of the mediaItem */
date?: (Scalars['String'] | null),
/** The date (in GMT zone) of the mediaItem */
dateGmt?: (Scalars['String'] | null),
/** Description of the mediaItem */
description?: (Scalars['String'] | null),
/** The file name of the mediaItem */
filePath?: (Scalars['String'] | null),
/** The file type of the mediaItem */
fileType?: (MimeTypeEnum | null),
/** The ID of the mediaItem object */
id: Scalars['ID'],
/** The ID of the parent object */
parentId?: (Scalars['ID'] | null),
/** The ping status for the mediaItem */
pingStatus?: (Scalars['String'] | null),
/** The slug of the mediaItem */
slug?: (Scalars['String'] | null),
/** The status of the mediaItem */
status?: (MediaItemStatusEnum | null),
/** The title of the mediaItem */
title?: (Scalars['String'] | null)}


/** The payload for the updateMediaItem mutation. */
export interface UpdateMediaItemPayloadGenqlSelection{
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId?: boolean | number
    /** The MediaItem object mutation type. */
    mediaItem?: MediaItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for the updatePage mutation. */
export interface UpdatePageInput {
/** The userId to assign as the author of the object */
authorId?: (Scalars['ID'] | null),
/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
clientMutationId?: (Scalars['String'] | null),
/** The comment status for the object */
commentStatus?: (Scalars['String'] | null),
/** The content of the object */
content?: (Scalars['String'] | null),
/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
date?: (Scalars['String'] | null),
/** The excerpt of the object */
excerpt?: (Scalars['String'] | null),
/** The ID of the page object */
id: Scalars['ID'],
/** Override the edit lock when another user is editing the post */
ignoreEditLock?: (Scalars['Boolean'] | null),
/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
menuOrder?: (Scalars['Int'] | null),
/** The ID of the parent object */
parentId?: (Scalars['ID'] | null),
/** The password used to protect the content of the object */
password?: (Scalars['String'] | null),
/** The slug of the object */
slug?: (Scalars['String'] | null),
/** The status of the object */
status?: (PostStatusEnum | null),
/** The title of the object */
title?: (Scalars['String'] | null)}


/** The payload for the updatePage mutation. */
export interface UpdatePagePayloadGenqlSelection{
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId?: boolean | number
    /** The Post object mutation type. */
    page?: PageGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for the updatePost mutation. */
export interface UpdatePostInput {
/** The userId to assign as the author of the object */
authorId?: (Scalars['ID'] | null),
/** Set connections between the post and categories */
categories?: (PostCategoriesInput | null),
/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
clientMutationId?: (Scalars['String'] | null),
/** The comment status for the object */
commentStatus?: (Scalars['String'] | null),
/** The content of the object */
content?: (Scalars['String'] | null),
/** The date of the object. Preferable to enter as year/month/day (e.g. 01/31/2017) as it will rearrange date as fit if it is not specified. Incomplete dates may have unintended results for example, "2017" as the input will use current date with timestamp 20:17  */
date?: (Scalars['String'] | null),
/** The excerpt of the object */
excerpt?: (Scalars['String'] | null),
/** The ID of the post object */
id: Scalars['ID'],
/** Override the edit lock when another user is editing the post */
ignoreEditLock?: (Scalars['Boolean'] | null),
/** A field used for ordering posts. This is typically used with nav menu items or for special ordering of hierarchical content types. */
menuOrder?: (Scalars['Int'] | null),
/** The password used to protect the content of the object */
password?: (Scalars['String'] | null),
/** The ping status for the object */
pingStatus?: (Scalars['String'] | null),
/** URLs that have been pinged. */
pinged?: ((Scalars['String'] | null)[] | null),
/** Set connections between the post and postFormats */
postFormats?: (PostPostFormatsInput | null),
/** The slug of the object */
slug?: (Scalars['String'] | null),
/** The status of the object */
status?: (PostStatusEnum | null),
/** Set connections between the post and tags */
tags?: (PostTagsInput | null),
/** The title of the object */
title?: (Scalars['String'] | null),
/** URLs queued to be pinged. */
toPing?: ((Scalars['String'] | null)[] | null)}


/** The payload for the updatePost mutation. */
export interface UpdatePostPayloadGenqlSelection{
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId?: boolean | number
    /** The Post object mutation type. */
    post?: PostGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for the updatePostFormat mutation. */
export interface UpdatePostFormatInput {
/** The slug that the post_format will be an alias of */
aliasOf?: (Scalars['String'] | null),
/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
clientMutationId?: (Scalars['String'] | null),
/** The description of the post_format object */
description?: (Scalars['String'] | null),
/** The ID of the postFormat object to update */
id: Scalars['ID'],
/** The name of the post_format object to mutate */
name?: (Scalars['String'] | null),
/** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
slug?: (Scalars['String'] | null)}


/** The payload for the updatePostFormat mutation. */
export interface UpdatePostFormatPayloadGenqlSelection{
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId?: boolean | number
    /** The created post_format */
    postFormat?: PostFormatGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for the updateSettings mutation. */
export interface UpdateSettingsInput {
/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
clientMutationId?: (Scalars['String'] | null),
/** Permitir que pessoas enviem comentários em novos posts. */
discussionSettingsDefaultCommentStatus?: (Scalars['String'] | null),
/** Permitir avisos de links de outros blogs (pingbacks ou trackbacks) em novos artigos. */
discussionSettingsDefaultPingStatus?: (Scalars['String'] | null),
/** Um formato de data para todos os textos. */
generalSettingsDateFormat?: (Scalars['String'] | null),
/** Slogan do site. */
generalSettingsDescription?: (Scalars['String'] | null),
/** Código de localização do WordPress. */
generalSettingsLanguage?: (Scalars['String'] | null),
/** Número do dia da semana em que a semana deve iniciar. */
generalSettingsStartOfWeek?: (Scalars['Int'] | null),
/** Um formato de hora para todos os textos. */
generalSettingsTimeFormat?: (Scalars['String'] | null),
/** Uma cidade no mesmo fuso horário que você. */
generalSettingsTimezone?: (Scalars['String'] | null),
/** Título do site. */
generalSettingsTitle?: (Scalars['String'] | null),
/** O ID da página que deve exibir os posts mais recentes */
readingSettingsPageForPosts?: (Scalars['Int'] | null),
/** O ID da página que deve ser exibida na página inicial */
readingSettingsPageOnFront?: (Scalars['Int'] | null),
/** As páginas do blog mostram no máximo. */
readingSettingsPostsPerPage?: (Scalars['Int'] | null),
/** O que exibir na página inicial */
readingSettingsShowOnFront?: (Scalars['String'] | null),
/** Categoria padrão para post. */
writingSettingsDefaultCategory?: (Scalars['Int'] | null),
/** Formato de post padrão. */
writingSettingsDefaultPostFormat?: (Scalars['String'] | null),
/** Converter emoticons como :-) e :-P em gráficos ao exibí-los. */
writingSettingsUseSmilies?: (Scalars['Boolean'] | null)}


/** The payload for the updateSettings mutation. */
export interface UpdateSettingsPayloadGenqlSelection{
    /** Update all settings. */
    allSettings?: SettingsGenqlSelection
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId?: boolean | number
    /** Update the DiscussionSettings setting. */
    discussionSettings?: DiscussionSettingsGenqlSelection
    /** Update the GeneralSettings setting. */
    generalSettings?: GeneralSettingsGenqlSelection
    /** Update the ReadingSettings setting. */
    readingSettings?: ReadingSettingsGenqlSelection
    /** Update the WritingSettings setting. */
    writingSettings?: WritingSettingsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for the updateTag mutation. */
export interface UpdateTagInput {
/** The slug that the post_tag will be an alias of */
aliasOf?: (Scalars['String'] | null),
/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
clientMutationId?: (Scalars['String'] | null),
/** The description of the post_tag object */
description?: (Scalars['String'] | null),
/** The ID of the tag object to update */
id: Scalars['ID'],
/** The name of the post_tag object to mutate */
name?: (Scalars['String'] | null),
/** If this argument exists then the slug will be checked to see if it is not an existing valid term. If that check succeeds (it is not a valid term), then it is added and the term id is given. If it fails, then a check is made to whether the taxonomy is hierarchical and the parent argument is not empty. If the second check succeeds, the term will be inserted and the term id will be given. If the slug argument is empty, then it will be calculated from the term name. */
slug?: (Scalars['String'] | null)}


/** The payload for the updateTag mutation. */
export interface UpdateTagPayloadGenqlSelection{
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId?: boolean | number
    /** The created post_tag */
    tag?: TagGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Input for the updateUser mutation. */
export interface UpdateUserInput {
/** User's AOL IM account. */
aim?: (Scalars['String'] | null),
/** This is an ID that can be passed to a mutation by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
clientMutationId?: (Scalars['String'] | null),
/** A string containing content about the user. */
description?: (Scalars['String'] | null),
/** A string that will be shown on the site. Defaults to user's username. It is likely that you will want to change this, for both appearance and security through obscurity (that is if you dont use and delete the default admin user). */
displayName?: (Scalars['String'] | null),
/** A string containing the user's email address. */
email?: (Scalars['String'] | null),
/** 	The user's first name. */
firstName?: (Scalars['String'] | null),
/** The ID of the user */
id: Scalars['ID'],
/** User's Jabber account. */
jabber?: (Scalars['String'] | null),
/** The user's last name. */
lastName?: (Scalars['String'] | null),
/** User's locale. */
locale?: (Scalars['String'] | null),
/** A string that contains a URL-friendly name for the user. The default is the user's username. */
nicename?: (Scalars['String'] | null),
/** The user's nickname, defaults to the user's username. */
nickname?: (Scalars['String'] | null),
/** A string that contains the plain text password for the user. */
password?: (Scalars['String'] | null),
/** The date the user registered. Format is Y-m-d H:i:s. */
registered?: (Scalars['String'] | null),
/** A string for whether to enable the rich editor or not. False if not empty. */
richEditing?: (Scalars['String'] | null),
/** An array of roles to be assigned to the user. */
roles?: ((Scalars['String'] | null)[] | null),
/** A string containing the user's URL for the user's web site. */
websiteUrl?: (Scalars['String'] | null),
/** User's Yahoo IM account. */
yim?: (Scalars['String'] | null)}


/** The payload for the updateUser mutation. */
export interface UpdateUserPayloadGenqlSelection{
    /** If a &#039;clientMutationId&#039; input is provided to the mutation, it will be returned as output on the mutation. This ID can be used by the client to track the progress of mutations and catch possible duplicate mutation submissions. */
    clientMutationId?: boolean | number
    /** The User object mutation type. */
    user?: UserGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A Comment Author object */
export interface CommentAuthorGenqlSelection{
    /** Avatar object for user. The avatar object can be retrieved in different sizes by specifying the size argument. */
    avatar?: (AvatarGenqlSelection & { __args?: {
    /** The size attribute of the avatar field can be used to fetch avatars of different sizes. The value corresponds to the dimension in pixels to fetch. The default is 96 pixels. */
    size?: (Scalars['Int'] | null), 
    /** Whether to always show the default image, never the Gravatar. Default false */
    forceDefault?: (Scalars['Boolean'] | null), 
    /** The rating level of the avatar. */
    rating?: (AvatarRatingEnum | null)} })
    /** The unique identifier stored in the database */
    databaseId?: boolean | number
    /** The email for the comment author */
    email?: boolean | number
    /** The globally unique identifier for the comment author object */
    id?: boolean | number
    /** Whether the object is restricted from the current viewer */
    isRestricted?: boolean | number
    /** The name for the comment author. */
    name?: boolean | number
    /** The url the comment author. */
    url?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The template assigned to the node */
export interface DefaultTemplateGenqlSelection{
    /** The name of the template */
    templateName?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Interface representing fields of the ACF &quot;AtributosExtraProduto&quot; Field Group */
export interface AtributosExtraProduto_FieldsGenqlSelection{
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;AtributosExtraProduto&quot; Field Group */
    amadurecimento?: boolean | number
    /**
     * @deprecated Use __typename instead
     * The name of the field group
     */
    fieldGroupName?: boolean | number
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;AtributosExtraProduto&quot; Field Group */
    potencialDeGuarda?: boolean | number
    on_AtributosExtraProduto?: AtributosExtraProdutoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** A Field Group managed by ACF */
export interface AcfFieldGroupGenqlSelection{
    /**
     * @deprecated Use __typename instead
     * The name of the field group
     */
    fieldGroupName?: boolean | number
    on_AtributosExtraProduto?: AtributosExtraProdutoGenqlSelection
    on_CabeAlhoDeCatLogos?: CabeAlhoDeCatLogosGenqlSelection
    on_CamposEspeciaisDeConteDo?: CamposEspeciaisDeConteDoGenqlSelection
    on_DadosExtraProdutores?: DadosExtraProdutoresGenqlSelection
    on_OutrosDadosDeProduto?: OutrosDadosDeProdutoGenqlSelection
    on_PromoEs?: PromoEsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Fields associated with an ACF Field Group */
export interface AcfFieldGroupFieldsGenqlSelection{
    /**
     * @deprecated Use __typename instead
     * The name of the field group
     */
    fieldGroupName?: boolean | number
    on_AtributosExtraProduto?: AtributosExtraProdutoGenqlSelection
    on_CabeAlhoDeCatLogos?: CabeAlhoDeCatLogosGenqlSelection
    on_CamposEspeciaisDeConteDo?: CamposEspeciaisDeConteDoGenqlSelection
    on_DadosExtraProdutores?: DadosExtraProdutoresGenqlSelection
    on_OutrosDadosDeProduto?: OutrosDadosDeProdutoGenqlSelection
    on_PromoEs?: PromoEsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The &quot;AtributosExtraProduto&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export interface AtributosExtraProdutoGenqlSelection{
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;AtributosExtraProduto&quot; Field Group */
    amadurecimento?: boolean | number
    /**
     * @deprecated Use __typename instead
     * The name of the field group
     */
    fieldGroupName?: boolean | number
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;AtributosExtraProduto&quot; Field Group */
    potencialDeGuarda?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Interface representing fields of the ACF &quot;CabeAlhoDeCatLogos&quot; Field Group */
export interface CabeAlhoDeCatLogos_FieldsGenqlSelection{
    /** Image &quot;customizada&quot; a mostrar no cabeçalho */
    customCatalogImage?: AcfMediaItemConnectionEdgeGenqlSelection
    /** Título customizado para o catálogo */
    customCatalogTitle?: boolean | number
    /**
     * @deprecated Use __typename instead
     * The name of the field group
     */
    fieldGroupName?: boolean | number
    on_CabeAlhoDeCatLogos?: CabeAlhoDeCatLogosGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Connection between the CabeAlhoDeCatLogos_Fields type and the MediaItem type */
export interface AcfMediaItemConnectionEdgeGenqlSelection{
    /** Opaque reference to the nodes position in the connection. Value can be used with pagination args. */
    cursor?: boolean | number
    /** The node of the connection, without the edges */
    node?: MediaItemGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The &quot;CabeAlhoDeCatLogos&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export interface CabeAlhoDeCatLogosGenqlSelection{
    /** Image &quot;customizada&quot; a mostrar no cabeçalho */
    customCatalogImage?: AcfMediaItemConnectionEdgeGenqlSelection
    /** Título customizado para o catálogo */
    customCatalogTitle?: boolean | number
    /**
     * @deprecated Use __typename instead
     * The name of the field group
     */
    fieldGroupName?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Interface representing fields of the ACF &quot;CamposEspeciaisDeConteDo&quot; Field Group */
export interface CamposEspeciaisDeConteDo_FieldsGenqlSelection{
    /**
     * @deprecated Use __typename instead
     * The name of the field group
     */
    fieldGroupName?: boolean | number
    /** Field of the &quot;wysiwyg&quot; Field Type added to the schema as part of the &quot;CamposEspeciaisDeConteDo&quot; Field Group */
    firstParagraph?: boolean | number
    /** Primeira legenda do conteúdo */
    firstSubtitle?: boolean | number
    on_CamposEspeciaisDeConteDo?: CamposEspeciaisDeConteDoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The &quot;CamposEspeciaisDeConteDo&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export interface CamposEspeciaisDeConteDoGenqlSelection{
    /**
     * @deprecated Use __typename instead
     * The name of the field group
     */
    fieldGroupName?: boolean | number
    /** Field of the &quot;wysiwyg&quot; Field Type added to the schema as part of the &quot;CamposEspeciaisDeConteDo&quot; Field Group */
    firstParagraph?: boolean | number
    /** Primeira legenda do conteúdo */
    firstSubtitle?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Interface representing fields of the ACF &quot;DadosExtraProdutores&quot; Field Group */
export interface DadosExtraProdutores_FieldsGenqlSelection{
    /**
     * @deprecated Use __typename instead
     * The name of the field group
     */
    fieldGroupName?: boolean | number
    /** Pequeno texto de informações em destaque do produtor (para a página de produto) */
    textoDestaque?: boolean | number
    on_DadosExtraProdutores?: DadosExtraProdutoresGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The &quot;DadosExtraProdutores&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export interface DadosExtraProdutoresGenqlSelection{
    /**
     * @deprecated Use __typename instead
     * The name of the field group
     */
    fieldGroupName?: boolean | number
    /** Pequeno texto de informações em destaque do produtor (para a página de produto) */
    textoDestaque?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Interface representing fields of the ACF &quot;OutrosDadosDeProduto&quot; Field Group */
export interface OutrosDadosDeProduto_FieldsGenqlSelection{
    /** Imagem que vai embaixo do vinho, como fundo do título do artigo */
    bgContentImage?: AcfMediaItemConnectionEdgeGenqlSelection
    /** Cor final do gradiente do fundo das garrafas */
    bgGradientEnd?: boolean | number
    /** Cor inicial do gradiente do fundo das garrafas */
    bgGradientStart?: boolean | number
    /**
     * @deprecated Use __typename instead
     * The name of the field group
     */
    fieldGroupName?: boolean | number
    /** Cor utilizado para o botão de adicionar ao carrinho, cor de links, etc */
    pageMainColor?: boolean | number
    /** O título para o artigo que vai embaixo da foto do produto */
    tituloDoArtigo?: boolean | number
    on_OutrosDadosDeProduto?: OutrosDadosDeProdutoGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The &quot;OutrosDadosDeProduto&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export interface OutrosDadosDeProdutoGenqlSelection{
    /** Imagem que vai embaixo do vinho, como fundo do título do artigo */
    bgContentImage?: AcfMediaItemConnectionEdgeGenqlSelection
    /** Cor final do gradiente do fundo das garrafas */
    bgGradientEnd?: boolean | number
    /** Cor inicial do gradiente do fundo das garrafas */
    bgGradientStart?: boolean | number
    /**
     * @deprecated Use __typename instead
     * The name of the field group
     */
    fieldGroupName?: boolean | number
    /** Cor utilizado para o botão de adicionar ao carrinho, cor de links, etc */
    pageMainColor?: boolean | number
    /** O título para o artigo que vai embaixo da foto do produto */
    tituloDoArtigo?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** Interface representing fields of the ACF &quot;PromoEs&quot; Field Group */
export interface PromoEs_FieldsGenqlSelection{
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;PromoEs&quot; Field Group */
    codigoDeCupom?: boolean | number
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;PromoEs&quot; Field Group */
    descontoDoCupom?: boolean | number
    /**
     * @deprecated Use __typename instead
     * The name of the field group
     */
    fieldGroupName?: boolean | number
    /** Field of the &quot;select&quot; Field Type added to the schema as part of the &quot;PromoEs&quot; Field Group */
    tipoDePromocao?: boolean | number
    on_PromoEs?: PromoEsGenqlSelection
    __typename?: boolean | number
    __scalar?: boolean | number
}


/** The &quot;PromoEs&quot; Field Group. Added to the Schema by &quot;WPGraphQL for ACF&quot;. */
export interface PromoEsGenqlSelection{
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;PromoEs&quot; Field Group */
    codigoDeCupom?: boolean | number
    /** Field of the &quot;text&quot; Field Type added to the schema as part of the &quot;PromoEs&quot; Field Group */
    descontoDoCupom?: boolean | number
    /**
     * @deprecated Use __typename instead
     * The name of the field group
     */
    fieldGroupName?: boolean | number
    /** Field of the &quot;select&quot; Field Type added to the schema as part of the &quot;PromoEs&quot; Field Group */
    tipoDePromocao?: boolean | number
    __typename?: boolean | number
    __scalar?: boolean | number
}

export type QueryGenqlSelection = RootQueryGenqlSelection
export type MutationGenqlSelection = RootMutationGenqlSelection


    const RootQuery_possibleTypes: string[] = ['RootQuery']
    export const isRootQuery = (obj?: { __typename?: any } | null): obj is RootQuery => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQuery"')
      return RootQuery_possibleTypes.includes(obj.__typename)
    }
    


    const Settings_possibleTypes: string[] = ['Settings']
    export const isSettings = (obj?: { __typename?: any } | null): obj is Settings => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSettings"')
      return Settings_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToCategoryConnection_possibleTypes: string[] = ['RootQueryToCategoryConnection']
    export const isRootQueryToCategoryConnection = (obj?: { __typename?: any } | null): obj is RootQueryToCategoryConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToCategoryConnection"')
      return RootQueryToCategoryConnection_possibleTypes.includes(obj.__typename)
    }
    


    const CategoryConnection_possibleTypes: string[] = ['RootQueryToCategoryConnection','CategoryToAncestorsCategoryConnection','CategoryToCategoryConnection','PostToCategoryConnection']
    export const isCategoryConnection = (obj?: { __typename?: any } | null): obj is CategoryConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCategoryConnection"')
      return CategoryConnection_possibleTypes.includes(obj.__typename)
    }
    


    const Connection_possibleTypes: string[] = ['RootQueryToCategoryConnection','TermNodeToEnqueuedScriptConnection','TermNodeToEnqueuedStylesheetConnection','CategoryToAncestorsCategoryConnection','CategoryToCategoryConnection','CategoryToContentNodeConnection','ContentTypeToTaxonomyConnection','TaxonomyToContentTypeConnection','TaxonomyToTermNodeConnection','ContentTypeToContentNodeConnection','UserToCommentConnection','CommentToCommentConnection','UserToEnqueuedScriptConnection','UserToEnqueuedStylesheetConnection','UserToMediaItemConnection','HierarchicalContentNodeToContentNodeAncestorsConnection','HierarchicalContentNodeToContentNodeChildrenConnection','ContentNodeToEnqueuedScriptConnection','ContentNodeToEnqueuedStylesheetConnection','MediaItemToCommentConnection','UserToPageConnection','PageToCommentConnection','PageToRevisionConnection','UserToPostConnection','PostToPostConnection','PostToCategoryConnection','PostToCommentConnection','PostToPostFormatConnection','PostFormatToContentNodeConnection','PostFormatToPostConnection','PostToRevisionConnection','PostToTagConnection','TagToContentNodeConnection','TagToPostConnection','PostToTermNodeConnection','UserToRevisionsConnection','UserToUserRoleConnection','CategoryToPostConnection','RootQueryToCommentConnection','RootQueryToContentNodeConnection','RootQueryToContentTypeConnection','RootQueryToMediaItemConnection','MenuToMenuItemConnection','MenuItemToMenuItemConnection','RootQueryToMenuItemConnection','RootQueryToMenuConnection','RootQueryToPageConnection','RootQueryToPluginConnection','RootQueryToPostFormatConnection','RootQueryToPostConnection','RootQueryToEnqueuedScriptConnection','RootQueryToEnqueuedStylesheetConnection','RootQueryToRevisionsConnection','RootQueryToTagConnection','RootQueryToTaxonomyConnection','RootQueryToTermNodeConnection','RootQueryToThemeConnection','RootQueryToUserRoleConnection','RootQueryToUserConnection']
    export const isConnection = (obj?: { __typename?: any } | null): obj is Connection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isConnection"')
      return Connection_possibleTypes.includes(obj.__typename)
    }
    


    const Edge_possibleTypes: string[] = ['TermNodeToEnqueuedScriptConnectionEdge','TermNodeToEnqueuedStylesheetConnectionEdge','CategoryToAncestorsCategoryConnectionEdge','CategoryToCategoryConnectionEdge','ContentNodeToContentTypeConnectionEdge','TaxonomyToContentTypeConnectionEdge','TaxonomyToTermNodeConnectionEdge','ContentTypeToTaxonomyConnectionEdge','ContentTypeToContentNodeConnectionEdge','ContentNodeToEditLockConnectionEdge','CommentToCommenterConnectionEdge','CommentToContentNodeConnectionEdge','CommentToParentCommentConnectionEdge','CommentToCommentConnectionEdge','UserToCommentConnectionEdge','UserToEnqueuedScriptConnectionEdge','UserToEnqueuedStylesheetConnectionEdge','NodeWithAuthorToUserConnectionEdge','HierarchicalContentNodeToContentNodeAncestorsConnectionEdge','HierarchicalContentNodeToContentNodeChildrenConnectionEdge','ContentNodeToEnqueuedScriptConnectionEdge','ContentNodeToEnqueuedStylesheetConnectionEdge','ContentNodeToEditLastConnectionEdge','HierarchicalContentNodeToParentContentNodeConnectionEdge','MediaItemToCommentConnectionEdge','UserToMediaItemConnectionEdge','NodeWithFeaturedImageToMediaItemConnectionEdge','NodeWithRevisionsToContentNodeConnectionEdge','PageToCommentConnectionEdge','PageToPreviewConnectionEdge','PageToRevisionConnectionEdge','UserToPageConnectionEdge','PostToPostConnectionEdge','PostToCategoryConnectionEdge','PostToCommentConnectionEdge','PostToParentConnectionEdge','PostFormatToContentNodeConnectionEdge','PostFormatToPostConnectionEdge','PostFormatToTaxonomyConnectionEdge','PostToPostFormatConnectionEdge','PostToPreviewConnectionEdge','PostToRevisionConnectionEdge','TagToContentNodeConnectionEdge','TagToPostConnectionEdge','TagToTaxonomyConnectionEdge','PostToTagConnectionEdge','PostToTermNodeConnectionEdge','UserToPostConnectionEdge','UserToRevisionsConnectionEdge','UserToUserRoleConnectionEdge','CategoryToContentNodeConnectionEdge','CategoryToParentCategoryConnectionEdge','CategoryToPostConnectionEdge','CategoryToTaxonomyConnectionEdge','RootQueryToCategoryConnectionEdge','RootQueryToCommentConnectionEdge','RootQueryToContentNodeConnectionEdge','RootQueryToContentTypeConnectionEdge','RootQueryToMediaItemConnectionEdge','MenuItemToMenuItemConnectionEdge','MenuItemToMenuItemLinkableConnectionEdge','MenuItemToMenuConnectionEdge','MenuToMenuItemConnectionEdge','RootQueryToMenuItemConnectionEdge','RootQueryToMenuConnectionEdge','RootQueryToPageConnectionEdge','RootQueryToPluginConnectionEdge','RootQueryToPostFormatConnectionEdge','RootQueryToPostConnectionEdge','RootQueryToEnqueuedScriptConnectionEdge','RootQueryToEnqueuedStylesheetConnectionEdge','RootQueryToRevisionsConnectionEdge','RootQueryToTagConnectionEdge','RootQueryToTaxonomyConnectionEdge','RootQueryToTermNodeConnectionEdge','RootQueryToThemeConnectionEdge','RootQueryToUserRoleConnectionEdge','RootQueryToUserConnectionEdge','AcfMediaItemConnectionEdge']
    export const isEdge = (obj?: { __typename?: any } | null): obj is Edge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEdge"')
      return Edge_possibleTypes.includes(obj.__typename)
    }
    


    const Node_possibleTypes: string[] = ['Category','EnqueuedScript','EnqueuedStylesheet','ContentType','Taxonomy','User','Comment','MediaItem','Page','Post','PostFormat','Tag','UserRole','Menu','MenuItem','Plugin','Theme','CommentAuthor']
    export const isNode = (obj?: { __typename?: any } | null): obj is Node => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNode"')
      return Node_possibleTypes.includes(obj.__typename)
    }
    


    const PageInfo_possibleTypes: string[] = ['TermNodeToEnqueuedScriptConnectionPageInfo','TermNodeToEnqueuedStylesheetConnectionPageInfo','CategoryToAncestorsCategoryConnectionPageInfo','CategoryToCategoryConnectionPageInfo','TaxonomyToContentTypeConnectionPageInfo','TaxonomyToTermNodeConnectionPageInfo','ContentTypeToTaxonomyConnectionPageInfo','ContentTypeToContentNodeConnectionPageInfo','CommentToCommentConnectionPageInfo','UserToCommentConnectionPageInfo','UserToEnqueuedScriptConnectionPageInfo','UserToEnqueuedStylesheetConnectionPageInfo','HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo','HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo','ContentNodeToEnqueuedScriptConnectionPageInfo','ContentNodeToEnqueuedStylesheetConnectionPageInfo','MediaItemToCommentConnectionPageInfo','UserToMediaItemConnectionPageInfo','PageToCommentConnectionPageInfo','PageToRevisionConnectionPageInfo','UserToPageConnectionPageInfo','PostToPostConnectionPageInfo','PostToCategoryConnectionPageInfo','PostToCommentConnectionPageInfo','PostFormatToContentNodeConnectionPageInfo','PostFormatToPostConnectionPageInfo','PostToPostFormatConnectionPageInfo','PostToRevisionConnectionPageInfo','TagToContentNodeConnectionPageInfo','TagToPostConnectionPageInfo','PostToTagConnectionPageInfo','PostToTermNodeConnectionPageInfo','UserToPostConnectionPageInfo','UserToRevisionsConnectionPageInfo','UserToUserRoleConnectionPageInfo','CategoryToContentNodeConnectionPageInfo','CategoryToPostConnectionPageInfo','RootQueryToCategoryConnectionPageInfo','RootQueryToCommentConnectionPageInfo','RootQueryToContentNodeConnectionPageInfo','RootQueryToContentTypeConnectionPageInfo','RootQueryToMediaItemConnectionPageInfo','MenuItemToMenuItemConnectionPageInfo','MenuToMenuItemConnectionPageInfo','RootQueryToMenuItemConnectionPageInfo','RootQueryToMenuConnectionPageInfo','RootQueryToPageConnectionPageInfo','RootQueryToPluginConnectionPageInfo','RootQueryToPostFormatConnectionPageInfo','RootQueryToPostConnectionPageInfo','RootQueryToEnqueuedScriptConnectionPageInfo','RootQueryToEnqueuedStylesheetConnectionPageInfo','RootQueryToRevisionsConnectionPageInfo','RootQueryToTagConnectionPageInfo','RootQueryToTaxonomyConnectionPageInfo','RootQueryToTermNodeConnectionPageInfo','RootQueryToThemeConnectionPageInfo','RootQueryToUserRoleConnectionPageInfo','RootQueryToUserConnectionPageInfo']
    export const isPageInfo = (obj?: { __typename?: any } | null): obj is PageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPageInfo"')
      return PageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const CategoryConnectionEdge_possibleTypes: string[] = ['CategoryToAncestorsCategoryConnectionEdge','CategoryToCategoryConnectionEdge','PostToCategoryConnectionEdge','CategoryToParentCategoryConnectionEdge','RootQueryToCategoryConnectionEdge']
    export const isCategoryConnectionEdge = (obj?: { __typename?: any } | null): obj is CategoryConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCategoryConnectionEdge"')
      return CategoryConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const Category_possibleTypes: string[] = ['Category']
    export const isCategory = (obj?: { __typename?: any } | null): obj is Category => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCategory"')
      return Category_possibleTypes.includes(obj.__typename)
    }
    


    const TermNode_possibleTypes: string[] = ['Category','PostFormat','Tag']
    export const isTermNode = (obj?: { __typename?: any } | null): obj is TermNode => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTermNode"')
      return TermNode_possibleTypes.includes(obj.__typename)
    }
    


    const UniformResourceIdentifiable_possibleTypes: string[] = ['Category','ContentType','User','Comment','MediaItem','Page','Post','PostFormat','Tag']
    export const isUniformResourceIdentifiable = (obj?: { __typename?: any } | null): obj is UniformResourceIdentifiable => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUniformResourceIdentifiable"')
      return UniformResourceIdentifiable_possibleTypes.includes(obj.__typename)
    }
    


    const TermNodeToEnqueuedScriptConnection_possibleTypes: string[] = ['TermNodeToEnqueuedScriptConnection']
    export const isTermNodeToEnqueuedScriptConnection = (obj?: { __typename?: any } | null): obj is TermNodeToEnqueuedScriptConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTermNodeToEnqueuedScriptConnection"')
      return TermNodeToEnqueuedScriptConnection_possibleTypes.includes(obj.__typename)
    }
    


    const EnqueuedScriptConnection_possibleTypes: string[] = ['TermNodeToEnqueuedScriptConnection','UserToEnqueuedScriptConnection','ContentNodeToEnqueuedScriptConnection','RootQueryToEnqueuedScriptConnection']
    export const isEnqueuedScriptConnection = (obj?: { __typename?: any } | null): obj is EnqueuedScriptConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEnqueuedScriptConnection"')
      return EnqueuedScriptConnection_possibleTypes.includes(obj.__typename)
    }
    


    const EnqueuedScriptConnectionEdge_possibleTypes: string[] = ['TermNodeToEnqueuedScriptConnectionEdge','UserToEnqueuedScriptConnectionEdge','ContentNodeToEnqueuedScriptConnectionEdge','RootQueryToEnqueuedScriptConnectionEdge']
    export const isEnqueuedScriptConnectionEdge = (obj?: { __typename?: any } | null): obj is EnqueuedScriptConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEnqueuedScriptConnectionEdge"')
      return EnqueuedScriptConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const EnqueuedScript_possibleTypes: string[] = ['EnqueuedScript']
    export const isEnqueuedScript = (obj?: { __typename?: any } | null): obj is EnqueuedScript => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEnqueuedScript"')
      return EnqueuedScript_possibleTypes.includes(obj.__typename)
    }
    


    const EnqueuedAsset_possibleTypes: string[] = ['EnqueuedScript','EnqueuedStylesheet']
    export const isEnqueuedAsset = (obj?: { __typename?: any } | null): obj is EnqueuedAsset => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEnqueuedAsset"')
      return EnqueuedAsset_possibleTypes.includes(obj.__typename)
    }
    


    const EnqueuedScriptConnectionPageInfo_possibleTypes: string[] = ['TermNodeToEnqueuedScriptConnectionPageInfo','UserToEnqueuedScriptConnectionPageInfo','ContentNodeToEnqueuedScriptConnectionPageInfo','RootQueryToEnqueuedScriptConnectionPageInfo']
    export const isEnqueuedScriptConnectionPageInfo = (obj?: { __typename?: any } | null): obj is EnqueuedScriptConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEnqueuedScriptConnectionPageInfo"')
      return EnqueuedScriptConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const WPPageInfo_possibleTypes: string[] = ['TermNodeToEnqueuedScriptConnectionPageInfo','TermNodeToEnqueuedStylesheetConnectionPageInfo','CategoryToAncestorsCategoryConnectionPageInfo','CategoryToCategoryConnectionPageInfo','TaxonomyToContentTypeConnectionPageInfo','TaxonomyToTermNodeConnectionPageInfo','ContentTypeToTaxonomyConnectionPageInfo','ContentTypeToContentNodeConnectionPageInfo','CommentToCommentConnectionPageInfo','UserToCommentConnectionPageInfo','UserToEnqueuedScriptConnectionPageInfo','UserToEnqueuedStylesheetConnectionPageInfo','HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo','HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo','ContentNodeToEnqueuedScriptConnectionPageInfo','ContentNodeToEnqueuedStylesheetConnectionPageInfo','MediaItemToCommentConnectionPageInfo','UserToMediaItemConnectionPageInfo','PageToCommentConnectionPageInfo','PageToRevisionConnectionPageInfo','UserToPageConnectionPageInfo','PostToPostConnectionPageInfo','PostToCategoryConnectionPageInfo','PostToCommentConnectionPageInfo','PostFormatToContentNodeConnectionPageInfo','PostFormatToPostConnectionPageInfo','PostToPostFormatConnectionPageInfo','PostToRevisionConnectionPageInfo','TagToContentNodeConnectionPageInfo','TagToPostConnectionPageInfo','PostToTagConnectionPageInfo','PostToTermNodeConnectionPageInfo','UserToPostConnectionPageInfo','UserToRevisionsConnectionPageInfo','UserToUserRoleConnectionPageInfo','CategoryToContentNodeConnectionPageInfo','CategoryToPostConnectionPageInfo','RootQueryToCategoryConnectionPageInfo','RootQueryToCommentConnectionPageInfo','RootQueryToContentNodeConnectionPageInfo','RootQueryToContentTypeConnectionPageInfo','RootQueryToMediaItemConnectionPageInfo','MenuItemToMenuItemConnectionPageInfo','MenuToMenuItemConnectionPageInfo','RootQueryToMenuItemConnectionPageInfo','RootQueryToMenuConnectionPageInfo','RootQueryToPageConnectionPageInfo','RootQueryToPluginConnectionPageInfo','RootQueryToPostFormatConnectionPageInfo','RootQueryToPostConnectionPageInfo','RootQueryToEnqueuedScriptConnectionPageInfo','RootQueryToEnqueuedStylesheetConnectionPageInfo','RootQueryToRevisionsConnectionPageInfo','RootQueryToTagConnectionPageInfo','RootQueryToTaxonomyConnectionPageInfo','RootQueryToTermNodeConnectionPageInfo','RootQueryToThemeConnectionPageInfo','RootQueryToUserRoleConnectionPageInfo','RootQueryToUserConnectionPageInfo']
    export const isWPPageInfo = (obj?: { __typename?: any } | null): obj is WPPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWPPageInfo"')
      return WPPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const TermNodeToEnqueuedScriptConnectionEdge_possibleTypes: string[] = ['TermNodeToEnqueuedScriptConnectionEdge']
    export const isTermNodeToEnqueuedScriptConnectionEdge = (obj?: { __typename?: any } | null): obj is TermNodeToEnqueuedScriptConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTermNodeToEnqueuedScriptConnectionEdge"')
      return TermNodeToEnqueuedScriptConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const TermNodeToEnqueuedScriptConnectionPageInfo_possibleTypes: string[] = ['TermNodeToEnqueuedScriptConnectionPageInfo']
    export const isTermNodeToEnqueuedScriptConnectionPageInfo = (obj?: { __typename?: any } | null): obj is TermNodeToEnqueuedScriptConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTermNodeToEnqueuedScriptConnectionPageInfo"')
      return TermNodeToEnqueuedScriptConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const TermNodeToEnqueuedStylesheetConnection_possibleTypes: string[] = ['TermNodeToEnqueuedStylesheetConnection']
    export const isTermNodeToEnqueuedStylesheetConnection = (obj?: { __typename?: any } | null): obj is TermNodeToEnqueuedStylesheetConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTermNodeToEnqueuedStylesheetConnection"')
      return TermNodeToEnqueuedStylesheetConnection_possibleTypes.includes(obj.__typename)
    }
    


    const EnqueuedStylesheetConnection_possibleTypes: string[] = ['TermNodeToEnqueuedStylesheetConnection','UserToEnqueuedStylesheetConnection','ContentNodeToEnqueuedStylesheetConnection','RootQueryToEnqueuedStylesheetConnection']
    export const isEnqueuedStylesheetConnection = (obj?: { __typename?: any } | null): obj is EnqueuedStylesheetConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEnqueuedStylesheetConnection"')
      return EnqueuedStylesheetConnection_possibleTypes.includes(obj.__typename)
    }
    


    const EnqueuedStylesheetConnectionEdge_possibleTypes: string[] = ['TermNodeToEnqueuedStylesheetConnectionEdge','UserToEnqueuedStylesheetConnectionEdge','ContentNodeToEnqueuedStylesheetConnectionEdge','RootQueryToEnqueuedStylesheetConnectionEdge']
    export const isEnqueuedStylesheetConnectionEdge = (obj?: { __typename?: any } | null): obj is EnqueuedStylesheetConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEnqueuedStylesheetConnectionEdge"')
      return EnqueuedStylesheetConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const EnqueuedStylesheet_possibleTypes: string[] = ['EnqueuedStylesheet']
    export const isEnqueuedStylesheet = (obj?: { __typename?: any } | null): obj is EnqueuedStylesheet => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEnqueuedStylesheet"')
      return EnqueuedStylesheet_possibleTypes.includes(obj.__typename)
    }
    


    const EnqueuedStylesheetConnectionPageInfo_possibleTypes: string[] = ['TermNodeToEnqueuedStylesheetConnectionPageInfo','UserToEnqueuedStylesheetConnectionPageInfo','ContentNodeToEnqueuedStylesheetConnectionPageInfo','RootQueryToEnqueuedStylesheetConnectionPageInfo']
    export const isEnqueuedStylesheetConnectionPageInfo = (obj?: { __typename?: any } | null): obj is EnqueuedStylesheetConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isEnqueuedStylesheetConnectionPageInfo"')
      return EnqueuedStylesheetConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const TermNodeToEnqueuedStylesheetConnectionEdge_possibleTypes: string[] = ['TermNodeToEnqueuedStylesheetConnectionEdge']
    export const isTermNodeToEnqueuedStylesheetConnectionEdge = (obj?: { __typename?: any } | null): obj is TermNodeToEnqueuedStylesheetConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTermNodeToEnqueuedStylesheetConnectionEdge"')
      return TermNodeToEnqueuedStylesheetConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const TermNodeToEnqueuedStylesheetConnectionPageInfo_possibleTypes: string[] = ['TermNodeToEnqueuedStylesheetConnectionPageInfo']
    export const isTermNodeToEnqueuedStylesheetConnectionPageInfo = (obj?: { __typename?: any } | null): obj is TermNodeToEnqueuedStylesheetConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTermNodeToEnqueuedStylesheetConnectionPageInfo"')
      return TermNodeToEnqueuedStylesheetConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const DatabaseIdentifier_possibleTypes: string[] = ['Category','User','Comment','MediaItem','Page','Post','PostFormat','Tag','Menu','MenuItem','CommentAuthor']
    export const isDatabaseIdentifier = (obj?: { __typename?: any } | null): obj is DatabaseIdentifier => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDatabaseIdentifier"')
      return DatabaseIdentifier_possibleTypes.includes(obj.__typename)
    }
    


    const HierarchicalTermNode_possibleTypes: string[] = ['Category']
    export const isHierarchicalTermNode = (obj?: { __typename?: any } | null): obj is HierarchicalTermNode => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isHierarchicalTermNode"')
      return HierarchicalTermNode_possibleTypes.includes(obj.__typename)
    }
    


    const HierarchicalNode_possibleTypes: string[] = ['Category','MediaItem','Page']
    export const isHierarchicalNode = (obj?: { __typename?: any } | null): obj is HierarchicalNode => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isHierarchicalNode"')
      return HierarchicalNode_possibleTypes.includes(obj.__typename)
    }
    


    const MenuItemLinkable_possibleTypes: string[] = ['Category','Page','Post','PostFormat','Tag']
    export const isMenuItemLinkable = (obj?: { __typename?: any } | null): obj is MenuItemLinkable => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMenuItemLinkable"')
      return MenuItemLinkable_possibleTypes.includes(obj.__typename)
    }
    


    const CategoryToAncestorsCategoryConnection_possibleTypes: string[] = ['CategoryToAncestorsCategoryConnection']
    export const isCategoryToAncestorsCategoryConnection = (obj?: { __typename?: any } | null): obj is CategoryToAncestorsCategoryConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCategoryToAncestorsCategoryConnection"')
      return CategoryToAncestorsCategoryConnection_possibleTypes.includes(obj.__typename)
    }
    


    const CategoryToAncestorsCategoryConnectionEdge_possibleTypes: string[] = ['CategoryToAncestorsCategoryConnectionEdge']
    export const isCategoryToAncestorsCategoryConnectionEdge = (obj?: { __typename?: any } | null): obj is CategoryToAncestorsCategoryConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCategoryToAncestorsCategoryConnectionEdge"')
      return CategoryToAncestorsCategoryConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const CategoryToAncestorsCategoryConnectionPageInfo_possibleTypes: string[] = ['CategoryToAncestorsCategoryConnectionPageInfo']
    export const isCategoryToAncestorsCategoryConnectionPageInfo = (obj?: { __typename?: any } | null): obj is CategoryToAncestorsCategoryConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCategoryToAncestorsCategoryConnectionPageInfo"')
      return CategoryToAncestorsCategoryConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const CategoryConnectionPageInfo_possibleTypes: string[] = ['CategoryToAncestorsCategoryConnectionPageInfo','CategoryToCategoryConnectionPageInfo','PostToCategoryConnectionPageInfo','RootQueryToCategoryConnectionPageInfo']
    export const isCategoryConnectionPageInfo = (obj?: { __typename?: any } | null): obj is CategoryConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCategoryConnectionPageInfo"')
      return CategoryConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const CategoryToCategoryConnection_possibleTypes: string[] = ['CategoryToCategoryConnection']
    export const isCategoryToCategoryConnection = (obj?: { __typename?: any } | null): obj is CategoryToCategoryConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCategoryToCategoryConnection"')
      return CategoryToCategoryConnection_possibleTypes.includes(obj.__typename)
    }
    


    const CategoryToCategoryConnectionEdge_possibleTypes: string[] = ['CategoryToCategoryConnectionEdge']
    export const isCategoryToCategoryConnectionEdge = (obj?: { __typename?: any } | null): obj is CategoryToCategoryConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCategoryToCategoryConnectionEdge"')
      return CategoryToCategoryConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const CategoryToCategoryConnectionPageInfo_possibleTypes: string[] = ['CategoryToCategoryConnectionPageInfo']
    export const isCategoryToCategoryConnectionPageInfo = (obj?: { __typename?: any } | null): obj is CategoryToCategoryConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCategoryToCategoryConnectionPageInfo"')
      return CategoryToCategoryConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const CategoryToContentNodeConnection_possibleTypes: string[] = ['CategoryToContentNodeConnection']
    export const isCategoryToContentNodeConnection = (obj?: { __typename?: any } | null): obj is CategoryToContentNodeConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCategoryToContentNodeConnection"')
      return CategoryToContentNodeConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ContentNodeConnection_possibleTypes: string[] = ['CategoryToContentNodeConnection','ContentTypeToContentNodeConnection','HierarchicalContentNodeToContentNodeAncestorsConnection','HierarchicalContentNodeToContentNodeChildrenConnection','PostFormatToContentNodeConnection','TagToContentNodeConnection','UserToRevisionsConnection','RootQueryToContentNodeConnection','RootQueryToRevisionsConnection']
    export const isContentNodeConnection = (obj?: { __typename?: any } | null): obj is ContentNodeConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContentNodeConnection"')
      return ContentNodeConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ContentNodeConnectionEdge_possibleTypes: string[] = ['ContentTypeToContentNodeConnectionEdge','CommentToContentNodeConnectionEdge','HierarchicalContentNodeToContentNodeAncestorsConnectionEdge','HierarchicalContentNodeToContentNodeChildrenConnectionEdge','HierarchicalContentNodeToParentContentNodeConnectionEdge','NodeWithRevisionsToContentNodeConnectionEdge','PostFormatToContentNodeConnectionEdge','TagToContentNodeConnectionEdge','UserToRevisionsConnectionEdge','CategoryToContentNodeConnectionEdge','RootQueryToContentNodeConnectionEdge','RootQueryToRevisionsConnectionEdge']
    export const isContentNodeConnectionEdge = (obj?: { __typename?: any } | null): obj is ContentNodeConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContentNodeConnectionEdge"')
      return ContentNodeConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const ContentNode_possibleTypes: string[] = ['MediaItem','Page','Post']
    export const isContentNode = (obj?: { __typename?: any } | null): obj is ContentNode => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContentNode"')
      return ContentNode_possibleTypes.includes(obj.__typename)
    }
    


    const ContentNodeToContentTypeConnectionEdge_possibleTypes: string[] = ['ContentNodeToContentTypeConnectionEdge']
    export const isContentNodeToContentTypeConnectionEdge = (obj?: { __typename?: any } | null): obj is ContentNodeToContentTypeConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContentNodeToContentTypeConnectionEdge"')
      return ContentNodeToContentTypeConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const OneToOneConnection_possibleTypes: string[] = ['ContentNodeToContentTypeConnectionEdge','ContentNodeToEditLockConnectionEdge','CommentToCommenterConnectionEdge','CommentToContentNodeConnectionEdge','CommentToParentCommentConnectionEdge','NodeWithAuthorToUserConnectionEdge','ContentNodeToEditLastConnectionEdge','HierarchicalContentNodeToParentContentNodeConnectionEdge','NodeWithFeaturedImageToMediaItemConnectionEdge','NodeWithRevisionsToContentNodeConnectionEdge','PageToPreviewConnectionEdge','PostToParentConnectionEdge','PostFormatToTaxonomyConnectionEdge','PostToPreviewConnectionEdge','TagToTaxonomyConnectionEdge','CategoryToParentCategoryConnectionEdge','CategoryToTaxonomyConnectionEdge','MenuItemToMenuItemLinkableConnectionEdge','MenuItemToMenuConnectionEdge','AcfMediaItemConnectionEdge']
    export const isOneToOneConnection = (obj?: { __typename?: any } | null): obj is OneToOneConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOneToOneConnection"')
      return OneToOneConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ContentTypeConnectionEdge_possibleTypes: string[] = ['ContentNodeToContentTypeConnectionEdge','TaxonomyToContentTypeConnectionEdge','RootQueryToContentTypeConnectionEdge']
    export const isContentTypeConnectionEdge = (obj?: { __typename?: any } | null): obj is ContentTypeConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContentTypeConnectionEdge"')
      return ContentTypeConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const ContentType_possibleTypes: string[] = ['ContentType']
    export const isContentType = (obj?: { __typename?: any } | null): obj is ContentType => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContentType"')
      return ContentType_possibleTypes.includes(obj.__typename)
    }
    


    const ContentTypeToTaxonomyConnection_possibleTypes: string[] = ['ContentTypeToTaxonomyConnection']
    export const isContentTypeToTaxonomyConnection = (obj?: { __typename?: any } | null): obj is ContentTypeToTaxonomyConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContentTypeToTaxonomyConnection"')
      return ContentTypeToTaxonomyConnection_possibleTypes.includes(obj.__typename)
    }
    


    const TaxonomyConnection_possibleTypes: string[] = ['ContentTypeToTaxonomyConnection','RootQueryToTaxonomyConnection']
    export const isTaxonomyConnection = (obj?: { __typename?: any } | null): obj is TaxonomyConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTaxonomyConnection"')
      return TaxonomyConnection_possibleTypes.includes(obj.__typename)
    }
    


    const TaxonomyConnectionEdge_possibleTypes: string[] = ['ContentTypeToTaxonomyConnectionEdge','PostFormatToTaxonomyConnectionEdge','TagToTaxonomyConnectionEdge','CategoryToTaxonomyConnectionEdge','RootQueryToTaxonomyConnectionEdge']
    export const isTaxonomyConnectionEdge = (obj?: { __typename?: any } | null): obj is TaxonomyConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTaxonomyConnectionEdge"')
      return TaxonomyConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const Taxonomy_possibleTypes: string[] = ['Taxonomy']
    export const isTaxonomy = (obj?: { __typename?: any } | null): obj is Taxonomy => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTaxonomy"')
      return Taxonomy_possibleTypes.includes(obj.__typename)
    }
    


    const TaxonomyToContentTypeConnection_possibleTypes: string[] = ['TaxonomyToContentTypeConnection']
    export const isTaxonomyToContentTypeConnection = (obj?: { __typename?: any } | null): obj is TaxonomyToContentTypeConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTaxonomyToContentTypeConnection"')
      return TaxonomyToContentTypeConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ContentTypeConnection_possibleTypes: string[] = ['TaxonomyToContentTypeConnection','RootQueryToContentTypeConnection']
    export const isContentTypeConnection = (obj?: { __typename?: any } | null): obj is ContentTypeConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContentTypeConnection"')
      return ContentTypeConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ContentTypeConnectionPageInfo_possibleTypes: string[] = ['TaxonomyToContentTypeConnectionPageInfo','RootQueryToContentTypeConnectionPageInfo']
    export const isContentTypeConnectionPageInfo = (obj?: { __typename?: any } | null): obj is ContentTypeConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContentTypeConnectionPageInfo"')
      return ContentTypeConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const TaxonomyToContentTypeConnectionEdge_possibleTypes: string[] = ['TaxonomyToContentTypeConnectionEdge']
    export const isTaxonomyToContentTypeConnectionEdge = (obj?: { __typename?: any } | null): obj is TaxonomyToContentTypeConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTaxonomyToContentTypeConnectionEdge"')
      return TaxonomyToContentTypeConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const TaxonomyToContentTypeConnectionPageInfo_possibleTypes: string[] = ['TaxonomyToContentTypeConnectionPageInfo']
    export const isTaxonomyToContentTypeConnectionPageInfo = (obj?: { __typename?: any } | null): obj is TaxonomyToContentTypeConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTaxonomyToContentTypeConnectionPageInfo"')
      return TaxonomyToContentTypeConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const TaxonomyToTermNodeConnection_possibleTypes: string[] = ['TaxonomyToTermNodeConnection']
    export const isTaxonomyToTermNodeConnection = (obj?: { __typename?: any } | null): obj is TaxonomyToTermNodeConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTaxonomyToTermNodeConnection"')
      return TaxonomyToTermNodeConnection_possibleTypes.includes(obj.__typename)
    }
    


    const TermNodeConnection_possibleTypes: string[] = ['TaxonomyToTermNodeConnection','PostToTermNodeConnection','RootQueryToTermNodeConnection']
    export const isTermNodeConnection = (obj?: { __typename?: any } | null): obj is TermNodeConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTermNodeConnection"')
      return TermNodeConnection_possibleTypes.includes(obj.__typename)
    }
    


    const TermNodeConnectionEdge_possibleTypes: string[] = ['TaxonomyToTermNodeConnectionEdge','PostToTermNodeConnectionEdge','RootQueryToTermNodeConnectionEdge']
    export const isTermNodeConnectionEdge = (obj?: { __typename?: any } | null): obj is TermNodeConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTermNodeConnectionEdge"')
      return TermNodeConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const TermNodeConnectionPageInfo_possibleTypes: string[] = ['TaxonomyToTermNodeConnectionPageInfo','PostToTermNodeConnectionPageInfo','RootQueryToTermNodeConnectionPageInfo']
    export const isTermNodeConnectionPageInfo = (obj?: { __typename?: any } | null): obj is TermNodeConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTermNodeConnectionPageInfo"')
      return TermNodeConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const TaxonomyToTermNodeConnectionEdge_possibleTypes: string[] = ['TaxonomyToTermNodeConnectionEdge']
    export const isTaxonomyToTermNodeConnectionEdge = (obj?: { __typename?: any } | null): obj is TaxonomyToTermNodeConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTaxonomyToTermNodeConnectionEdge"')
      return TaxonomyToTermNodeConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const TaxonomyToTermNodeConnectionPageInfo_possibleTypes: string[] = ['TaxonomyToTermNodeConnectionPageInfo']
    export const isTaxonomyToTermNodeConnectionPageInfo = (obj?: { __typename?: any } | null): obj is TaxonomyToTermNodeConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTaxonomyToTermNodeConnectionPageInfo"')
      return TaxonomyToTermNodeConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const TaxonomyConnectionPageInfo_possibleTypes: string[] = ['ContentTypeToTaxonomyConnectionPageInfo','RootQueryToTaxonomyConnectionPageInfo']
    export const isTaxonomyConnectionPageInfo = (obj?: { __typename?: any } | null): obj is TaxonomyConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTaxonomyConnectionPageInfo"')
      return TaxonomyConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const ContentTypeToTaxonomyConnectionEdge_possibleTypes: string[] = ['ContentTypeToTaxonomyConnectionEdge']
    export const isContentTypeToTaxonomyConnectionEdge = (obj?: { __typename?: any } | null): obj is ContentTypeToTaxonomyConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContentTypeToTaxonomyConnectionEdge"')
      return ContentTypeToTaxonomyConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const ContentTypeToTaxonomyConnectionPageInfo_possibleTypes: string[] = ['ContentTypeToTaxonomyConnectionPageInfo']
    export const isContentTypeToTaxonomyConnectionPageInfo = (obj?: { __typename?: any } | null): obj is ContentTypeToTaxonomyConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContentTypeToTaxonomyConnectionPageInfo"')
      return ContentTypeToTaxonomyConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const ContentTypeToContentNodeConnection_possibleTypes: string[] = ['ContentTypeToContentNodeConnection']
    export const isContentTypeToContentNodeConnection = (obj?: { __typename?: any } | null): obj is ContentTypeToContentNodeConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContentTypeToContentNodeConnection"')
      return ContentTypeToContentNodeConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ContentTypeToContentNodeConnectionEdge_possibleTypes: string[] = ['ContentTypeToContentNodeConnectionEdge']
    export const isContentTypeToContentNodeConnectionEdge = (obj?: { __typename?: any } | null): obj is ContentTypeToContentNodeConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContentTypeToContentNodeConnectionEdge"')
      return ContentTypeToContentNodeConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const ContentTypeToContentNodeConnectionPageInfo_possibleTypes: string[] = ['ContentTypeToContentNodeConnectionPageInfo']
    export const isContentTypeToContentNodeConnectionPageInfo = (obj?: { __typename?: any } | null): obj is ContentTypeToContentNodeConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContentTypeToContentNodeConnectionPageInfo"')
      return ContentTypeToContentNodeConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const ContentNodeConnectionPageInfo_possibleTypes: string[] = ['ContentTypeToContentNodeConnectionPageInfo','HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo','HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo','PostFormatToContentNodeConnectionPageInfo','TagToContentNodeConnectionPageInfo','UserToRevisionsConnectionPageInfo','CategoryToContentNodeConnectionPageInfo','RootQueryToContentNodeConnectionPageInfo','RootQueryToRevisionsConnectionPageInfo']
    export const isContentNodeConnectionPageInfo = (obj?: { __typename?: any } | null): obj is ContentNodeConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContentNodeConnectionPageInfo"')
      return ContentNodeConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const PostTypeLabelDetails_possibleTypes: string[] = ['PostTypeLabelDetails']
    export const isPostTypeLabelDetails = (obj?: { __typename?: any } | null): obj is PostTypeLabelDetails => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPostTypeLabelDetails"')
      return PostTypeLabelDetails_possibleTypes.includes(obj.__typename)
    }
    


    const ContentNodeToEditLockConnectionEdge_possibleTypes: string[] = ['ContentNodeToEditLockConnectionEdge']
    export const isContentNodeToEditLockConnectionEdge = (obj?: { __typename?: any } | null): obj is ContentNodeToEditLockConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContentNodeToEditLockConnectionEdge"')
      return ContentNodeToEditLockConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const UserConnectionEdge_possibleTypes: string[] = ['ContentNodeToEditLockConnectionEdge','NodeWithAuthorToUserConnectionEdge','ContentNodeToEditLastConnectionEdge','RootQueryToUserConnectionEdge']
    export const isUserConnectionEdge = (obj?: { __typename?: any } | null): obj is UserConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserConnectionEdge"')
      return UserConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const User_possibleTypes: string[] = ['User']
    export const isUser = (obj?: { __typename?: any } | null): obj is User => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUser"')
      return User_possibleTypes.includes(obj.__typename)
    }
    


    const Commenter_possibleTypes: string[] = ['User','CommentAuthor']
    export const isCommenter = (obj?: { __typename?: any } | null): obj is Commenter => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCommenter"')
      return Commenter_possibleTypes.includes(obj.__typename)
    }
    


    const Avatar_possibleTypes: string[] = ['Avatar']
    export const isAvatar = (obj?: { __typename?: any } | null): obj is Avatar => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAvatar"')
      return Avatar_possibleTypes.includes(obj.__typename)
    }
    


    const UserToCommentConnection_possibleTypes: string[] = ['UserToCommentConnection']
    export const isUserToCommentConnection = (obj?: { __typename?: any } | null): obj is UserToCommentConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserToCommentConnection"')
      return UserToCommentConnection_possibleTypes.includes(obj.__typename)
    }
    


    const CommentConnection_possibleTypes: string[] = ['UserToCommentConnection','CommentToCommentConnection','MediaItemToCommentConnection','PageToCommentConnection','PostToCommentConnection','RootQueryToCommentConnection']
    export const isCommentConnection = (obj?: { __typename?: any } | null): obj is CommentConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCommentConnection"')
      return CommentConnection_possibleTypes.includes(obj.__typename)
    }
    


    const CommentConnectionEdge_possibleTypes: string[] = ['CommentToParentCommentConnectionEdge','CommentToCommentConnectionEdge','UserToCommentConnectionEdge','MediaItemToCommentConnectionEdge','PageToCommentConnectionEdge','PostToCommentConnectionEdge','RootQueryToCommentConnectionEdge']
    export const isCommentConnectionEdge = (obj?: { __typename?: any } | null): obj is CommentConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCommentConnectionEdge"')
      return CommentConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const Comment_possibleTypes: string[] = ['Comment']
    export const isComment = (obj?: { __typename?: any } | null): obj is Comment => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isComment"')
      return Comment_possibleTypes.includes(obj.__typename)
    }
    


    const CommentToCommenterConnectionEdge_possibleTypes: string[] = ['CommentToCommenterConnectionEdge']
    export const isCommentToCommenterConnectionEdge = (obj?: { __typename?: any } | null): obj is CommentToCommenterConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCommentToCommenterConnectionEdge"')
      return CommentToCommenterConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const CommenterConnectionEdge_possibleTypes: string[] = ['CommentToCommenterConnectionEdge']
    export const isCommenterConnectionEdge = (obj?: { __typename?: any } | null): obj is CommenterConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCommenterConnectionEdge"')
      return CommenterConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const CommentToContentNodeConnectionEdge_possibleTypes: string[] = ['CommentToContentNodeConnectionEdge']
    export const isCommentToContentNodeConnectionEdge = (obj?: { __typename?: any } | null): obj is CommentToContentNodeConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCommentToContentNodeConnectionEdge"')
      return CommentToContentNodeConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const CommentToParentCommentConnectionEdge_possibleTypes: string[] = ['CommentToParentCommentConnectionEdge']
    export const isCommentToParentCommentConnectionEdge = (obj?: { __typename?: any } | null): obj is CommentToParentCommentConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCommentToParentCommentConnectionEdge"')
      return CommentToParentCommentConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const CommentToCommentConnection_possibleTypes: string[] = ['CommentToCommentConnection']
    export const isCommentToCommentConnection = (obj?: { __typename?: any } | null): obj is CommentToCommentConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCommentToCommentConnection"')
      return CommentToCommentConnection_possibleTypes.includes(obj.__typename)
    }
    


    const CommentToCommentConnectionEdge_possibleTypes: string[] = ['CommentToCommentConnectionEdge']
    export const isCommentToCommentConnectionEdge = (obj?: { __typename?: any } | null): obj is CommentToCommentConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCommentToCommentConnectionEdge"')
      return CommentToCommentConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const CommentToCommentConnectionPageInfo_possibleTypes: string[] = ['CommentToCommentConnectionPageInfo']
    export const isCommentToCommentConnectionPageInfo = (obj?: { __typename?: any } | null): obj is CommentToCommentConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCommentToCommentConnectionPageInfo"')
      return CommentToCommentConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const CommentConnectionPageInfo_possibleTypes: string[] = ['CommentToCommentConnectionPageInfo','UserToCommentConnectionPageInfo','MediaItemToCommentConnectionPageInfo','PageToCommentConnectionPageInfo','PostToCommentConnectionPageInfo','RootQueryToCommentConnectionPageInfo']
    export const isCommentConnectionPageInfo = (obj?: { __typename?: any } | null): obj is CommentConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCommentConnectionPageInfo"')
      return CommentConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const UserToCommentConnectionEdge_possibleTypes: string[] = ['UserToCommentConnectionEdge']
    export const isUserToCommentConnectionEdge = (obj?: { __typename?: any } | null): obj is UserToCommentConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserToCommentConnectionEdge"')
      return UserToCommentConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const UserToCommentConnectionPageInfo_possibleTypes: string[] = ['UserToCommentConnectionPageInfo']
    export const isUserToCommentConnectionPageInfo = (obj?: { __typename?: any } | null): obj is UserToCommentConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserToCommentConnectionPageInfo"')
      return UserToCommentConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const UserToEnqueuedScriptConnection_possibleTypes: string[] = ['UserToEnqueuedScriptConnection']
    export const isUserToEnqueuedScriptConnection = (obj?: { __typename?: any } | null): obj is UserToEnqueuedScriptConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserToEnqueuedScriptConnection"')
      return UserToEnqueuedScriptConnection_possibleTypes.includes(obj.__typename)
    }
    


    const UserToEnqueuedScriptConnectionEdge_possibleTypes: string[] = ['UserToEnqueuedScriptConnectionEdge']
    export const isUserToEnqueuedScriptConnectionEdge = (obj?: { __typename?: any } | null): obj is UserToEnqueuedScriptConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserToEnqueuedScriptConnectionEdge"')
      return UserToEnqueuedScriptConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const UserToEnqueuedScriptConnectionPageInfo_possibleTypes: string[] = ['UserToEnqueuedScriptConnectionPageInfo']
    export const isUserToEnqueuedScriptConnectionPageInfo = (obj?: { __typename?: any } | null): obj is UserToEnqueuedScriptConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserToEnqueuedScriptConnectionPageInfo"')
      return UserToEnqueuedScriptConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const UserToEnqueuedStylesheetConnection_possibleTypes: string[] = ['UserToEnqueuedStylesheetConnection']
    export const isUserToEnqueuedStylesheetConnection = (obj?: { __typename?: any } | null): obj is UserToEnqueuedStylesheetConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserToEnqueuedStylesheetConnection"')
      return UserToEnqueuedStylesheetConnection_possibleTypes.includes(obj.__typename)
    }
    


    const UserToEnqueuedStylesheetConnectionEdge_possibleTypes: string[] = ['UserToEnqueuedStylesheetConnectionEdge']
    export const isUserToEnqueuedStylesheetConnectionEdge = (obj?: { __typename?: any } | null): obj is UserToEnqueuedStylesheetConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserToEnqueuedStylesheetConnectionEdge"')
      return UserToEnqueuedStylesheetConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const UserToEnqueuedStylesheetConnectionPageInfo_possibleTypes: string[] = ['UserToEnqueuedStylesheetConnectionPageInfo']
    export const isUserToEnqueuedStylesheetConnectionPageInfo = (obj?: { __typename?: any } | null): obj is UserToEnqueuedStylesheetConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserToEnqueuedStylesheetConnectionPageInfo"')
      return UserToEnqueuedStylesheetConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const UserToMediaItemConnection_possibleTypes: string[] = ['UserToMediaItemConnection']
    export const isUserToMediaItemConnection = (obj?: { __typename?: any } | null): obj is UserToMediaItemConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserToMediaItemConnection"')
      return UserToMediaItemConnection_possibleTypes.includes(obj.__typename)
    }
    


    const MediaItemConnection_possibleTypes: string[] = ['UserToMediaItemConnection','RootQueryToMediaItemConnection']
    export const isMediaItemConnection = (obj?: { __typename?: any } | null): obj is MediaItemConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaItemConnection"')
      return MediaItemConnection_possibleTypes.includes(obj.__typename)
    }
    


    const MediaItemConnectionEdge_possibleTypes: string[] = ['UserToMediaItemConnectionEdge','NodeWithFeaturedImageToMediaItemConnectionEdge','RootQueryToMediaItemConnectionEdge','AcfMediaItemConnectionEdge']
    export const isMediaItemConnectionEdge = (obj?: { __typename?: any } | null): obj is MediaItemConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaItemConnectionEdge"')
      return MediaItemConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const MediaItem_possibleTypes: string[] = ['MediaItem']
    export const isMediaItem = (obj?: { __typename?: any } | null): obj is MediaItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaItem"')
      return MediaItem_possibleTypes.includes(obj.__typename)
    }
    


    const NodeWithTemplate_possibleTypes: string[] = ['MediaItem','Page','Post']
    export const isNodeWithTemplate = (obj?: { __typename?: any } | null): obj is NodeWithTemplate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNodeWithTemplate"')
      return NodeWithTemplate_possibleTypes.includes(obj.__typename)
    }
    


    const ContentTemplate_possibleTypes: string[] = ['DefaultTemplate']
    export const isContentTemplate = (obj?: { __typename?: any } | null): obj is ContentTemplate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContentTemplate"')
      return ContentTemplate_possibleTypes.includes(obj.__typename)
    }
    


    const NodeWithTitle_possibleTypes: string[] = ['MediaItem','Page','Post']
    export const isNodeWithTitle = (obj?: { __typename?: any } | null): obj is NodeWithTitle => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNodeWithTitle"')
      return NodeWithTitle_possibleTypes.includes(obj.__typename)
    }
    


    const NodeWithAuthor_possibleTypes: string[] = ['MediaItem','Page','Post']
    export const isNodeWithAuthor = (obj?: { __typename?: any } | null): obj is NodeWithAuthor => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNodeWithAuthor"')
      return NodeWithAuthor_possibleTypes.includes(obj.__typename)
    }
    


    const NodeWithAuthorToUserConnectionEdge_possibleTypes: string[] = ['NodeWithAuthorToUserConnectionEdge']
    export const isNodeWithAuthorToUserConnectionEdge = (obj?: { __typename?: any } | null): obj is NodeWithAuthorToUserConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNodeWithAuthorToUserConnectionEdge"')
      return NodeWithAuthorToUserConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const NodeWithComments_possibleTypes: string[] = ['MediaItem','Page','Post']
    export const isNodeWithComments = (obj?: { __typename?: any } | null): obj is NodeWithComments => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNodeWithComments"')
      return NodeWithComments_possibleTypes.includes(obj.__typename)
    }
    


    const HierarchicalContentNode_possibleTypes: string[] = ['MediaItem','Page']
    export const isHierarchicalContentNode = (obj?: { __typename?: any } | null): obj is HierarchicalContentNode => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isHierarchicalContentNode"')
      return HierarchicalContentNode_possibleTypes.includes(obj.__typename)
    }
    


    const HierarchicalContentNodeToContentNodeAncestorsConnection_possibleTypes: string[] = ['HierarchicalContentNodeToContentNodeAncestorsConnection']
    export const isHierarchicalContentNodeToContentNodeAncestorsConnection = (obj?: { __typename?: any } | null): obj is HierarchicalContentNodeToContentNodeAncestorsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isHierarchicalContentNodeToContentNodeAncestorsConnection"')
      return HierarchicalContentNodeToContentNodeAncestorsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const HierarchicalContentNodeToContentNodeAncestorsConnectionEdge_possibleTypes: string[] = ['HierarchicalContentNodeToContentNodeAncestorsConnectionEdge']
    export const isHierarchicalContentNodeToContentNodeAncestorsConnectionEdge = (obj?: { __typename?: any } | null): obj is HierarchicalContentNodeToContentNodeAncestorsConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isHierarchicalContentNodeToContentNodeAncestorsConnectionEdge"')
      return HierarchicalContentNodeToContentNodeAncestorsConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo_possibleTypes: string[] = ['HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo']
    export const isHierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo = (obj?: { __typename?: any } | null): obj is HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isHierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo"')
      return HierarchicalContentNodeToContentNodeAncestorsConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const HierarchicalContentNodeToContentNodeChildrenConnection_possibleTypes: string[] = ['HierarchicalContentNodeToContentNodeChildrenConnection']
    export const isHierarchicalContentNodeToContentNodeChildrenConnection = (obj?: { __typename?: any } | null): obj is HierarchicalContentNodeToContentNodeChildrenConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isHierarchicalContentNodeToContentNodeChildrenConnection"')
      return HierarchicalContentNodeToContentNodeChildrenConnection_possibleTypes.includes(obj.__typename)
    }
    


    const HierarchicalContentNodeToContentNodeChildrenConnectionEdge_possibleTypes: string[] = ['HierarchicalContentNodeToContentNodeChildrenConnectionEdge']
    export const isHierarchicalContentNodeToContentNodeChildrenConnectionEdge = (obj?: { __typename?: any } | null): obj is HierarchicalContentNodeToContentNodeChildrenConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isHierarchicalContentNodeToContentNodeChildrenConnectionEdge"')
      return HierarchicalContentNodeToContentNodeChildrenConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo_possibleTypes: string[] = ['HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo']
    export const isHierarchicalContentNodeToContentNodeChildrenConnectionPageInfo = (obj?: { __typename?: any } | null): obj is HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isHierarchicalContentNodeToContentNodeChildrenConnectionPageInfo"')
      return HierarchicalContentNodeToContentNodeChildrenConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const ContentNodeToEnqueuedScriptConnection_possibleTypes: string[] = ['ContentNodeToEnqueuedScriptConnection']
    export const isContentNodeToEnqueuedScriptConnection = (obj?: { __typename?: any } | null): obj is ContentNodeToEnqueuedScriptConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContentNodeToEnqueuedScriptConnection"')
      return ContentNodeToEnqueuedScriptConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ContentNodeToEnqueuedScriptConnectionEdge_possibleTypes: string[] = ['ContentNodeToEnqueuedScriptConnectionEdge']
    export const isContentNodeToEnqueuedScriptConnectionEdge = (obj?: { __typename?: any } | null): obj is ContentNodeToEnqueuedScriptConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContentNodeToEnqueuedScriptConnectionEdge"')
      return ContentNodeToEnqueuedScriptConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const ContentNodeToEnqueuedScriptConnectionPageInfo_possibleTypes: string[] = ['ContentNodeToEnqueuedScriptConnectionPageInfo']
    export const isContentNodeToEnqueuedScriptConnectionPageInfo = (obj?: { __typename?: any } | null): obj is ContentNodeToEnqueuedScriptConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContentNodeToEnqueuedScriptConnectionPageInfo"')
      return ContentNodeToEnqueuedScriptConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const ContentNodeToEnqueuedStylesheetConnection_possibleTypes: string[] = ['ContentNodeToEnqueuedStylesheetConnection']
    export const isContentNodeToEnqueuedStylesheetConnection = (obj?: { __typename?: any } | null): obj is ContentNodeToEnqueuedStylesheetConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContentNodeToEnqueuedStylesheetConnection"')
      return ContentNodeToEnqueuedStylesheetConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ContentNodeToEnqueuedStylesheetConnectionEdge_possibleTypes: string[] = ['ContentNodeToEnqueuedStylesheetConnectionEdge']
    export const isContentNodeToEnqueuedStylesheetConnectionEdge = (obj?: { __typename?: any } | null): obj is ContentNodeToEnqueuedStylesheetConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContentNodeToEnqueuedStylesheetConnectionEdge"')
      return ContentNodeToEnqueuedStylesheetConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const ContentNodeToEnqueuedStylesheetConnectionPageInfo_possibleTypes: string[] = ['ContentNodeToEnqueuedStylesheetConnectionPageInfo']
    export const isContentNodeToEnqueuedStylesheetConnectionPageInfo = (obj?: { __typename?: any } | null): obj is ContentNodeToEnqueuedStylesheetConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContentNodeToEnqueuedStylesheetConnectionPageInfo"')
      return ContentNodeToEnqueuedStylesheetConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const ContentNodeToEditLastConnectionEdge_possibleTypes: string[] = ['ContentNodeToEditLastConnectionEdge']
    export const isContentNodeToEditLastConnectionEdge = (obj?: { __typename?: any } | null): obj is ContentNodeToEditLastConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isContentNodeToEditLastConnectionEdge"')
      return ContentNodeToEditLastConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const HierarchicalContentNodeToParentContentNodeConnectionEdge_possibleTypes: string[] = ['HierarchicalContentNodeToParentContentNodeConnectionEdge']
    export const isHierarchicalContentNodeToParentContentNodeConnectionEdge = (obj?: { __typename?: any } | null): obj is HierarchicalContentNodeToParentContentNodeConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isHierarchicalContentNodeToParentContentNodeConnectionEdge"')
      return HierarchicalContentNodeToParentContentNodeConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const MediaItemToCommentConnection_possibleTypes: string[] = ['MediaItemToCommentConnection']
    export const isMediaItemToCommentConnection = (obj?: { __typename?: any } | null): obj is MediaItemToCommentConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaItemToCommentConnection"')
      return MediaItemToCommentConnection_possibleTypes.includes(obj.__typename)
    }
    


    const MediaItemToCommentConnectionEdge_possibleTypes: string[] = ['MediaItemToCommentConnectionEdge']
    export const isMediaItemToCommentConnectionEdge = (obj?: { __typename?: any } | null): obj is MediaItemToCommentConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaItemToCommentConnectionEdge"')
      return MediaItemToCommentConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const MediaItemToCommentConnectionPageInfo_possibleTypes: string[] = ['MediaItemToCommentConnectionPageInfo']
    export const isMediaItemToCommentConnectionPageInfo = (obj?: { __typename?: any } | null): obj is MediaItemToCommentConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaItemToCommentConnectionPageInfo"')
      return MediaItemToCommentConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const MediaDetails_possibleTypes: string[] = ['MediaDetails']
    export const isMediaDetails = (obj?: { __typename?: any } | null): obj is MediaDetails => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaDetails"')
      return MediaDetails_possibleTypes.includes(obj.__typename)
    }
    


    const MediaItemMeta_possibleTypes: string[] = ['MediaItemMeta']
    export const isMediaItemMeta = (obj?: { __typename?: any } | null): obj is MediaItemMeta => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaItemMeta"')
      return MediaItemMeta_possibleTypes.includes(obj.__typename)
    }
    


    const MediaSize_possibleTypes: string[] = ['MediaSize']
    export const isMediaSize = (obj?: { __typename?: any } | null): obj is MediaSize => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaSize"')
      return MediaSize_possibleTypes.includes(obj.__typename)
    }
    


    const MediaItemConnectionPageInfo_possibleTypes: string[] = ['UserToMediaItemConnectionPageInfo','RootQueryToMediaItemConnectionPageInfo']
    export const isMediaItemConnectionPageInfo = (obj?: { __typename?: any } | null): obj is MediaItemConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMediaItemConnectionPageInfo"')
      return MediaItemConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const UserToMediaItemConnectionEdge_possibleTypes: string[] = ['UserToMediaItemConnectionEdge']
    export const isUserToMediaItemConnectionEdge = (obj?: { __typename?: any } | null): obj is UserToMediaItemConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserToMediaItemConnectionEdge"')
      return UserToMediaItemConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const UserToMediaItemConnectionPageInfo_possibleTypes: string[] = ['UserToMediaItemConnectionPageInfo']
    export const isUserToMediaItemConnectionPageInfo = (obj?: { __typename?: any } | null): obj is UserToMediaItemConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserToMediaItemConnectionPageInfo"')
      return UserToMediaItemConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const UserToPageConnection_possibleTypes: string[] = ['UserToPageConnection']
    export const isUserToPageConnection = (obj?: { __typename?: any } | null): obj is UserToPageConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserToPageConnection"')
      return UserToPageConnection_possibleTypes.includes(obj.__typename)
    }
    


    const PageConnection_possibleTypes: string[] = ['UserToPageConnection','PageToRevisionConnection','RootQueryToPageConnection']
    export const isPageConnection = (obj?: { __typename?: any } | null): obj is PageConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPageConnection"')
      return PageConnection_possibleTypes.includes(obj.__typename)
    }
    


    const PageConnectionEdge_possibleTypes: string[] = ['PageToPreviewConnectionEdge','PageToRevisionConnectionEdge','UserToPageConnectionEdge','RootQueryToPageConnectionEdge']
    export const isPageConnectionEdge = (obj?: { __typename?: any } | null): obj is PageConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPageConnectionEdge"')
      return PageConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const Page_possibleTypes: string[] = ['Page']
    export const isPage = (obj?: { __typename?: any } | null): obj is Page => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPage"')
      return Page_possibleTypes.includes(obj.__typename)
    }
    


    const Previewable_possibleTypes: string[] = ['Page','Post']
    export const isPreviewable = (obj?: { __typename?: any } | null): obj is Previewable => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPreviewable"')
      return Previewable_possibleTypes.includes(obj.__typename)
    }
    


    const NodeWithContentEditor_possibleTypes: string[] = ['Page','Post']
    export const isNodeWithContentEditor = (obj?: { __typename?: any } | null): obj is NodeWithContentEditor => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNodeWithContentEditor"')
      return NodeWithContentEditor_possibleTypes.includes(obj.__typename)
    }
    


    const NodeWithFeaturedImage_possibleTypes: string[] = ['Page','Post']
    export const isNodeWithFeaturedImage = (obj?: { __typename?: any } | null): obj is NodeWithFeaturedImage => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNodeWithFeaturedImage"')
      return NodeWithFeaturedImage_possibleTypes.includes(obj.__typename)
    }
    


    const NodeWithFeaturedImageToMediaItemConnectionEdge_possibleTypes: string[] = ['NodeWithFeaturedImageToMediaItemConnectionEdge']
    export const isNodeWithFeaturedImageToMediaItemConnectionEdge = (obj?: { __typename?: any } | null): obj is NodeWithFeaturedImageToMediaItemConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNodeWithFeaturedImageToMediaItemConnectionEdge"')
      return NodeWithFeaturedImageToMediaItemConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const NodeWithExcerpt_possibleTypes: string[] = ['Page','Post']
    export const isNodeWithExcerpt = (obj?: { __typename?: any } | null): obj is NodeWithExcerpt => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNodeWithExcerpt"')
      return NodeWithExcerpt_possibleTypes.includes(obj.__typename)
    }
    


    const NodeWithRevisions_possibleTypes: string[] = ['Page','Post']
    export const isNodeWithRevisions = (obj?: { __typename?: any } | null): obj is NodeWithRevisions => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNodeWithRevisions"')
      return NodeWithRevisions_possibleTypes.includes(obj.__typename)
    }
    


    const NodeWithRevisionsToContentNodeConnectionEdge_possibleTypes: string[] = ['NodeWithRevisionsToContentNodeConnectionEdge']
    export const isNodeWithRevisionsToContentNodeConnectionEdge = (obj?: { __typename?: any } | null): obj is NodeWithRevisionsToContentNodeConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNodeWithRevisionsToContentNodeConnectionEdge"')
      return NodeWithRevisionsToContentNodeConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const NodeWithPageAttributes_possibleTypes: string[] = ['Page']
    export const isNodeWithPageAttributes = (obj?: { __typename?: any } | null): obj is NodeWithPageAttributes => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNodeWithPageAttributes"')
      return NodeWithPageAttributes_possibleTypes.includes(obj.__typename)
    }
    


    const PageToCommentConnection_possibleTypes: string[] = ['PageToCommentConnection']
    export const isPageToCommentConnection = (obj?: { __typename?: any } | null): obj is PageToCommentConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPageToCommentConnection"')
      return PageToCommentConnection_possibleTypes.includes(obj.__typename)
    }
    


    const PageToCommentConnectionEdge_possibleTypes: string[] = ['PageToCommentConnectionEdge']
    export const isPageToCommentConnectionEdge = (obj?: { __typename?: any } | null): obj is PageToCommentConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPageToCommentConnectionEdge"')
      return PageToCommentConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const PageToCommentConnectionPageInfo_possibleTypes: string[] = ['PageToCommentConnectionPageInfo']
    export const isPageToCommentConnectionPageInfo = (obj?: { __typename?: any } | null): obj is PageToCommentConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPageToCommentConnectionPageInfo"')
      return PageToCommentConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const PageToPreviewConnectionEdge_possibleTypes: string[] = ['PageToPreviewConnectionEdge']
    export const isPageToPreviewConnectionEdge = (obj?: { __typename?: any } | null): obj is PageToPreviewConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPageToPreviewConnectionEdge"')
      return PageToPreviewConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const PageToRevisionConnection_possibleTypes: string[] = ['PageToRevisionConnection']
    export const isPageToRevisionConnection = (obj?: { __typename?: any } | null): obj is PageToRevisionConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPageToRevisionConnection"')
      return PageToRevisionConnection_possibleTypes.includes(obj.__typename)
    }
    


    const PageToRevisionConnectionEdge_possibleTypes: string[] = ['PageToRevisionConnectionEdge']
    export const isPageToRevisionConnectionEdge = (obj?: { __typename?: any } | null): obj is PageToRevisionConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPageToRevisionConnectionEdge"')
      return PageToRevisionConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const PageToRevisionConnectionPageInfo_possibleTypes: string[] = ['PageToRevisionConnectionPageInfo']
    export const isPageToRevisionConnectionPageInfo = (obj?: { __typename?: any } | null): obj is PageToRevisionConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPageToRevisionConnectionPageInfo"')
      return PageToRevisionConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const PageConnectionPageInfo_possibleTypes: string[] = ['PageToRevisionConnectionPageInfo','UserToPageConnectionPageInfo','RootQueryToPageConnectionPageInfo']
    export const isPageConnectionPageInfo = (obj?: { __typename?: any } | null): obj is PageConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPageConnectionPageInfo"')
      return PageConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const UserToPageConnectionEdge_possibleTypes: string[] = ['UserToPageConnectionEdge']
    export const isUserToPageConnectionEdge = (obj?: { __typename?: any } | null): obj is UserToPageConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserToPageConnectionEdge"')
      return UserToPageConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const UserToPageConnectionPageInfo_possibleTypes: string[] = ['UserToPageConnectionPageInfo']
    export const isUserToPageConnectionPageInfo = (obj?: { __typename?: any } | null): obj is UserToPageConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserToPageConnectionPageInfo"')
      return UserToPageConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const UserToPostConnection_possibleTypes: string[] = ['UserToPostConnection']
    export const isUserToPostConnection = (obj?: { __typename?: any } | null): obj is UserToPostConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserToPostConnection"')
      return UserToPostConnection_possibleTypes.includes(obj.__typename)
    }
    


    const PostConnection_possibleTypes: string[] = ['UserToPostConnection','PostToPostConnection','PostFormatToPostConnection','PostToRevisionConnection','TagToPostConnection','CategoryToPostConnection','RootQueryToPostConnection']
    export const isPostConnection = (obj?: { __typename?: any } | null): obj is PostConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPostConnection"')
      return PostConnection_possibleTypes.includes(obj.__typename)
    }
    


    const PostConnectionEdge_possibleTypes: string[] = ['PostToPostConnectionEdge','PostToParentConnectionEdge','PostFormatToPostConnectionEdge','PostToPreviewConnectionEdge','PostToRevisionConnectionEdge','TagToPostConnectionEdge','UserToPostConnectionEdge','CategoryToPostConnectionEdge','RootQueryToPostConnectionEdge']
    export const isPostConnectionEdge = (obj?: { __typename?: any } | null): obj is PostConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPostConnectionEdge"')
      return PostConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const Post_possibleTypes: string[] = ['Post']
    export const isPost = (obj?: { __typename?: any } | null): obj is Post => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPost"')
      return Post_possibleTypes.includes(obj.__typename)
    }
    


    const NodeWithTrackbacks_possibleTypes: string[] = ['Post']
    export const isNodeWithTrackbacks = (obj?: { __typename?: any } | null): obj is NodeWithTrackbacks => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isNodeWithTrackbacks"')
      return NodeWithTrackbacks_possibleTypes.includes(obj.__typename)
    }
    


    const PostToPostConnection_possibleTypes: string[] = ['PostToPostConnection']
    export const isPostToPostConnection = (obj?: { __typename?: any } | null): obj is PostToPostConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPostToPostConnection"')
      return PostToPostConnection_possibleTypes.includes(obj.__typename)
    }
    


    const PostToPostConnectionEdge_possibleTypes: string[] = ['PostToPostConnectionEdge']
    export const isPostToPostConnectionEdge = (obj?: { __typename?: any } | null): obj is PostToPostConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPostToPostConnectionEdge"')
      return PostToPostConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const PostToPostConnectionPageInfo_possibleTypes: string[] = ['PostToPostConnectionPageInfo']
    export const isPostToPostConnectionPageInfo = (obj?: { __typename?: any } | null): obj is PostToPostConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPostToPostConnectionPageInfo"')
      return PostToPostConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const PostConnectionPageInfo_possibleTypes: string[] = ['PostToPostConnectionPageInfo','PostFormatToPostConnectionPageInfo','PostToRevisionConnectionPageInfo','TagToPostConnectionPageInfo','UserToPostConnectionPageInfo','CategoryToPostConnectionPageInfo','RootQueryToPostConnectionPageInfo']
    export const isPostConnectionPageInfo = (obj?: { __typename?: any } | null): obj is PostConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPostConnectionPageInfo"')
      return PostConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const PostToCategoryConnection_possibleTypes: string[] = ['PostToCategoryConnection']
    export const isPostToCategoryConnection = (obj?: { __typename?: any } | null): obj is PostToCategoryConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPostToCategoryConnection"')
      return PostToCategoryConnection_possibleTypes.includes(obj.__typename)
    }
    


    const PostToCategoryConnectionEdge_possibleTypes: string[] = ['PostToCategoryConnectionEdge']
    export const isPostToCategoryConnectionEdge = (obj?: { __typename?: any } | null): obj is PostToCategoryConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPostToCategoryConnectionEdge"')
      return PostToCategoryConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const PostToCategoryConnectionPageInfo_possibleTypes: string[] = ['PostToCategoryConnectionPageInfo']
    export const isPostToCategoryConnectionPageInfo = (obj?: { __typename?: any } | null): obj is PostToCategoryConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPostToCategoryConnectionPageInfo"')
      return PostToCategoryConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const PostToCommentConnection_possibleTypes: string[] = ['PostToCommentConnection']
    export const isPostToCommentConnection = (obj?: { __typename?: any } | null): obj is PostToCommentConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPostToCommentConnection"')
      return PostToCommentConnection_possibleTypes.includes(obj.__typename)
    }
    


    const PostToCommentConnectionEdge_possibleTypes: string[] = ['PostToCommentConnectionEdge']
    export const isPostToCommentConnectionEdge = (obj?: { __typename?: any } | null): obj is PostToCommentConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPostToCommentConnectionEdge"')
      return PostToCommentConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const PostToCommentConnectionPageInfo_possibleTypes: string[] = ['PostToCommentConnectionPageInfo']
    export const isPostToCommentConnectionPageInfo = (obj?: { __typename?: any } | null): obj is PostToCommentConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPostToCommentConnectionPageInfo"')
      return PostToCommentConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const PostToParentConnectionEdge_possibleTypes: string[] = ['PostToParentConnectionEdge']
    export const isPostToParentConnectionEdge = (obj?: { __typename?: any } | null): obj is PostToParentConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPostToParentConnectionEdge"')
      return PostToParentConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const PostToPostFormatConnection_possibleTypes: string[] = ['PostToPostFormatConnection']
    export const isPostToPostFormatConnection = (obj?: { __typename?: any } | null): obj is PostToPostFormatConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPostToPostFormatConnection"')
      return PostToPostFormatConnection_possibleTypes.includes(obj.__typename)
    }
    


    const PostFormatConnection_possibleTypes: string[] = ['PostToPostFormatConnection','RootQueryToPostFormatConnection']
    export const isPostFormatConnection = (obj?: { __typename?: any } | null): obj is PostFormatConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPostFormatConnection"')
      return PostFormatConnection_possibleTypes.includes(obj.__typename)
    }
    


    const PostFormatConnectionEdge_possibleTypes: string[] = ['PostToPostFormatConnectionEdge','RootQueryToPostFormatConnectionEdge']
    export const isPostFormatConnectionEdge = (obj?: { __typename?: any } | null): obj is PostFormatConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPostFormatConnectionEdge"')
      return PostFormatConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const PostFormat_possibleTypes: string[] = ['PostFormat']
    export const isPostFormat = (obj?: { __typename?: any } | null): obj is PostFormat => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPostFormat"')
      return PostFormat_possibleTypes.includes(obj.__typename)
    }
    


    const PostFormatToContentNodeConnection_possibleTypes: string[] = ['PostFormatToContentNodeConnection']
    export const isPostFormatToContentNodeConnection = (obj?: { __typename?: any } | null): obj is PostFormatToContentNodeConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPostFormatToContentNodeConnection"')
      return PostFormatToContentNodeConnection_possibleTypes.includes(obj.__typename)
    }
    


    const PostFormatToContentNodeConnectionEdge_possibleTypes: string[] = ['PostFormatToContentNodeConnectionEdge']
    export const isPostFormatToContentNodeConnectionEdge = (obj?: { __typename?: any } | null): obj is PostFormatToContentNodeConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPostFormatToContentNodeConnectionEdge"')
      return PostFormatToContentNodeConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const PostFormatToContentNodeConnectionPageInfo_possibleTypes: string[] = ['PostFormatToContentNodeConnectionPageInfo']
    export const isPostFormatToContentNodeConnectionPageInfo = (obj?: { __typename?: any } | null): obj is PostFormatToContentNodeConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPostFormatToContentNodeConnectionPageInfo"')
      return PostFormatToContentNodeConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const PostFormatToPostConnection_possibleTypes: string[] = ['PostFormatToPostConnection']
    export const isPostFormatToPostConnection = (obj?: { __typename?: any } | null): obj is PostFormatToPostConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPostFormatToPostConnection"')
      return PostFormatToPostConnection_possibleTypes.includes(obj.__typename)
    }
    


    const PostFormatToPostConnectionEdge_possibleTypes: string[] = ['PostFormatToPostConnectionEdge']
    export const isPostFormatToPostConnectionEdge = (obj?: { __typename?: any } | null): obj is PostFormatToPostConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPostFormatToPostConnectionEdge"')
      return PostFormatToPostConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const PostFormatToPostConnectionPageInfo_possibleTypes: string[] = ['PostFormatToPostConnectionPageInfo']
    export const isPostFormatToPostConnectionPageInfo = (obj?: { __typename?: any } | null): obj is PostFormatToPostConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPostFormatToPostConnectionPageInfo"')
      return PostFormatToPostConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const PostFormatToTaxonomyConnectionEdge_possibleTypes: string[] = ['PostFormatToTaxonomyConnectionEdge']
    export const isPostFormatToTaxonomyConnectionEdge = (obj?: { __typename?: any } | null): obj is PostFormatToTaxonomyConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPostFormatToTaxonomyConnectionEdge"')
      return PostFormatToTaxonomyConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const PostFormatConnectionPageInfo_possibleTypes: string[] = ['PostToPostFormatConnectionPageInfo','RootQueryToPostFormatConnectionPageInfo']
    export const isPostFormatConnectionPageInfo = (obj?: { __typename?: any } | null): obj is PostFormatConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPostFormatConnectionPageInfo"')
      return PostFormatConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const PostToPostFormatConnectionEdge_possibleTypes: string[] = ['PostToPostFormatConnectionEdge']
    export const isPostToPostFormatConnectionEdge = (obj?: { __typename?: any } | null): obj is PostToPostFormatConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPostToPostFormatConnectionEdge"')
      return PostToPostFormatConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const PostToPostFormatConnectionPageInfo_possibleTypes: string[] = ['PostToPostFormatConnectionPageInfo']
    export const isPostToPostFormatConnectionPageInfo = (obj?: { __typename?: any } | null): obj is PostToPostFormatConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPostToPostFormatConnectionPageInfo"')
      return PostToPostFormatConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const PostToPreviewConnectionEdge_possibleTypes: string[] = ['PostToPreviewConnectionEdge']
    export const isPostToPreviewConnectionEdge = (obj?: { __typename?: any } | null): obj is PostToPreviewConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPostToPreviewConnectionEdge"')
      return PostToPreviewConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const PostToRevisionConnection_possibleTypes: string[] = ['PostToRevisionConnection']
    export const isPostToRevisionConnection = (obj?: { __typename?: any } | null): obj is PostToRevisionConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPostToRevisionConnection"')
      return PostToRevisionConnection_possibleTypes.includes(obj.__typename)
    }
    


    const PostToRevisionConnectionEdge_possibleTypes: string[] = ['PostToRevisionConnectionEdge']
    export const isPostToRevisionConnectionEdge = (obj?: { __typename?: any } | null): obj is PostToRevisionConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPostToRevisionConnectionEdge"')
      return PostToRevisionConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const PostToRevisionConnectionPageInfo_possibleTypes: string[] = ['PostToRevisionConnectionPageInfo']
    export const isPostToRevisionConnectionPageInfo = (obj?: { __typename?: any } | null): obj is PostToRevisionConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPostToRevisionConnectionPageInfo"')
      return PostToRevisionConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const PostToTagConnection_possibleTypes: string[] = ['PostToTagConnection']
    export const isPostToTagConnection = (obj?: { __typename?: any } | null): obj is PostToTagConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPostToTagConnection"')
      return PostToTagConnection_possibleTypes.includes(obj.__typename)
    }
    


    const TagConnection_possibleTypes: string[] = ['PostToTagConnection','RootQueryToTagConnection']
    export const isTagConnection = (obj?: { __typename?: any } | null): obj is TagConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTagConnection"')
      return TagConnection_possibleTypes.includes(obj.__typename)
    }
    


    const TagConnectionEdge_possibleTypes: string[] = ['PostToTagConnectionEdge','RootQueryToTagConnectionEdge']
    export const isTagConnectionEdge = (obj?: { __typename?: any } | null): obj is TagConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTagConnectionEdge"')
      return TagConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const Tag_possibleTypes: string[] = ['Tag']
    export const isTag = (obj?: { __typename?: any } | null): obj is Tag => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTag"')
      return Tag_possibleTypes.includes(obj.__typename)
    }
    


    const TagToContentNodeConnection_possibleTypes: string[] = ['TagToContentNodeConnection']
    export const isTagToContentNodeConnection = (obj?: { __typename?: any } | null): obj is TagToContentNodeConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTagToContentNodeConnection"')
      return TagToContentNodeConnection_possibleTypes.includes(obj.__typename)
    }
    


    const TagToContentNodeConnectionEdge_possibleTypes: string[] = ['TagToContentNodeConnectionEdge']
    export const isTagToContentNodeConnectionEdge = (obj?: { __typename?: any } | null): obj is TagToContentNodeConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTagToContentNodeConnectionEdge"')
      return TagToContentNodeConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const TagToContentNodeConnectionPageInfo_possibleTypes: string[] = ['TagToContentNodeConnectionPageInfo']
    export const isTagToContentNodeConnectionPageInfo = (obj?: { __typename?: any } | null): obj is TagToContentNodeConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTagToContentNodeConnectionPageInfo"')
      return TagToContentNodeConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const TagToPostConnection_possibleTypes: string[] = ['TagToPostConnection']
    export const isTagToPostConnection = (obj?: { __typename?: any } | null): obj is TagToPostConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTagToPostConnection"')
      return TagToPostConnection_possibleTypes.includes(obj.__typename)
    }
    


    const TagToPostConnectionEdge_possibleTypes: string[] = ['TagToPostConnectionEdge']
    export const isTagToPostConnectionEdge = (obj?: { __typename?: any } | null): obj is TagToPostConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTagToPostConnectionEdge"')
      return TagToPostConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const TagToPostConnectionPageInfo_possibleTypes: string[] = ['TagToPostConnectionPageInfo']
    export const isTagToPostConnectionPageInfo = (obj?: { __typename?: any } | null): obj is TagToPostConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTagToPostConnectionPageInfo"')
      return TagToPostConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const TagToTaxonomyConnectionEdge_possibleTypes: string[] = ['TagToTaxonomyConnectionEdge']
    export const isTagToTaxonomyConnectionEdge = (obj?: { __typename?: any } | null): obj is TagToTaxonomyConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTagToTaxonomyConnectionEdge"')
      return TagToTaxonomyConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const TagConnectionPageInfo_possibleTypes: string[] = ['PostToTagConnectionPageInfo','RootQueryToTagConnectionPageInfo']
    export const isTagConnectionPageInfo = (obj?: { __typename?: any } | null): obj is TagConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTagConnectionPageInfo"')
      return TagConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const PostToTagConnectionEdge_possibleTypes: string[] = ['PostToTagConnectionEdge']
    export const isPostToTagConnectionEdge = (obj?: { __typename?: any } | null): obj is PostToTagConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPostToTagConnectionEdge"')
      return PostToTagConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const PostToTagConnectionPageInfo_possibleTypes: string[] = ['PostToTagConnectionPageInfo']
    export const isPostToTagConnectionPageInfo = (obj?: { __typename?: any } | null): obj is PostToTagConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPostToTagConnectionPageInfo"')
      return PostToTagConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const PostToTermNodeConnection_possibleTypes: string[] = ['PostToTermNodeConnection']
    export const isPostToTermNodeConnection = (obj?: { __typename?: any } | null): obj is PostToTermNodeConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPostToTermNodeConnection"')
      return PostToTermNodeConnection_possibleTypes.includes(obj.__typename)
    }
    


    const PostToTermNodeConnectionEdge_possibleTypes: string[] = ['PostToTermNodeConnectionEdge']
    export const isPostToTermNodeConnectionEdge = (obj?: { __typename?: any } | null): obj is PostToTermNodeConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPostToTermNodeConnectionEdge"')
      return PostToTermNodeConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const PostToTermNodeConnectionPageInfo_possibleTypes: string[] = ['PostToTermNodeConnectionPageInfo']
    export const isPostToTermNodeConnectionPageInfo = (obj?: { __typename?: any } | null): obj is PostToTermNodeConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPostToTermNodeConnectionPageInfo"')
      return PostToTermNodeConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const UserToPostConnectionEdge_possibleTypes: string[] = ['UserToPostConnectionEdge']
    export const isUserToPostConnectionEdge = (obj?: { __typename?: any } | null): obj is UserToPostConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserToPostConnectionEdge"')
      return UserToPostConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const UserToPostConnectionPageInfo_possibleTypes: string[] = ['UserToPostConnectionPageInfo']
    export const isUserToPostConnectionPageInfo = (obj?: { __typename?: any } | null): obj is UserToPostConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserToPostConnectionPageInfo"')
      return UserToPostConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const UserToRevisionsConnection_possibleTypes: string[] = ['UserToRevisionsConnection']
    export const isUserToRevisionsConnection = (obj?: { __typename?: any } | null): obj is UserToRevisionsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserToRevisionsConnection"')
      return UserToRevisionsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const UserToRevisionsConnectionEdge_possibleTypes: string[] = ['UserToRevisionsConnectionEdge']
    export const isUserToRevisionsConnectionEdge = (obj?: { __typename?: any } | null): obj is UserToRevisionsConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserToRevisionsConnectionEdge"')
      return UserToRevisionsConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const UserToRevisionsConnectionPageInfo_possibleTypes: string[] = ['UserToRevisionsConnectionPageInfo']
    export const isUserToRevisionsConnectionPageInfo = (obj?: { __typename?: any } | null): obj is UserToRevisionsConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserToRevisionsConnectionPageInfo"')
      return UserToRevisionsConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const UserToUserRoleConnection_possibleTypes: string[] = ['UserToUserRoleConnection']
    export const isUserToUserRoleConnection = (obj?: { __typename?: any } | null): obj is UserToUserRoleConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserToUserRoleConnection"')
      return UserToUserRoleConnection_possibleTypes.includes(obj.__typename)
    }
    


    const UserRoleConnection_possibleTypes: string[] = ['UserToUserRoleConnection','RootQueryToUserRoleConnection']
    export const isUserRoleConnection = (obj?: { __typename?: any } | null): obj is UserRoleConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserRoleConnection"')
      return UserRoleConnection_possibleTypes.includes(obj.__typename)
    }
    


    const UserRoleConnectionEdge_possibleTypes: string[] = ['UserToUserRoleConnectionEdge','RootQueryToUserRoleConnectionEdge']
    export const isUserRoleConnectionEdge = (obj?: { __typename?: any } | null): obj is UserRoleConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserRoleConnectionEdge"')
      return UserRoleConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const UserRole_possibleTypes: string[] = ['UserRole']
    export const isUserRole = (obj?: { __typename?: any } | null): obj is UserRole => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserRole"')
      return UserRole_possibleTypes.includes(obj.__typename)
    }
    


    const UserRoleConnectionPageInfo_possibleTypes: string[] = ['UserToUserRoleConnectionPageInfo','RootQueryToUserRoleConnectionPageInfo']
    export const isUserRoleConnectionPageInfo = (obj?: { __typename?: any } | null): obj is UserRoleConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserRoleConnectionPageInfo"')
      return UserRoleConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const UserToUserRoleConnectionEdge_possibleTypes: string[] = ['UserToUserRoleConnectionEdge']
    export const isUserToUserRoleConnectionEdge = (obj?: { __typename?: any } | null): obj is UserToUserRoleConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserToUserRoleConnectionEdge"')
      return UserToUserRoleConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const UserToUserRoleConnectionPageInfo_possibleTypes: string[] = ['UserToUserRoleConnectionPageInfo']
    export const isUserToUserRoleConnectionPageInfo = (obj?: { __typename?: any } | null): obj is UserToUserRoleConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserToUserRoleConnectionPageInfo"')
      return UserToUserRoleConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const CategoryToContentNodeConnectionEdge_possibleTypes: string[] = ['CategoryToContentNodeConnectionEdge']
    export const isCategoryToContentNodeConnectionEdge = (obj?: { __typename?: any } | null): obj is CategoryToContentNodeConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCategoryToContentNodeConnectionEdge"')
      return CategoryToContentNodeConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const CategoryToContentNodeConnectionPageInfo_possibleTypes: string[] = ['CategoryToContentNodeConnectionPageInfo']
    export const isCategoryToContentNodeConnectionPageInfo = (obj?: { __typename?: any } | null): obj is CategoryToContentNodeConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCategoryToContentNodeConnectionPageInfo"')
      return CategoryToContentNodeConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const CategoryToParentCategoryConnectionEdge_possibleTypes: string[] = ['CategoryToParentCategoryConnectionEdge']
    export const isCategoryToParentCategoryConnectionEdge = (obj?: { __typename?: any } | null): obj is CategoryToParentCategoryConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCategoryToParentCategoryConnectionEdge"')
      return CategoryToParentCategoryConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const CategoryToPostConnection_possibleTypes: string[] = ['CategoryToPostConnection']
    export const isCategoryToPostConnection = (obj?: { __typename?: any } | null): obj is CategoryToPostConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCategoryToPostConnection"')
      return CategoryToPostConnection_possibleTypes.includes(obj.__typename)
    }
    


    const CategoryToPostConnectionEdge_possibleTypes: string[] = ['CategoryToPostConnectionEdge']
    export const isCategoryToPostConnectionEdge = (obj?: { __typename?: any } | null): obj is CategoryToPostConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCategoryToPostConnectionEdge"')
      return CategoryToPostConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const CategoryToPostConnectionPageInfo_possibleTypes: string[] = ['CategoryToPostConnectionPageInfo']
    export const isCategoryToPostConnectionPageInfo = (obj?: { __typename?: any } | null): obj is CategoryToPostConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCategoryToPostConnectionPageInfo"')
      return CategoryToPostConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const CategoryToTaxonomyConnectionEdge_possibleTypes: string[] = ['CategoryToTaxonomyConnectionEdge']
    export const isCategoryToTaxonomyConnectionEdge = (obj?: { __typename?: any } | null): obj is CategoryToTaxonomyConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCategoryToTaxonomyConnectionEdge"')
      return CategoryToTaxonomyConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToCategoryConnectionEdge_possibleTypes: string[] = ['RootQueryToCategoryConnectionEdge']
    export const isRootQueryToCategoryConnectionEdge = (obj?: { __typename?: any } | null): obj is RootQueryToCategoryConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToCategoryConnectionEdge"')
      return RootQueryToCategoryConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToCategoryConnectionPageInfo_possibleTypes: string[] = ['RootQueryToCategoryConnectionPageInfo']
    export const isRootQueryToCategoryConnectionPageInfo = (obj?: { __typename?: any } | null): obj is RootQueryToCategoryConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToCategoryConnectionPageInfo"')
      return RootQueryToCategoryConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToCommentConnection_possibleTypes: string[] = ['RootQueryToCommentConnection']
    export const isRootQueryToCommentConnection = (obj?: { __typename?: any } | null): obj is RootQueryToCommentConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToCommentConnection"')
      return RootQueryToCommentConnection_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToCommentConnectionEdge_possibleTypes: string[] = ['RootQueryToCommentConnectionEdge']
    export const isRootQueryToCommentConnectionEdge = (obj?: { __typename?: any } | null): obj is RootQueryToCommentConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToCommentConnectionEdge"')
      return RootQueryToCommentConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToCommentConnectionPageInfo_possibleTypes: string[] = ['RootQueryToCommentConnectionPageInfo']
    export const isRootQueryToCommentConnectionPageInfo = (obj?: { __typename?: any } | null): obj is RootQueryToCommentConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToCommentConnectionPageInfo"')
      return RootQueryToCommentConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToContentNodeConnection_possibleTypes: string[] = ['RootQueryToContentNodeConnection']
    export const isRootQueryToContentNodeConnection = (obj?: { __typename?: any } | null): obj is RootQueryToContentNodeConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToContentNodeConnection"')
      return RootQueryToContentNodeConnection_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToContentNodeConnectionEdge_possibleTypes: string[] = ['RootQueryToContentNodeConnectionEdge']
    export const isRootQueryToContentNodeConnectionEdge = (obj?: { __typename?: any } | null): obj is RootQueryToContentNodeConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToContentNodeConnectionEdge"')
      return RootQueryToContentNodeConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToContentNodeConnectionPageInfo_possibleTypes: string[] = ['RootQueryToContentNodeConnectionPageInfo']
    export const isRootQueryToContentNodeConnectionPageInfo = (obj?: { __typename?: any } | null): obj is RootQueryToContentNodeConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToContentNodeConnectionPageInfo"')
      return RootQueryToContentNodeConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToContentTypeConnection_possibleTypes: string[] = ['RootQueryToContentTypeConnection']
    export const isRootQueryToContentTypeConnection = (obj?: { __typename?: any } | null): obj is RootQueryToContentTypeConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToContentTypeConnection"')
      return RootQueryToContentTypeConnection_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToContentTypeConnectionEdge_possibleTypes: string[] = ['RootQueryToContentTypeConnectionEdge']
    export const isRootQueryToContentTypeConnectionEdge = (obj?: { __typename?: any } | null): obj is RootQueryToContentTypeConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToContentTypeConnectionEdge"')
      return RootQueryToContentTypeConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToContentTypeConnectionPageInfo_possibleTypes: string[] = ['RootQueryToContentTypeConnectionPageInfo']
    export const isRootQueryToContentTypeConnectionPageInfo = (obj?: { __typename?: any } | null): obj is RootQueryToContentTypeConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToContentTypeConnectionPageInfo"')
      return RootQueryToContentTypeConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const DiscussionSettings_possibleTypes: string[] = ['DiscussionSettings']
    export const isDiscussionSettings = (obj?: { __typename?: any } | null): obj is DiscussionSettings => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDiscussionSettings"')
      return DiscussionSettings_possibleTypes.includes(obj.__typename)
    }
    


    const GeneralSettings_possibleTypes: string[] = ['GeneralSettings']
    export const isGeneralSettings = (obj?: { __typename?: any } | null): obj is GeneralSettings => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isGeneralSettings"')
      return GeneralSettings_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToMediaItemConnection_possibleTypes: string[] = ['RootQueryToMediaItemConnection']
    export const isRootQueryToMediaItemConnection = (obj?: { __typename?: any } | null): obj is RootQueryToMediaItemConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToMediaItemConnection"')
      return RootQueryToMediaItemConnection_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToMediaItemConnectionEdge_possibleTypes: string[] = ['RootQueryToMediaItemConnectionEdge']
    export const isRootQueryToMediaItemConnectionEdge = (obj?: { __typename?: any } | null): obj is RootQueryToMediaItemConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToMediaItemConnectionEdge"')
      return RootQueryToMediaItemConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToMediaItemConnectionPageInfo_possibleTypes: string[] = ['RootQueryToMediaItemConnectionPageInfo']
    export const isRootQueryToMediaItemConnectionPageInfo = (obj?: { __typename?: any } | null): obj is RootQueryToMediaItemConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToMediaItemConnectionPageInfo"')
      return RootQueryToMediaItemConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const Menu_possibleTypes: string[] = ['Menu']
    export const isMenu = (obj?: { __typename?: any } | null): obj is Menu => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMenu"')
      return Menu_possibleTypes.includes(obj.__typename)
    }
    


    const MenuToMenuItemConnection_possibleTypes: string[] = ['MenuToMenuItemConnection']
    export const isMenuToMenuItemConnection = (obj?: { __typename?: any } | null): obj is MenuToMenuItemConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMenuToMenuItemConnection"')
      return MenuToMenuItemConnection_possibleTypes.includes(obj.__typename)
    }
    


    const MenuItemConnection_possibleTypes: string[] = ['MenuToMenuItemConnection','MenuItemToMenuItemConnection','RootQueryToMenuItemConnection']
    export const isMenuItemConnection = (obj?: { __typename?: any } | null): obj is MenuItemConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMenuItemConnection"')
      return MenuItemConnection_possibleTypes.includes(obj.__typename)
    }
    


    const MenuItemConnectionEdge_possibleTypes: string[] = ['MenuItemToMenuItemConnectionEdge','MenuToMenuItemConnectionEdge','RootQueryToMenuItemConnectionEdge']
    export const isMenuItemConnectionEdge = (obj?: { __typename?: any } | null): obj is MenuItemConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMenuItemConnectionEdge"')
      return MenuItemConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const MenuItem_possibleTypes: string[] = ['MenuItem']
    export const isMenuItem = (obj?: { __typename?: any } | null): obj is MenuItem => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMenuItem"')
      return MenuItem_possibleTypes.includes(obj.__typename)
    }
    


    const MenuItemToMenuItemConnection_possibleTypes: string[] = ['MenuItemToMenuItemConnection']
    export const isMenuItemToMenuItemConnection = (obj?: { __typename?: any } | null): obj is MenuItemToMenuItemConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMenuItemToMenuItemConnection"')
      return MenuItemToMenuItemConnection_possibleTypes.includes(obj.__typename)
    }
    


    const MenuItemToMenuItemConnectionEdge_possibleTypes: string[] = ['MenuItemToMenuItemConnectionEdge']
    export const isMenuItemToMenuItemConnectionEdge = (obj?: { __typename?: any } | null): obj is MenuItemToMenuItemConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMenuItemToMenuItemConnectionEdge"')
      return MenuItemToMenuItemConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const MenuItemToMenuItemConnectionPageInfo_possibleTypes: string[] = ['MenuItemToMenuItemConnectionPageInfo']
    export const isMenuItemToMenuItemConnectionPageInfo = (obj?: { __typename?: any } | null): obj is MenuItemToMenuItemConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMenuItemToMenuItemConnectionPageInfo"')
      return MenuItemToMenuItemConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const MenuItemConnectionPageInfo_possibleTypes: string[] = ['MenuItemToMenuItemConnectionPageInfo','MenuToMenuItemConnectionPageInfo','RootQueryToMenuItemConnectionPageInfo']
    export const isMenuItemConnectionPageInfo = (obj?: { __typename?: any } | null): obj is MenuItemConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMenuItemConnectionPageInfo"')
      return MenuItemConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const MenuItemToMenuItemLinkableConnectionEdge_possibleTypes: string[] = ['MenuItemToMenuItemLinkableConnectionEdge']
    export const isMenuItemToMenuItemLinkableConnectionEdge = (obj?: { __typename?: any } | null): obj is MenuItemToMenuItemLinkableConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMenuItemToMenuItemLinkableConnectionEdge"')
      return MenuItemToMenuItemLinkableConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const MenuItemLinkableConnectionEdge_possibleTypes: string[] = ['MenuItemToMenuItemLinkableConnectionEdge']
    export const isMenuItemLinkableConnectionEdge = (obj?: { __typename?: any } | null): obj is MenuItemLinkableConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMenuItemLinkableConnectionEdge"')
      return MenuItemLinkableConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const MenuItemObjectUnion_possibleTypes: string[] = ['Post','Page','Category','Tag','PostFormat']
    export const isMenuItemObjectUnion = (obj?: { __typename?: any } | null): obj is MenuItemObjectUnion => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMenuItemObjectUnion"')
      return MenuItemObjectUnion_possibleTypes.includes(obj.__typename)
    }
    


    const MenuItemToMenuConnectionEdge_possibleTypes: string[] = ['MenuItemToMenuConnectionEdge']
    export const isMenuItemToMenuConnectionEdge = (obj?: { __typename?: any } | null): obj is MenuItemToMenuConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMenuItemToMenuConnectionEdge"')
      return MenuItemToMenuConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const MenuConnectionEdge_possibleTypes: string[] = ['MenuItemToMenuConnectionEdge','RootQueryToMenuConnectionEdge']
    export const isMenuConnectionEdge = (obj?: { __typename?: any } | null): obj is MenuConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMenuConnectionEdge"')
      return MenuConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const MenuToMenuItemConnectionEdge_possibleTypes: string[] = ['MenuToMenuItemConnectionEdge']
    export const isMenuToMenuItemConnectionEdge = (obj?: { __typename?: any } | null): obj is MenuToMenuItemConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMenuToMenuItemConnectionEdge"')
      return MenuToMenuItemConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const MenuToMenuItemConnectionPageInfo_possibleTypes: string[] = ['MenuToMenuItemConnectionPageInfo']
    export const isMenuToMenuItemConnectionPageInfo = (obj?: { __typename?: any } | null): obj is MenuToMenuItemConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMenuToMenuItemConnectionPageInfo"')
      return MenuToMenuItemConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToMenuItemConnection_possibleTypes: string[] = ['RootQueryToMenuItemConnection']
    export const isRootQueryToMenuItemConnection = (obj?: { __typename?: any } | null): obj is RootQueryToMenuItemConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToMenuItemConnection"')
      return RootQueryToMenuItemConnection_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToMenuItemConnectionEdge_possibleTypes: string[] = ['RootQueryToMenuItemConnectionEdge']
    export const isRootQueryToMenuItemConnectionEdge = (obj?: { __typename?: any } | null): obj is RootQueryToMenuItemConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToMenuItemConnectionEdge"')
      return RootQueryToMenuItemConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToMenuItemConnectionPageInfo_possibleTypes: string[] = ['RootQueryToMenuItemConnectionPageInfo']
    export const isRootQueryToMenuItemConnectionPageInfo = (obj?: { __typename?: any } | null): obj is RootQueryToMenuItemConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToMenuItemConnectionPageInfo"')
      return RootQueryToMenuItemConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToMenuConnection_possibleTypes: string[] = ['RootQueryToMenuConnection']
    export const isRootQueryToMenuConnection = (obj?: { __typename?: any } | null): obj is RootQueryToMenuConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToMenuConnection"')
      return RootQueryToMenuConnection_possibleTypes.includes(obj.__typename)
    }
    


    const MenuConnection_possibleTypes: string[] = ['RootQueryToMenuConnection']
    export const isMenuConnection = (obj?: { __typename?: any } | null): obj is MenuConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMenuConnection"')
      return MenuConnection_possibleTypes.includes(obj.__typename)
    }
    


    const MenuConnectionPageInfo_possibleTypes: string[] = ['RootQueryToMenuConnectionPageInfo']
    export const isMenuConnectionPageInfo = (obj?: { __typename?: any } | null): obj is MenuConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isMenuConnectionPageInfo"')
      return MenuConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToMenuConnectionEdge_possibleTypes: string[] = ['RootQueryToMenuConnectionEdge']
    export const isRootQueryToMenuConnectionEdge = (obj?: { __typename?: any } | null): obj is RootQueryToMenuConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToMenuConnectionEdge"')
      return RootQueryToMenuConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToMenuConnectionPageInfo_possibleTypes: string[] = ['RootQueryToMenuConnectionPageInfo']
    export const isRootQueryToMenuConnectionPageInfo = (obj?: { __typename?: any } | null): obj is RootQueryToMenuConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToMenuConnectionPageInfo"')
      return RootQueryToMenuConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToPageConnection_possibleTypes: string[] = ['RootQueryToPageConnection']
    export const isRootQueryToPageConnection = (obj?: { __typename?: any } | null): obj is RootQueryToPageConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToPageConnection"')
      return RootQueryToPageConnection_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToPageConnectionEdge_possibleTypes: string[] = ['RootQueryToPageConnectionEdge']
    export const isRootQueryToPageConnectionEdge = (obj?: { __typename?: any } | null): obj is RootQueryToPageConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToPageConnectionEdge"')
      return RootQueryToPageConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToPageConnectionPageInfo_possibleTypes: string[] = ['RootQueryToPageConnectionPageInfo']
    export const isRootQueryToPageConnectionPageInfo = (obj?: { __typename?: any } | null): obj is RootQueryToPageConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToPageConnectionPageInfo"')
      return RootQueryToPageConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const Plugin_possibleTypes: string[] = ['Plugin']
    export const isPlugin = (obj?: { __typename?: any } | null): obj is Plugin => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPlugin"')
      return Plugin_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToPluginConnection_possibleTypes: string[] = ['RootQueryToPluginConnection']
    export const isRootQueryToPluginConnection = (obj?: { __typename?: any } | null): obj is RootQueryToPluginConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToPluginConnection"')
      return RootQueryToPluginConnection_possibleTypes.includes(obj.__typename)
    }
    


    const PluginConnection_possibleTypes: string[] = ['RootQueryToPluginConnection']
    export const isPluginConnection = (obj?: { __typename?: any } | null): obj is PluginConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPluginConnection"')
      return PluginConnection_possibleTypes.includes(obj.__typename)
    }
    


    const PluginConnectionEdge_possibleTypes: string[] = ['RootQueryToPluginConnectionEdge']
    export const isPluginConnectionEdge = (obj?: { __typename?: any } | null): obj is PluginConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPluginConnectionEdge"')
      return PluginConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const PluginConnectionPageInfo_possibleTypes: string[] = ['RootQueryToPluginConnectionPageInfo']
    export const isPluginConnectionPageInfo = (obj?: { __typename?: any } | null): obj is PluginConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPluginConnectionPageInfo"')
      return PluginConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToPluginConnectionEdge_possibleTypes: string[] = ['RootQueryToPluginConnectionEdge']
    export const isRootQueryToPluginConnectionEdge = (obj?: { __typename?: any } | null): obj is RootQueryToPluginConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToPluginConnectionEdge"')
      return RootQueryToPluginConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToPluginConnectionPageInfo_possibleTypes: string[] = ['RootQueryToPluginConnectionPageInfo']
    export const isRootQueryToPluginConnectionPageInfo = (obj?: { __typename?: any } | null): obj is RootQueryToPluginConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToPluginConnectionPageInfo"')
      return RootQueryToPluginConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToPostFormatConnection_possibleTypes: string[] = ['RootQueryToPostFormatConnection']
    export const isRootQueryToPostFormatConnection = (obj?: { __typename?: any } | null): obj is RootQueryToPostFormatConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToPostFormatConnection"')
      return RootQueryToPostFormatConnection_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToPostFormatConnectionEdge_possibleTypes: string[] = ['RootQueryToPostFormatConnectionEdge']
    export const isRootQueryToPostFormatConnectionEdge = (obj?: { __typename?: any } | null): obj is RootQueryToPostFormatConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToPostFormatConnectionEdge"')
      return RootQueryToPostFormatConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToPostFormatConnectionPageInfo_possibleTypes: string[] = ['RootQueryToPostFormatConnectionPageInfo']
    export const isRootQueryToPostFormatConnectionPageInfo = (obj?: { __typename?: any } | null): obj is RootQueryToPostFormatConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToPostFormatConnectionPageInfo"')
      return RootQueryToPostFormatConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToPostConnection_possibleTypes: string[] = ['RootQueryToPostConnection']
    export const isRootQueryToPostConnection = (obj?: { __typename?: any } | null): obj is RootQueryToPostConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToPostConnection"')
      return RootQueryToPostConnection_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToPostConnectionEdge_possibleTypes: string[] = ['RootQueryToPostConnectionEdge']
    export const isRootQueryToPostConnectionEdge = (obj?: { __typename?: any } | null): obj is RootQueryToPostConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToPostConnectionEdge"')
      return RootQueryToPostConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToPostConnectionPageInfo_possibleTypes: string[] = ['RootQueryToPostConnectionPageInfo']
    export const isRootQueryToPostConnectionPageInfo = (obj?: { __typename?: any } | null): obj is RootQueryToPostConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToPostConnectionPageInfo"')
      return RootQueryToPostConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const ReadingSettings_possibleTypes: string[] = ['ReadingSettings']
    export const isReadingSettings = (obj?: { __typename?: any } | null): obj is ReadingSettings => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isReadingSettings"')
      return ReadingSettings_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToEnqueuedScriptConnection_possibleTypes: string[] = ['RootQueryToEnqueuedScriptConnection']
    export const isRootQueryToEnqueuedScriptConnection = (obj?: { __typename?: any } | null): obj is RootQueryToEnqueuedScriptConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToEnqueuedScriptConnection"')
      return RootQueryToEnqueuedScriptConnection_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToEnqueuedScriptConnectionEdge_possibleTypes: string[] = ['RootQueryToEnqueuedScriptConnectionEdge']
    export const isRootQueryToEnqueuedScriptConnectionEdge = (obj?: { __typename?: any } | null): obj is RootQueryToEnqueuedScriptConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToEnqueuedScriptConnectionEdge"')
      return RootQueryToEnqueuedScriptConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToEnqueuedScriptConnectionPageInfo_possibleTypes: string[] = ['RootQueryToEnqueuedScriptConnectionPageInfo']
    export const isRootQueryToEnqueuedScriptConnectionPageInfo = (obj?: { __typename?: any } | null): obj is RootQueryToEnqueuedScriptConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToEnqueuedScriptConnectionPageInfo"')
      return RootQueryToEnqueuedScriptConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToEnqueuedStylesheetConnection_possibleTypes: string[] = ['RootQueryToEnqueuedStylesheetConnection']
    export const isRootQueryToEnqueuedStylesheetConnection = (obj?: { __typename?: any } | null): obj is RootQueryToEnqueuedStylesheetConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToEnqueuedStylesheetConnection"')
      return RootQueryToEnqueuedStylesheetConnection_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToEnqueuedStylesheetConnectionEdge_possibleTypes: string[] = ['RootQueryToEnqueuedStylesheetConnectionEdge']
    export const isRootQueryToEnqueuedStylesheetConnectionEdge = (obj?: { __typename?: any } | null): obj is RootQueryToEnqueuedStylesheetConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToEnqueuedStylesheetConnectionEdge"')
      return RootQueryToEnqueuedStylesheetConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToEnqueuedStylesheetConnectionPageInfo_possibleTypes: string[] = ['RootQueryToEnqueuedStylesheetConnectionPageInfo']
    export const isRootQueryToEnqueuedStylesheetConnectionPageInfo = (obj?: { __typename?: any } | null): obj is RootQueryToEnqueuedStylesheetConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToEnqueuedStylesheetConnectionPageInfo"')
      return RootQueryToEnqueuedStylesheetConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToRevisionsConnection_possibleTypes: string[] = ['RootQueryToRevisionsConnection']
    export const isRootQueryToRevisionsConnection = (obj?: { __typename?: any } | null): obj is RootQueryToRevisionsConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToRevisionsConnection"')
      return RootQueryToRevisionsConnection_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToRevisionsConnectionEdge_possibleTypes: string[] = ['RootQueryToRevisionsConnectionEdge']
    export const isRootQueryToRevisionsConnectionEdge = (obj?: { __typename?: any } | null): obj is RootQueryToRevisionsConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToRevisionsConnectionEdge"')
      return RootQueryToRevisionsConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToRevisionsConnectionPageInfo_possibleTypes: string[] = ['RootQueryToRevisionsConnectionPageInfo']
    export const isRootQueryToRevisionsConnectionPageInfo = (obj?: { __typename?: any } | null): obj is RootQueryToRevisionsConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToRevisionsConnectionPageInfo"')
      return RootQueryToRevisionsConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToTagConnection_possibleTypes: string[] = ['RootQueryToTagConnection']
    export const isRootQueryToTagConnection = (obj?: { __typename?: any } | null): obj is RootQueryToTagConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToTagConnection"')
      return RootQueryToTagConnection_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToTagConnectionEdge_possibleTypes: string[] = ['RootQueryToTagConnectionEdge']
    export const isRootQueryToTagConnectionEdge = (obj?: { __typename?: any } | null): obj is RootQueryToTagConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToTagConnectionEdge"')
      return RootQueryToTagConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToTagConnectionPageInfo_possibleTypes: string[] = ['RootQueryToTagConnectionPageInfo']
    export const isRootQueryToTagConnectionPageInfo = (obj?: { __typename?: any } | null): obj is RootQueryToTagConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToTagConnectionPageInfo"')
      return RootQueryToTagConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToTaxonomyConnection_possibleTypes: string[] = ['RootQueryToTaxonomyConnection']
    export const isRootQueryToTaxonomyConnection = (obj?: { __typename?: any } | null): obj is RootQueryToTaxonomyConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToTaxonomyConnection"')
      return RootQueryToTaxonomyConnection_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToTaxonomyConnectionEdge_possibleTypes: string[] = ['RootQueryToTaxonomyConnectionEdge']
    export const isRootQueryToTaxonomyConnectionEdge = (obj?: { __typename?: any } | null): obj is RootQueryToTaxonomyConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToTaxonomyConnectionEdge"')
      return RootQueryToTaxonomyConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToTaxonomyConnectionPageInfo_possibleTypes: string[] = ['RootQueryToTaxonomyConnectionPageInfo']
    export const isRootQueryToTaxonomyConnectionPageInfo = (obj?: { __typename?: any } | null): obj is RootQueryToTaxonomyConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToTaxonomyConnectionPageInfo"')
      return RootQueryToTaxonomyConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToTermNodeConnection_possibleTypes: string[] = ['RootQueryToTermNodeConnection']
    export const isRootQueryToTermNodeConnection = (obj?: { __typename?: any } | null): obj is RootQueryToTermNodeConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToTermNodeConnection"')
      return RootQueryToTermNodeConnection_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToTermNodeConnectionEdge_possibleTypes: string[] = ['RootQueryToTermNodeConnectionEdge']
    export const isRootQueryToTermNodeConnectionEdge = (obj?: { __typename?: any } | null): obj is RootQueryToTermNodeConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToTermNodeConnectionEdge"')
      return RootQueryToTermNodeConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToTermNodeConnectionPageInfo_possibleTypes: string[] = ['RootQueryToTermNodeConnectionPageInfo']
    export const isRootQueryToTermNodeConnectionPageInfo = (obj?: { __typename?: any } | null): obj is RootQueryToTermNodeConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToTermNodeConnectionPageInfo"')
      return RootQueryToTermNodeConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const Theme_possibleTypes: string[] = ['Theme']
    export const isTheme = (obj?: { __typename?: any } | null): obj is Theme => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isTheme"')
      return Theme_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToThemeConnection_possibleTypes: string[] = ['RootQueryToThemeConnection']
    export const isRootQueryToThemeConnection = (obj?: { __typename?: any } | null): obj is RootQueryToThemeConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToThemeConnection"')
      return RootQueryToThemeConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ThemeConnection_possibleTypes: string[] = ['RootQueryToThemeConnection']
    export const isThemeConnection = (obj?: { __typename?: any } | null): obj is ThemeConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isThemeConnection"')
      return ThemeConnection_possibleTypes.includes(obj.__typename)
    }
    


    const ThemeConnectionEdge_possibleTypes: string[] = ['RootQueryToThemeConnectionEdge']
    export const isThemeConnectionEdge = (obj?: { __typename?: any } | null): obj is ThemeConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isThemeConnectionEdge"')
      return ThemeConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const ThemeConnectionPageInfo_possibleTypes: string[] = ['RootQueryToThemeConnectionPageInfo']
    export const isThemeConnectionPageInfo = (obj?: { __typename?: any } | null): obj is ThemeConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isThemeConnectionPageInfo"')
      return ThemeConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToThemeConnectionEdge_possibleTypes: string[] = ['RootQueryToThemeConnectionEdge']
    export const isRootQueryToThemeConnectionEdge = (obj?: { __typename?: any } | null): obj is RootQueryToThemeConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToThemeConnectionEdge"')
      return RootQueryToThemeConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToThemeConnectionPageInfo_possibleTypes: string[] = ['RootQueryToThemeConnectionPageInfo']
    export const isRootQueryToThemeConnectionPageInfo = (obj?: { __typename?: any } | null): obj is RootQueryToThemeConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToThemeConnectionPageInfo"')
      return RootQueryToThemeConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToUserRoleConnection_possibleTypes: string[] = ['RootQueryToUserRoleConnection']
    export const isRootQueryToUserRoleConnection = (obj?: { __typename?: any } | null): obj is RootQueryToUserRoleConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToUserRoleConnection"')
      return RootQueryToUserRoleConnection_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToUserRoleConnectionEdge_possibleTypes: string[] = ['RootQueryToUserRoleConnectionEdge']
    export const isRootQueryToUserRoleConnectionEdge = (obj?: { __typename?: any } | null): obj is RootQueryToUserRoleConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToUserRoleConnectionEdge"')
      return RootQueryToUserRoleConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToUserRoleConnectionPageInfo_possibleTypes: string[] = ['RootQueryToUserRoleConnectionPageInfo']
    export const isRootQueryToUserRoleConnectionPageInfo = (obj?: { __typename?: any } | null): obj is RootQueryToUserRoleConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToUserRoleConnectionPageInfo"')
      return RootQueryToUserRoleConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToUserConnection_possibleTypes: string[] = ['RootQueryToUserConnection']
    export const isRootQueryToUserConnection = (obj?: { __typename?: any } | null): obj is RootQueryToUserConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToUserConnection"')
      return RootQueryToUserConnection_possibleTypes.includes(obj.__typename)
    }
    


    const UserConnection_possibleTypes: string[] = ['RootQueryToUserConnection']
    export const isUserConnection = (obj?: { __typename?: any } | null): obj is UserConnection => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserConnection"')
      return UserConnection_possibleTypes.includes(obj.__typename)
    }
    


    const UserConnectionPageInfo_possibleTypes: string[] = ['RootQueryToUserConnectionPageInfo']
    export const isUserConnectionPageInfo = (obj?: { __typename?: any } | null): obj is UserConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUserConnectionPageInfo"')
      return UserConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToUserConnectionEdge_possibleTypes: string[] = ['RootQueryToUserConnectionEdge']
    export const isRootQueryToUserConnectionEdge = (obj?: { __typename?: any } | null): obj is RootQueryToUserConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToUserConnectionEdge"')
      return RootQueryToUserConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const RootQueryToUserConnectionPageInfo_possibleTypes: string[] = ['RootQueryToUserConnectionPageInfo']
    export const isRootQueryToUserConnectionPageInfo = (obj?: { __typename?: any } | null): obj is RootQueryToUserConnectionPageInfo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootQueryToUserConnectionPageInfo"')
      return RootQueryToUserConnectionPageInfo_possibleTypes.includes(obj.__typename)
    }
    


    const WritingSettings_possibleTypes: string[] = ['WritingSettings']
    export const isWritingSettings = (obj?: { __typename?: any } | null): obj is WritingSettings => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isWritingSettings"')
      return WritingSettings_possibleTypes.includes(obj.__typename)
    }
    


    const RootMutation_possibleTypes: string[] = ['RootMutation']
    export const isRootMutation = (obj?: { __typename?: any } | null): obj is RootMutation => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRootMutation"')
      return RootMutation_possibleTypes.includes(obj.__typename)
    }
    


    const CreateCategoryPayload_possibleTypes: string[] = ['CreateCategoryPayload']
    export const isCreateCategoryPayload = (obj?: { __typename?: any } | null): obj is CreateCategoryPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCreateCategoryPayload"')
      return CreateCategoryPayload_possibleTypes.includes(obj.__typename)
    }
    


    const CreateCommentPayload_possibleTypes: string[] = ['CreateCommentPayload']
    export const isCreateCommentPayload = (obj?: { __typename?: any } | null): obj is CreateCommentPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCreateCommentPayload"')
      return CreateCommentPayload_possibleTypes.includes(obj.__typename)
    }
    


    const CreateMediaItemPayload_possibleTypes: string[] = ['CreateMediaItemPayload']
    export const isCreateMediaItemPayload = (obj?: { __typename?: any } | null): obj is CreateMediaItemPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCreateMediaItemPayload"')
      return CreateMediaItemPayload_possibleTypes.includes(obj.__typename)
    }
    


    const CreatePagePayload_possibleTypes: string[] = ['CreatePagePayload']
    export const isCreatePagePayload = (obj?: { __typename?: any } | null): obj is CreatePagePayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCreatePagePayload"')
      return CreatePagePayload_possibleTypes.includes(obj.__typename)
    }
    


    const CreatePostPayload_possibleTypes: string[] = ['CreatePostPayload']
    export const isCreatePostPayload = (obj?: { __typename?: any } | null): obj is CreatePostPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCreatePostPayload"')
      return CreatePostPayload_possibleTypes.includes(obj.__typename)
    }
    


    const CreatePostFormatPayload_possibleTypes: string[] = ['CreatePostFormatPayload']
    export const isCreatePostFormatPayload = (obj?: { __typename?: any } | null): obj is CreatePostFormatPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCreatePostFormatPayload"')
      return CreatePostFormatPayload_possibleTypes.includes(obj.__typename)
    }
    


    const CreateTagPayload_possibleTypes: string[] = ['CreateTagPayload']
    export const isCreateTagPayload = (obj?: { __typename?: any } | null): obj is CreateTagPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCreateTagPayload"')
      return CreateTagPayload_possibleTypes.includes(obj.__typename)
    }
    


    const CreateUserPayload_possibleTypes: string[] = ['CreateUserPayload']
    export const isCreateUserPayload = (obj?: { __typename?: any } | null): obj is CreateUserPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCreateUserPayload"')
      return CreateUserPayload_possibleTypes.includes(obj.__typename)
    }
    


    const DeleteCategoryPayload_possibleTypes: string[] = ['DeleteCategoryPayload']
    export const isDeleteCategoryPayload = (obj?: { __typename?: any } | null): obj is DeleteCategoryPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDeleteCategoryPayload"')
      return DeleteCategoryPayload_possibleTypes.includes(obj.__typename)
    }
    


    const DeleteCommentPayload_possibleTypes: string[] = ['DeleteCommentPayload']
    export const isDeleteCommentPayload = (obj?: { __typename?: any } | null): obj is DeleteCommentPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDeleteCommentPayload"')
      return DeleteCommentPayload_possibleTypes.includes(obj.__typename)
    }
    


    const DeleteMediaItemPayload_possibleTypes: string[] = ['DeleteMediaItemPayload']
    export const isDeleteMediaItemPayload = (obj?: { __typename?: any } | null): obj is DeleteMediaItemPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDeleteMediaItemPayload"')
      return DeleteMediaItemPayload_possibleTypes.includes(obj.__typename)
    }
    


    const DeletePagePayload_possibleTypes: string[] = ['DeletePagePayload']
    export const isDeletePagePayload = (obj?: { __typename?: any } | null): obj is DeletePagePayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDeletePagePayload"')
      return DeletePagePayload_possibleTypes.includes(obj.__typename)
    }
    


    const DeletePostPayload_possibleTypes: string[] = ['DeletePostPayload']
    export const isDeletePostPayload = (obj?: { __typename?: any } | null): obj is DeletePostPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDeletePostPayload"')
      return DeletePostPayload_possibleTypes.includes(obj.__typename)
    }
    


    const DeletePostFormatPayload_possibleTypes: string[] = ['DeletePostFormatPayload']
    export const isDeletePostFormatPayload = (obj?: { __typename?: any } | null): obj is DeletePostFormatPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDeletePostFormatPayload"')
      return DeletePostFormatPayload_possibleTypes.includes(obj.__typename)
    }
    


    const DeleteTagPayload_possibleTypes: string[] = ['DeleteTagPayload']
    export const isDeleteTagPayload = (obj?: { __typename?: any } | null): obj is DeleteTagPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDeleteTagPayload"')
      return DeleteTagPayload_possibleTypes.includes(obj.__typename)
    }
    


    const DeleteUserPayload_possibleTypes: string[] = ['DeleteUserPayload']
    export const isDeleteUserPayload = (obj?: { __typename?: any } | null): obj is DeleteUserPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDeleteUserPayload"')
      return DeleteUserPayload_possibleTypes.includes(obj.__typename)
    }
    


    const RegisterUserPayload_possibleTypes: string[] = ['RegisterUserPayload']
    export const isRegisterUserPayload = (obj?: { __typename?: any } | null): obj is RegisterUserPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRegisterUserPayload"')
      return RegisterUserPayload_possibleTypes.includes(obj.__typename)
    }
    


    const ResetUserPasswordPayload_possibleTypes: string[] = ['ResetUserPasswordPayload']
    export const isResetUserPasswordPayload = (obj?: { __typename?: any } | null): obj is ResetUserPasswordPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isResetUserPasswordPayload"')
      return ResetUserPasswordPayload_possibleTypes.includes(obj.__typename)
    }
    


    const RestoreCommentPayload_possibleTypes: string[] = ['RestoreCommentPayload']
    export const isRestoreCommentPayload = (obj?: { __typename?: any } | null): obj is RestoreCommentPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isRestoreCommentPayload"')
      return RestoreCommentPayload_possibleTypes.includes(obj.__typename)
    }
    


    const SendPasswordResetEmailPayload_possibleTypes: string[] = ['SendPasswordResetEmailPayload']
    export const isSendPasswordResetEmailPayload = (obj?: { __typename?: any } | null): obj is SendPasswordResetEmailPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isSendPasswordResetEmailPayload"')
      return SendPasswordResetEmailPayload_possibleTypes.includes(obj.__typename)
    }
    


    const UpdateCategoryPayload_possibleTypes: string[] = ['UpdateCategoryPayload']
    export const isUpdateCategoryPayload = (obj?: { __typename?: any } | null): obj is UpdateCategoryPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUpdateCategoryPayload"')
      return UpdateCategoryPayload_possibleTypes.includes(obj.__typename)
    }
    


    const UpdateCommentPayload_possibleTypes: string[] = ['UpdateCommentPayload']
    export const isUpdateCommentPayload = (obj?: { __typename?: any } | null): obj is UpdateCommentPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUpdateCommentPayload"')
      return UpdateCommentPayload_possibleTypes.includes(obj.__typename)
    }
    


    const UpdateMediaItemPayload_possibleTypes: string[] = ['UpdateMediaItemPayload']
    export const isUpdateMediaItemPayload = (obj?: { __typename?: any } | null): obj is UpdateMediaItemPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUpdateMediaItemPayload"')
      return UpdateMediaItemPayload_possibleTypes.includes(obj.__typename)
    }
    


    const UpdatePagePayload_possibleTypes: string[] = ['UpdatePagePayload']
    export const isUpdatePagePayload = (obj?: { __typename?: any } | null): obj is UpdatePagePayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUpdatePagePayload"')
      return UpdatePagePayload_possibleTypes.includes(obj.__typename)
    }
    


    const UpdatePostPayload_possibleTypes: string[] = ['UpdatePostPayload']
    export const isUpdatePostPayload = (obj?: { __typename?: any } | null): obj is UpdatePostPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUpdatePostPayload"')
      return UpdatePostPayload_possibleTypes.includes(obj.__typename)
    }
    


    const UpdatePostFormatPayload_possibleTypes: string[] = ['UpdatePostFormatPayload']
    export const isUpdatePostFormatPayload = (obj?: { __typename?: any } | null): obj is UpdatePostFormatPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUpdatePostFormatPayload"')
      return UpdatePostFormatPayload_possibleTypes.includes(obj.__typename)
    }
    


    const UpdateSettingsPayload_possibleTypes: string[] = ['UpdateSettingsPayload']
    export const isUpdateSettingsPayload = (obj?: { __typename?: any } | null): obj is UpdateSettingsPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUpdateSettingsPayload"')
      return UpdateSettingsPayload_possibleTypes.includes(obj.__typename)
    }
    


    const UpdateTagPayload_possibleTypes: string[] = ['UpdateTagPayload']
    export const isUpdateTagPayload = (obj?: { __typename?: any } | null): obj is UpdateTagPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUpdateTagPayload"')
      return UpdateTagPayload_possibleTypes.includes(obj.__typename)
    }
    


    const UpdateUserPayload_possibleTypes: string[] = ['UpdateUserPayload']
    export const isUpdateUserPayload = (obj?: { __typename?: any } | null): obj is UpdateUserPayload => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isUpdateUserPayload"')
      return UpdateUserPayload_possibleTypes.includes(obj.__typename)
    }
    


    const CommentAuthor_possibleTypes: string[] = ['CommentAuthor']
    export const isCommentAuthor = (obj?: { __typename?: any } | null): obj is CommentAuthor => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCommentAuthor"')
      return CommentAuthor_possibleTypes.includes(obj.__typename)
    }
    


    const DefaultTemplate_possibleTypes: string[] = ['DefaultTemplate']
    export const isDefaultTemplate = (obj?: { __typename?: any } | null): obj is DefaultTemplate => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDefaultTemplate"')
      return DefaultTemplate_possibleTypes.includes(obj.__typename)
    }
    


    const AtributosExtraProduto_Fields_possibleTypes: string[] = ['AtributosExtraProduto']
    export const isAtributosExtraProduto_Fields = (obj?: { __typename?: any } | null): obj is AtributosExtraProduto_Fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAtributosExtraProduto_Fields"')
      return AtributosExtraProduto_Fields_possibleTypes.includes(obj.__typename)
    }
    


    const AcfFieldGroup_possibleTypes: string[] = ['AtributosExtraProduto','CabeAlhoDeCatLogos','CamposEspeciaisDeConteDo','DadosExtraProdutores','OutrosDadosDeProduto','PromoEs']
    export const isAcfFieldGroup = (obj?: { __typename?: any } | null): obj is AcfFieldGroup => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAcfFieldGroup"')
      return AcfFieldGroup_possibleTypes.includes(obj.__typename)
    }
    


    const AcfFieldGroupFields_possibleTypes: string[] = ['AtributosExtraProduto','CabeAlhoDeCatLogos','CamposEspeciaisDeConteDo','DadosExtraProdutores','OutrosDadosDeProduto','PromoEs']
    export const isAcfFieldGroupFields = (obj?: { __typename?: any } | null): obj is AcfFieldGroupFields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAcfFieldGroupFields"')
      return AcfFieldGroupFields_possibleTypes.includes(obj.__typename)
    }
    


    const AtributosExtraProduto_possibleTypes: string[] = ['AtributosExtraProduto']
    export const isAtributosExtraProduto = (obj?: { __typename?: any } | null): obj is AtributosExtraProduto => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAtributosExtraProduto"')
      return AtributosExtraProduto_possibleTypes.includes(obj.__typename)
    }
    


    const CabeAlhoDeCatLogos_Fields_possibleTypes: string[] = ['CabeAlhoDeCatLogos']
    export const isCabeAlhoDeCatLogos_Fields = (obj?: { __typename?: any } | null): obj is CabeAlhoDeCatLogos_Fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCabeAlhoDeCatLogos_Fields"')
      return CabeAlhoDeCatLogos_Fields_possibleTypes.includes(obj.__typename)
    }
    


    const AcfMediaItemConnectionEdge_possibleTypes: string[] = ['AcfMediaItemConnectionEdge']
    export const isAcfMediaItemConnectionEdge = (obj?: { __typename?: any } | null): obj is AcfMediaItemConnectionEdge => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isAcfMediaItemConnectionEdge"')
      return AcfMediaItemConnectionEdge_possibleTypes.includes(obj.__typename)
    }
    


    const CabeAlhoDeCatLogos_possibleTypes: string[] = ['CabeAlhoDeCatLogos']
    export const isCabeAlhoDeCatLogos = (obj?: { __typename?: any } | null): obj is CabeAlhoDeCatLogos => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCabeAlhoDeCatLogos"')
      return CabeAlhoDeCatLogos_possibleTypes.includes(obj.__typename)
    }
    


    const CamposEspeciaisDeConteDo_Fields_possibleTypes: string[] = ['CamposEspeciaisDeConteDo']
    export const isCamposEspeciaisDeConteDo_Fields = (obj?: { __typename?: any } | null): obj is CamposEspeciaisDeConteDo_Fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCamposEspeciaisDeConteDo_Fields"')
      return CamposEspeciaisDeConteDo_Fields_possibleTypes.includes(obj.__typename)
    }
    


    const CamposEspeciaisDeConteDo_possibleTypes: string[] = ['CamposEspeciaisDeConteDo']
    export const isCamposEspeciaisDeConteDo = (obj?: { __typename?: any } | null): obj is CamposEspeciaisDeConteDo => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isCamposEspeciaisDeConteDo"')
      return CamposEspeciaisDeConteDo_possibleTypes.includes(obj.__typename)
    }
    


    const DadosExtraProdutores_Fields_possibleTypes: string[] = ['DadosExtraProdutores']
    export const isDadosExtraProdutores_Fields = (obj?: { __typename?: any } | null): obj is DadosExtraProdutores_Fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDadosExtraProdutores_Fields"')
      return DadosExtraProdutores_Fields_possibleTypes.includes(obj.__typename)
    }
    


    const DadosExtraProdutores_possibleTypes: string[] = ['DadosExtraProdutores']
    export const isDadosExtraProdutores = (obj?: { __typename?: any } | null): obj is DadosExtraProdutores => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isDadosExtraProdutores"')
      return DadosExtraProdutores_possibleTypes.includes(obj.__typename)
    }
    


    const OutrosDadosDeProduto_Fields_possibleTypes: string[] = ['OutrosDadosDeProduto']
    export const isOutrosDadosDeProduto_Fields = (obj?: { __typename?: any } | null): obj is OutrosDadosDeProduto_Fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOutrosDadosDeProduto_Fields"')
      return OutrosDadosDeProduto_Fields_possibleTypes.includes(obj.__typename)
    }
    


    const OutrosDadosDeProduto_possibleTypes: string[] = ['OutrosDadosDeProduto']
    export const isOutrosDadosDeProduto = (obj?: { __typename?: any } | null): obj is OutrosDadosDeProduto => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isOutrosDadosDeProduto"')
      return OutrosDadosDeProduto_possibleTypes.includes(obj.__typename)
    }
    


    const PromoEs_Fields_possibleTypes: string[] = ['PromoEs']
    export const isPromoEs_Fields = (obj?: { __typename?: any } | null): obj is PromoEs_Fields => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPromoEs_Fields"')
      return PromoEs_Fields_possibleTypes.includes(obj.__typename)
    }
    


    const PromoEs_possibleTypes: string[] = ['PromoEs']
    export const isPromoEs = (obj?: { __typename?: any } | null): obj is PromoEs => {
      if (!obj?.__typename) throw new Error('__typename is missing in "isPromoEs"')
      return PromoEs_possibleTypes.includes(obj.__typename)
    }
    

export const enumOrderEnum = {
   ASC: 'ASC' as const,
   DESC: 'DESC' as const
}

export const enumTermObjectsConnectionOrderbyEnum = {
   COUNT: 'COUNT' as const,
   DESCRIPTION: 'DESCRIPTION' as const,
   NAME: 'NAME' as const,
   SLUG: 'SLUG' as const,
   TERM_GROUP: 'TERM_GROUP' as const,
   TERM_ID: 'TERM_ID' as const,
   TERM_ORDER: 'TERM_ORDER' as const
}

export const enumScriptLoadingStrategyEnum = {
   ASYNC: 'ASYNC' as const,
   DEFER: 'DEFER' as const
}

export const enumContentTypesOfCategoryEnum = {
   POST: 'POST' as const
}

export const enumPostObjectsConnectionDateColumnEnum = {
   DATE: 'DATE' as const,
   MODIFIED: 'MODIFIED' as const
}

export const enumRelationEnum = {
   AND: 'AND' as const,
   OR: 'OR' as const
}

export const enumMimeTypeEnum = {
   APPLICATION_MSWORD: 'APPLICATION_MSWORD' as const,
   APPLICATION_PDF: 'APPLICATION_PDF' as const,
   APPLICATION_VND_APPLE_KEYNOTE: 'APPLICATION_VND_APPLE_KEYNOTE' as const,
   APPLICATION_VND_MS_EXCEL: 'APPLICATION_VND_MS_EXCEL' as const,
   APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12: 'APPLICATION_VND_MS_EXCEL_SHEET_BINARY_MACROENABLED_12' as const,
   APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12: 'APPLICATION_VND_MS_EXCEL_SHEET_MACROENABLED_12' as const,
   APPLICATION_VND_MS_POWERPOINT: 'APPLICATION_VND_MS_POWERPOINT' as const,
   APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12: 'APPLICATION_VND_MS_POWERPOINT_PRESENTATION_MACROENABLED_12' as const,
   APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12: 'APPLICATION_VND_MS_POWERPOINT_SLIDESHOW_MACROENABLED_12' as const,
   APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12: 'APPLICATION_VND_MS_WORD_DOCUMENT_MACROENABLED_12' as const,
   APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT: 'APPLICATION_VND_OASIS_OPENDOCUMENT_TEXT' as const,
   APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION: 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_PRESENTATION' as const,
   APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW: 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_PRESENTATIONML_SLIDESHOW' as const,
   APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET: 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_SPREADSHEETML_SHEET' as const,
   APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT: 'APPLICATION_VND_OPENXMLFORMATS_OFFICEDOCUMENT_WORDPROCESSINGML_DOCUMENT' as const,
   AUDIO_FLAC: 'AUDIO_FLAC' as const,
   AUDIO_MIDI: 'AUDIO_MIDI' as const,
   AUDIO_MPEG: 'AUDIO_MPEG' as const,
   AUDIO_OGG: 'AUDIO_OGG' as const,
   AUDIO_WAV: 'AUDIO_WAV' as const,
   IMAGE_AVIF: 'IMAGE_AVIF' as const,
   IMAGE_GIF: 'IMAGE_GIF' as const,
   IMAGE_JPEG: 'IMAGE_JPEG' as const,
   IMAGE_PNG: 'IMAGE_PNG' as const,
   IMAGE_SVG_XML: 'IMAGE_SVG_XML' as const,
   IMAGE_WEBP: 'IMAGE_WEBP' as const,
   VIDEO_3GPP: 'VIDEO_3GPP' as const,
   VIDEO_3GPP2: 'VIDEO_3GPP2' as const,
   VIDEO_AVI: 'VIDEO_AVI' as const,
   VIDEO_MP4: 'VIDEO_MP4' as const,
   VIDEO_MPEG: 'VIDEO_MPEG' as const,
   VIDEO_OGG: 'VIDEO_OGG' as const,
   VIDEO_QUICKTIME: 'VIDEO_QUICKTIME' as const,
   VIDEO_WEBM: 'VIDEO_WEBM' as const,
   VIDEO_X_FLV: 'VIDEO_X_FLV' as const
}

export const enumPostObjectsConnectionOrderbyEnum = {
   AUTHOR: 'AUTHOR' as const,
   COMMENT_COUNT: 'COMMENT_COUNT' as const,
   DATE: 'DATE' as const,
   IN: 'IN' as const,
   MENU_ORDER: 'MENU_ORDER' as const,
   MODIFIED: 'MODIFIED' as const,
   NAME_IN: 'NAME_IN' as const,
   PARENT: 'PARENT' as const,
   SLUG: 'SLUG' as const,
   TITLE: 'TITLE' as const
}

export const enumPostStatusEnum = {
   ACF_DISABLED: 'ACF_DISABLED' as const,
   AUTO_DRAFT: 'AUTO_DRAFT' as const,
   DRAFT: 'DRAFT' as const,
   FUTURE: 'FUTURE' as const,
   INHERIT: 'INHERIT' as const,
   PENDING: 'PENDING' as const,
   PRIVATE: 'PRIVATE' as const,
   PUBLISH: 'PUBLISH' as const,
   REQUEST_COMPLETED: 'REQUEST_COMPLETED' as const,
   REQUEST_CONFIRMED: 'REQUEST_CONFIRMED' as const,
   REQUEST_FAILED: 'REQUEST_FAILED' as const,
   REQUEST_PENDING: 'REQUEST_PENDING' as const,
   TRASH: 'TRASH' as const,
   WC_CANCELLED: 'WC_CANCELLED' as const,
   WC_CHECKOUT_DRAFT: 'WC_CHECKOUT_DRAFT' as const,
   WC_COMPLETED: 'WC_COMPLETED' as const,
   WC_FAILED: 'WC_FAILED' as const,
   WC_ON_HOLD: 'WC_ON_HOLD' as const,
   WC_PENDING: 'WC_PENDING' as const,
   WC_PROCESSING: 'WC_PROCESSING' as const,
   WC_REFUNDED: 'WC_REFUNDED' as const
}

export const enumContentTypeEnum = {
   ATTACHMENT: 'ATTACHMENT' as const,
   PAGE: 'PAGE' as const,
   POST: 'POST' as const
}

export const enumAvatarRatingEnum = {
   G: 'G' as const,
   PG: 'PG' as const,
   R: 'R' as const,
   X: 'X' as const
}

export const enumCommentsConnectionOrderbyEnum = {
   COMMENT_AGENT: 'COMMENT_AGENT' as const,
   COMMENT_APPROVED: 'COMMENT_APPROVED' as const,
   COMMENT_AUTHOR: 'COMMENT_AUTHOR' as const,
   COMMENT_AUTHOR_EMAIL: 'COMMENT_AUTHOR_EMAIL' as const,
   COMMENT_AUTHOR_IP: 'COMMENT_AUTHOR_IP' as const,
   COMMENT_AUTHOR_URL: 'COMMENT_AUTHOR_URL' as const,
   COMMENT_CONTENT: 'COMMENT_CONTENT' as const,
   COMMENT_DATE: 'COMMENT_DATE' as const,
   COMMENT_DATE_GMT: 'COMMENT_DATE_GMT' as const,
   COMMENT_ID: 'COMMENT_ID' as const,
   COMMENT_IN: 'COMMENT_IN' as const,
   COMMENT_KARMA: 'COMMENT_KARMA' as const,
   COMMENT_PARENT: 'COMMENT_PARENT' as const,
   COMMENT_POST_ID: 'COMMENT_POST_ID' as const,
   COMMENT_TYPE: 'COMMENT_TYPE' as const,
   USER_ID: 'USER_ID' as const
}

export const enumPostObjectFieldFormatEnum = {
   RAW: 'RAW' as const,
   RENDERED: 'RENDERED' as const
}

export const enumCommentStatusEnum = {
   APPROVE: 'APPROVE' as const,
   HOLD: 'HOLD' as const,
   SPAM: 'SPAM' as const,
   TRASH: 'TRASH' as const
}

export const enumMediaItemSizeEnum = {
   LARGE: 'LARGE' as const,
   MEDIUM: 'MEDIUM' as const,
   MEDIUM_LARGE: 'MEDIUM_LARGE' as const,
   THUMBNAIL: 'THUMBNAIL' as const,
   UNCODE_WOOCOMMERCE_NAV_THUMBNAIL_CROP: 'UNCODE_WOOCOMMERCE_NAV_THUMBNAIL_CROP' as const,
   UNCODE_WOOCOMMERCE_NAV_THUMBNAIL_REGULAR: 'UNCODE_WOOCOMMERCE_NAV_THUMBNAIL_REGULAR' as const,
   WOOCOMMERCE_GALLERY_THUMBNAIL: 'WOOCOMMERCE_GALLERY_THUMBNAIL' as const,
   WOOCOMMERCE_SINGLE: 'WOOCOMMERCE_SINGLE' as const,
   WOOCOMMERCE_THUMBNAIL: 'WOOCOMMERCE_THUMBNAIL' as const,
   _1536X1536: '_1536X1536' as const,
   _2048X2048: '_2048X2048' as const
}

export const enumContentTypesOfPostFormatEnum = {
   POST: 'POST' as const
}

export const enumContentTypesOfTagEnum = {
   POST: 'POST' as const
}

export const enumTaxonomyEnum = {
   CATEGORY: 'CATEGORY' as const,
   POSTFORMAT: 'POSTFORMAT' as const,
   TAG: 'TAG' as const
}

export const enumCategoryIdType = {
   DATABASE_ID: 'DATABASE_ID' as const,
   ID: 'ID' as const,
   NAME: 'NAME' as const,
   SLUG: 'SLUG' as const,
   URI: 'URI' as const
}

export const enumCommentNodeIdTypeEnum = {
   DATABASE_ID: 'DATABASE_ID' as const,
   ID: 'ID' as const
}

export const enumContentNodeIdTypeEnum = {
   DATABASE_ID: 'DATABASE_ID' as const,
   ID: 'ID' as const,
   URI: 'URI' as const
}

export const enumContentTypeIdTypeEnum = {
   ID: 'ID' as const,
   NAME: 'NAME' as const
}

export const enumMediaItemIdType = {
   DATABASE_ID: 'DATABASE_ID' as const,
   ID: 'ID' as const,
   SLUG: 'SLUG' as const,
   SOURCE_URL: 'SOURCE_URL' as const,
   URI: 'URI' as const
}

export const enumMenuNodeIdTypeEnum = {
   DATABASE_ID: 'DATABASE_ID' as const,
   ID: 'ID' as const,
   LOCATION: 'LOCATION' as const,
   NAME: 'NAME' as const,
   SLUG: 'SLUG' as const
}

export const enumMenuLocationEnum = {
   CTA: 'CTA' as const,
   PRIMARY: 'PRIMARY' as const,
   SECONDARY: 'SECONDARY' as const
}

export const enumMenuItemNodeIdTypeEnum = {
   DATABASE_ID: 'DATABASE_ID' as const,
   ID: 'ID' as const
}

export const enumPageIdType = {
   DATABASE_ID: 'DATABASE_ID' as const,
   ID: 'ID' as const,
   URI: 'URI' as const
}

export const enumPluginStatusEnum = {
   ACTIVE: 'ACTIVE' as const,
   DROP_IN: 'DROP_IN' as const,
   INACTIVE: 'INACTIVE' as const,
   MUST_USE: 'MUST_USE' as const,
   NETWORK_ACTIVATED: 'NETWORK_ACTIVATED' as const,
   NETWORK_INACTIVE: 'NETWORK_INACTIVE' as const,
   PAUSED: 'PAUSED' as const,
   RECENTLY_ACTIVE: 'RECENTLY_ACTIVE' as const,
   UPGRADE: 'UPGRADE' as const
}

export const enumPostIdType = {
   DATABASE_ID: 'DATABASE_ID' as const,
   ID: 'ID' as const,
   SLUG: 'SLUG' as const,
   URI: 'URI' as const
}

export const enumPostFormatIdType = {
   DATABASE_ID: 'DATABASE_ID' as const,
   ID: 'ID' as const,
   NAME: 'NAME' as const,
   SLUG: 'SLUG' as const,
   URI: 'URI' as const
}

export const enumTagIdType = {
   DATABASE_ID: 'DATABASE_ID' as const,
   ID: 'ID' as const,
   NAME: 'NAME' as const,
   SLUG: 'SLUG' as const,
   URI: 'URI' as const
}

export const enumTaxonomyIdTypeEnum = {
   ID: 'ID' as const,
   NAME: 'NAME' as const
}

export const enumTermNodeIdTypeEnum = {
   DATABASE_ID: 'DATABASE_ID' as const,
   ID: 'ID' as const,
   NAME: 'NAME' as const,
   SLUG: 'SLUG' as const,
   URI: 'URI' as const
}

export const enumUserNodeIdTypeEnum = {
   DATABASE_ID: 'DATABASE_ID' as const,
   EMAIL: 'EMAIL' as const,
   ID: 'ID' as const,
   SLUG: 'SLUG' as const,
   URI: 'URI' as const,
   USERNAME: 'USERNAME' as const
}

export const enumUsersConnectionOrderbyEnum = {
   DISPLAY_NAME: 'DISPLAY_NAME' as const,
   EMAIL: 'EMAIL' as const,
   LOGIN: 'LOGIN' as const,
   LOGIN_IN: 'LOGIN_IN' as const,
   NICE_NAME: 'NICE_NAME' as const,
   NICE_NAME_IN: 'NICE_NAME_IN' as const,
   REGISTERED: 'REGISTERED' as const,
   URL: 'URL' as const
}

export const enumUserRoleEnum = {
   ADMINISTRATOR: 'ADMINISTRATOR' as const,
   AUTHOR: 'AUTHOR' as const,
   CONTRIBUTOR: 'CONTRIBUTOR' as const,
   CUSTOMER: 'CUSTOMER' as const,
   EDITOR: 'EDITOR' as const,
   SEO_EDITOR: 'SEO_EDITOR' as const,
   SEO_MANAGER: 'SEO_MANAGER' as const,
   SHOP_MANAGER: 'SHOP_MANAGER' as const,
   SUBSCRIBER: 'SUBSCRIBER' as const,
   TRANSLATOR: 'TRANSLATOR' as const
}

export const enumUsersConnectionSearchColumnEnum = {
   EMAIL: 'EMAIL' as const,
   ID: 'ID' as const,
   LOGIN: 'LOGIN' as const,
   NICENAME: 'NICENAME' as const,
   URL: 'URL' as const
}

export const enumMediaItemStatusEnum = {
   AUTO_DRAFT: 'AUTO_DRAFT' as const,
   INHERIT: 'INHERIT' as const,
   PRIVATE: 'PRIVATE' as const,
   TRASH: 'TRASH' as const
}

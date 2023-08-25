const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');

// Schema to create Post model
const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      minLength: 15,
      maxLength: 500,
    }, 

    createdAt: {
      type: Date,
      default: Date.now,
    },
    username: {
      type: String,
      required: true,
  },    
    reactions: [Reaction],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

// Create a virtual property `getReactions` that gets the amount of reactions associated with an thought
thoughtSchema
  .virtual('reactionCount')
  // Getter
  .get(function () {
    return this.reactions.length;
  });

// Initialize our Thought  model
const Thought  = model('thought', thoughtSchema);

module.exports = Thought ;

class PolyTreeNode

    def initialize(value)
        @parent = nil
        @children = []
        @value = value
    end


    def parent=(code)
        @parent.children.delete_at(@parent.children.index(self)) unless @parent.nil?
        @parent = code  
        return nil if code.nil? #if self is the root, and has no parent, code will be nil
        code.children << self if !code.children.include?(self)
        # nil
    end
    # node3.parent = node1
    
    def add_child(child_node)
        child_node.parent=(self)
    end

    def remove_child(child_node)
        raise if child_node.parent.nil?
        child_node.parent=(nil)
    end

    def dfs(target_val)
        return self if self.value == target_val
        
        list = self.children
        list.each do |child|
            res = child.dfs(target_val)
            return res unless res.nil?
        end
        nil
    end
require "byebug"
    def bfs(target_val)
        queue = [self]

        while queue.length > 0
            # debugger
            current_node = queue.shift
            return current_node if current_node.value == target_val
            current_node.children.each { |el| queue << el }
        end
#i wonder if we could solve it another way 
#but i guess not since it's an algorithm
# yeah, it requires that we do the remove, check and add in the exact order
        nil
    end

    # def bfs(target_val)
    #     queue = [self]
    #     until queue.empty?
    #         el = queue.shift #removes and saves to el
        
    #         return el if target_val == el.value #returns el if el.value == target_val
    #         queue.concat(el.children)  #add next layers of nodes of el to array queue
    #     end
    #   nil
        
    # end
    
    def inspect
        "#{value}"
    end

    #private 
    attr_reader :parent, :children, :value
end